// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.0;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title RewardsDistributor
 * @notice Distributes rewards to users based on Merkle tree algorithm
 */
contract RewardsDistributor is Ownable {
    using SafeERC20 for IERC20;
    using MerkleProof for bytes32[];

    /**
     * @notice Signals that the rewards holder address has been updated
     * @param oldRewardsHolder The previous rewards holder address
     * @param newRewardsHolder The new rewards holder address
     */
    event RewardsHolderUpdated(
        address oldRewardsHolder,
        address newRewardsHolder
    );

    /**
     * @notice Signals that the Merkle Root has been updated
     * @param oldMerkleRoot The previous Merkle Root
     * @param newMerkleRoot The new Merkle Root
     */
    event MerkleRootUpdated(bytes32 oldMerkleRoot, bytes32 newMerkleRoot);

    /**
     * @notice Signals that a claim has been succesfully processed
     * @param stakingProvider The staking provider address of the claim
     * @param amount The amount claimed
     * @param beneficiary The beneficiary address
     * @param merkleRoot The Merkle root used for the claim
     */
    event Claimed(
        address indexed stakingProvider,
        uint256 amount,
        address beneficiary,
        bytes32 merkleRoot
    );

    address public immutable TOKEN;
    address public rewardsHolder;
    bytes32 public merkleRoot;
    mapping(address => uint256) public cumulativeClaimed;
    struct Claim {
        address stakingProvider;
        address beneficiary;
        uint256 amount;
        bytes32[] proof;
    }

    /**
     * @notice Constructor for the RewardsDistributor contract
     * @param _initialOwner Address to be the owner of the contract
     * @param _token Token contract address
     * @param _rewardsHolder Rewards holder address
     */
    constructor(
        address _initialOwner,
        address _token,
        address _rewardsHolder
    ) Ownable(_initialOwner) {
        require(IERC20(_token).totalSupply() > 0, "Token contract must be set");
        require(
            _rewardsHolder != address(0),
            "Rewards holder must be an address"
        );

        TOKEN = _token;
        rewardsHolder = _rewardsHolder;
    }

    /**
     * @notice Sets the address from where Merkle rewards are being pulled
     * @param newRewardsHolder New rewards holder address
     */
    function setRewardsHolder(
        address newRewardsHolder
    ) external onlyOwner {
        require(
            newRewardsHolder != address(0),
            "Rewards Holder must be an address"
        );
        emit RewardsHolderUpdated(rewardsHolder, newRewardsHolder);
        rewardsHolder = newRewardsHolder;
    }

    /**
     * @notice Sets a new Merkle root
     * @param newMerkleRoot New Merkle root
     */
    function setMerkleRoot(bytes32 newMerkleRoot) external onlyOwner {
        emit MerkleRootUpdated(merkleRoot, newMerkleRoot);
        merkleRoot = newMerkleRoot;
    }

    /**
     * @notice Claims rewards of an address sending them to beneficiary address
     * @param stakingProvider Staking provider address of the stake
     * @param beneficiary Beneficiary address of the stake
     * @param cumulativeAmount Cumulative amount of rewards of the stake
     * @param expectedMerkleRoot Expected merkle root currently set
     * @param merkleProof Merkle proof to validate the claim
     */
    function claim(
        address stakingProvider,
        address beneficiary,
        uint256 cumulativeAmount,
        bytes32 expectedMerkleRoot,
        bytes32[] calldata merkleProof
    ) public {
        require(
            merkleRoot == expectedMerkleRoot,
            "Wrong Merkle root. Was it updated?"
        );

        // Verify the merkle proof
        bytes32 leaf = keccak256(
            abi.encodePacked(
                stakingProvider,
                beneficiary,
                cumulativeAmount
            )
        );
        require(
            merkleProof.verify(merkleRoot, leaf),
            "Invalid Merkle proof provided"
        );

        // Mark it claimed
        uint256 alreadyClaimed = cumulativeClaimed[stakingProvider];
        require(alreadyClaimed < cumulativeAmount, "Nothing to claim");
        cumulativeClaimed[stakingProvider] = cumulativeAmount;

        // Send the tokens
        unchecked {
            uint256 amount = cumulativeAmount - alreadyClaimed;
            IERC20(TOKEN).safeTransferFrom(rewardsHolder, beneficiary, amount);
            emit Claimed(
                stakingProvider,
                amount,
                beneficiary,
                expectedMerkleRoot
            );
        }
    }

    /**
     * @notice Claim a batch of rewards in a single transaction
     * @param expectedMerkleRoot Expected merkle root currently set
     * @param claims Array of claims to process
     */
    function batchClaim(
        bytes32 expectedMerkleRoot,
        Claim[] calldata claims
    ) external {
        for (uint i; i < claims.length; i++) {
            claim(
                claims[i].stakingProvider,
                claims[i].beneficiary,
                claims[i].amount,
                expectedMerkleRoot,
                claims[i].proof
            );
        }
    }
}
