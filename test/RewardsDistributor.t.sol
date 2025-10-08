// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";
import {console} from "forge-std/console.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {RewardsDistributor} from "../src/RewardsDistributor.sol";

contract ERC20Mock is ERC20 {
    constructor(
        address _rewardsHolder,
        uint256 _initialSupply
    ) ERC20("Test Token", "TST") {
        _mint(_rewardsHolder, _initialSupply);
    }
}

contract RewardsDistributorTest is Test {
    address public constant REWARDS_HOLDER =
        0x6863f42A27dC0Bab1d0E6De62Af1f298ddCfDE16;

    ERC20Mock public token;
    RewardsDistributor public rewardsDistributor;
    address public owner;

    bytes32 merkleRoot;
    address stakingProvider;
    address beneficiary;
    uint256 cumulativeAmount;
    bytes32[] merkleProof;

    function setUp() public {
        uint256 tokenSupply = 1_000_000 ether;
        token = new ERC20Mock(REWARDS_HOLDER, tokenSupply);
        owner = msg.sender; // The owner is the Foundry sender

        // valid merkle leaf
        merkleRoot = 0x971af7943ef35c1951d2b34a0f543aceea4d990b43386fdc0fc61bfc50644c05;
        stakingProvider = 0x2f9e94217C3f3493A2E65676E0F409fF5642A9AC;
        beneficiary = 0x2f9e94217C3f3493A2E65676E0F409fF5642A9AC;
        cumulativeAmount = 1000000000000;
        bytes32[4] memory merkleProofFixed = [
            bytes32(
                0x753e810ed621eaa35348ddb2bbcf81e93828fd6a69b15029589ea31c093c99ef
            ),
            bytes32(
                0x4662c3b26baece43e1444c93540566b8a9ed3e88b259b63970091be98c8fbcc8
            ),
            bytes32(
                0x07f117b1d7aa852c979367c249b57b7c1cb98dfeccb06ac0ee719d6a07880d99
            ),
            bytes32(
                0x2c284433e85395a49e74b68c571b119870574c674d7c783a7f3c74c606610502
            )
        ];

        merkleProof = new bytes32[](4);
        for (uint256 i = 0; i < 4; i++) {
            merkleProof[i] = merkleProofFixed[i];
        }

        rewardsDistributor = new RewardsDistributor(
            owner,
            address(token),
            REWARDS_HOLDER
        );

        vm.prank(REWARDS_HOLDER);
        token.approve(address(rewardsDistributor), tokenSupply);

        vm.prank(owner);
        rewardsDistributor.setMerkleRoot(merkleRoot);
    }

    // CONSTRUCTOR ============================================================
    function test_Revert_Constructor_OwnerNotSet() public {
        vm.expectRevert(
            "OwnableInvalidOwner(0x0000000000000000000000000000000000000000)"
        );
        new RewardsDistributor(address(0), address(token), REWARDS_HOLDER);
    }

    function test_Revert_Constructor_TokenNotSet() public {
        ERC20Mock tokenFake = new ERC20Mock(REWARDS_HOLDER, 0);
        vm.expectRevert("Token contract must be set");
        new RewardsDistributor(owner, address(tokenFake), REWARDS_HOLDER);
    }

    function test_Revert_Constructor_RewardsHolderNotSet() public {
        vm.expectRevert("Rewards holder must be an address");
        new RewardsDistributor(owner, address(token), address(0));
    }

    function test_Constructor() public view {
        assertEq(rewardsDistributor.TOKEN(), address(token));
        assertEq(rewardsDistributor.rewardsHolder(), REWARDS_HOLDER);
        assertEq(rewardsDistributor.owner(), owner);
    }

    // SET MERKLE REWARDS HOLDER ==============================================
    function test_SetMerkleRewardsHolder() public {
        // the rewards holder is the initially set one
        assertEq(rewardsDistributor.rewardsHolder(), REWARDS_HOLDER);

        // non-owner should not be able to set a new rewards holder
        vm.prank(0x00002b80de79C334e5949fcB3fe8667d1Da410FB);
        vm.expectRevert(
            "OwnableUnauthorizedAccount(0x00002b80de79C334e5949fcB3fe8667d1Da410FB)"
        );
        rewardsDistributor.setMerkleRewardsHolder(REWARDS_HOLDER);

        // only valid addresses can be set as rewards holder
        vm.prank(owner);
        vm.expectRevert("Rewards Holder must be an address");
        rewardsDistributor.setMerkleRewardsHolder(address(0));

        // check rewards holder is updated and event emitted
        address newRewardsHolder = 0xffff8E99e52DBfb8C305dE942f842C882aD2D1a5;
        vm.prank(owner);
        vm.expectEmit(true, true, true, true);
        emit RewardsDistributor.RewardsHolderUpdated(
            REWARDS_HOLDER,
            newRewardsHolder
        );
        rewardsDistributor.setMerkleRewardsHolder(newRewardsHolder);
        assertEq(rewardsDistributor.rewardsHolder(), newRewardsHolder);
    }

    // SET MERKLE ROOT ========================================================
    function test_SetMerkleRoot() public {
        bytes32 oldMerkleRoot = rewardsDistributor.merkleRoot();

        // non-owner should not be able to set a new rewards holder
        bytes32 newMerkleRoot = 0xb507ee578ed74eec70b511a841445ee19305f77bc2114ac878ced88c947fc616;
        vm.prank(0x00002b80de79C334e5949fcB3fe8667d1Da410FB);
        vm.expectRevert(
            "OwnableUnauthorizedAccount(0x00002b80de79C334e5949fcB3fe8667d1Da410FB)"
        );
        rewardsDistributor.setMerkleRoot(newMerkleRoot);

        // check merkle root is updated and event emitted
        vm.prank(owner);
        vm.expectEmit(true, true, true, true);
        emit RewardsDistributor.MerkleRootUpdated(oldMerkleRoot, newMerkleRoot);
        rewardsDistributor.setMerkleRoot(newMerkleRoot);
        assertEq(rewardsDistributor.merkleRoot(), newMerkleRoot);
    }

    // CLAIM ==================================================================
    function test_Claim_Revert_Wrong_MerkleRoot() public {
        // should fail if wrong merkle root
        bytes32 wrongMerkleRoot = 0x2f1033ee00ea27265a9ae8bf1e8e6b3e1741509f52b58bfe4ed75edc47f70b91;
        vm.expectRevert("Wrong Merkle root. Was it updated?");
        rewardsDistributor.claim(
            stakingProvider,
            beneficiary,
            cumulativeAmount,
            wrongMerkleRoot,
            merkleProof
        );
    }

    function test_Claim_Revert_Wrong_StakingProvider() public {
        // should fail if wrong staking provider
        address invalidStakingProvider = 0x00002b80de79C334e5949fcB3fe8667d1Da410FB;
        vm.expectRevert("Invalid Merkle proof provided");
        rewardsDistributor.claim(
            invalidStakingProvider,
            beneficiary,
            cumulativeAmount,
            merkleRoot,
            merkleProof
        );
    }

    function test_Claim_Revert_Wrong_Beneficiary() public {
        // should fail if wrong staking provider
        address invalidBeneficiary = 0x00002b80de79C334e5949fcB3fe8667d1Da410FB;
        vm.expectRevert("Invalid Merkle proof provided");
        rewardsDistributor.claim(
            stakingProvider,
            invalidBeneficiary,
            cumulativeAmount,
            merkleRoot,
            merkleProof
        );
    }

    function test_Claim_Revert_Wrong_Amount() public {
        // should fail if wrong amount
        uint256 invalidAmount = 99999999;
        vm.expectRevert("Invalid Merkle proof provided");
        rewardsDistributor.claim(
            stakingProvider,
            beneficiary,
            invalidAmount,
            merkleRoot,
            merkleProof
        );
    }

    function test_Claim_Revert_Wrong_MerkleProof() public {
        // should fail if invalid proof
        bytes32[] memory invalidMerkleProof = new bytes32[](4);
        for (uint256 i = 0; i < merkleProof.length - 1; i++) {
            invalidMerkleProof[i] = merkleProof[i];
        }
        invalidMerkleProof[merkleProof.length - 1] = bytes32(0);

        vm.expectRevert("Invalid Merkle proof provided");
        rewardsDistributor.claim(
            stakingProvider,
            beneficiary,
            cumulativeAmount,
            merkleRoot,
            invalidMerkleProof
        );
    }

    function test_Claim_CumulativeClaimed() public {
        // should mark the amount as claimed and transfer the tokens
        uint256 initialClaimedAmount = rewardsDistributor.cumulativeClaimed(
            stakingProvider
        );

        rewardsDistributor.claim(
            stakingProvider,
            beneficiary,
            cumulativeAmount,
            merkleRoot,
            merkleProof
        );

        uint256 finalClaimedAmount = rewardsDistributor.cumulativeClaimed(
            stakingProvider
        );
        uint256 expectedClaimedAmount = initialClaimedAmount + cumulativeAmount;

        assertEq(finalClaimedAmount, expectedClaimedAmount);
    }

    function test_Claim_Tokens_Transferred() public {
        // should transfer the tokens to the beneficiary
        uint256 initialBeneficiaryBalance = token.balanceOf(beneficiary);
        rewardsDistributor.claim(
            stakingProvider,
            beneficiary,
            cumulativeAmount,
            merkleRoot,
            merkleProof
        );
        uint256 finalBeneficiaryBalance = token.balanceOf(beneficiary);
        uint256 expectedBeneficiaryBalance = initialBeneficiaryBalance +
            cumulativeAmount;
        assertEq(finalBeneficiaryBalance, expectedBeneficiaryBalance);
    }

    function test_Claim_Event_Emitted() public {
        // should be emitted a Claim event
        vm.expectEmit(true, true, true, true);
        emit RewardsDistributor.Claimed(
            stakingProvider,
            cumulativeAmount,
            beneficiary,
            merkleRoot
        );
        rewardsDistributor.claim(
            stakingProvider,
            beneficiary,
            cumulativeAmount,
            merkleRoot,
            merkleProof
        );
    }

    function test_Claim_Cannot_Claim_Again() public {
        // should not be possible to get twice the same claim
        rewardsDistributor.claim(
            stakingProvider,
            beneficiary,
            cumulativeAmount,
            merkleRoot,
            merkleProof
        );
        vm.expectRevert("Nothing to claim");
        rewardsDistributor.claim(
            stakingProvider,
            beneficiary,
            cumulativeAmount,
            merkleRoot,
            merkleProof
        );
    }

    // BATCH CLAIM ============================================================
    function test_BatchClaim() public {
        // should be possible to batch claims
        RewardsDistributor.Claim[] memory claims = new RewardsDistributor.Claim[](2);
        claims[0] = RewardsDistributor.Claim({
            stakingProvider: stakingProvider,
            beneficiary: beneficiary,
            amount: cumulativeAmount,
            proof: merkleProof
        });

        // this second claim is part of the same merkle tree
        bytes32[] memory proof1 = new bytes32[](2);
        proof1[0] = 0xa659c2d8eecf38adbe9c83f488e2a823a8deddd3103e20e74c923f00275a0d19;
        proof1[1] = 0x2406b5bd435b4c58e6f25507f0d5766eea7777e07a5361e2824446954e1e1213;
        claims[1] = RewardsDistributor.Claim({
            stakingProvider: 0x91aa9159242c298810b280E3AfFC0b4B289b60cc,
            beneficiary: 0xecd958EF8F5Dc16Cec4ef7d5441bFd9163C3f725,
            amount: 3000000000000,
            proof: proof1
        });

        // this third claim is part of the same merkle tree
        bytes32[] memory proof2 = new bytes32[](4);
        proof2[0] = 0x59247719c52555d9f6311de65206f28c6da50da96b1c87b8e61ba85d3e01df6b;
        proof2[1] = 0x53253b79a3e601d8ac3ff09e7d978b889e5fbc9d70ddd08a3f2238a30d7a4e90;
        proof2[2] = 0xea4c5d91ad89102ba8b7e93436081b349452ac401ad6ab14d1036408c188a507;
        proof2[3] = 0x2c284433e85395a49e74b68c571b119870574c674d7c783a7f3c74c606610502;
        claims[1] = RewardsDistributor.Claim({
            stakingProvider: 0x38445383F364BC835BDAa25e09ab8F1F18479CaE,
            beneficiary: 0x38445383F364BC835BDAa25e09ab8F1F18479CaE,
            amount: 6600000000000,
            proof: proof2
        });

        rewardsDistributor.batchClaim(merkleRoot, claims);
    }
}
