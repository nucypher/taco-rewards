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

contract RewardsDistributorBatchClaimTest is Test {
    address public constant REWARDS_HOLDER =
        0x6863f42A27dC0Bab1d0E6De62Af1f298ddCfDE16;

    ERC20Mock token;
    RewardsDistributor public rewardsDistributor;
    address owner;

    // This is a merkle tree with 10 leaves (10 claims)
    // Here we have only 4 of them
    bytes32 merkleRoot;
    address stakingProvider0;
    address beneficiary0;
    uint256 cumulativeAmount0;
    bytes32[] merkleProof0;
    address stakingProvider1;
    address beneficiary1;
    uint256 cumulativeAmount1;
    bytes32[] merkleProof1;
    address stakingProvider2;
    address beneficiary2;
    uint256 cumulativeAmount2;
    bytes32[] merkleProof2;
    address stakingProvider3;
    address beneficiary3;
    uint256 cumulativeAmount3;
    bytes32[] merkleProof3;

    RewardsDistributor.Claim[] claims;

    function setUp() public {
        uint256 tokenSupply = 1_000_000 ether;
        token = new ERC20Mock(REWARDS_HOLDER, tokenSupply);
        owner = msg.sender; // The owner is the Foundry sender

        rewardsDistributor = new RewardsDistributor(
            owner,
            address(token),
            REWARDS_HOLDER
        );

        vm.prank(REWARDS_HOLDER);
        token.approve(address(rewardsDistributor), tokenSupply);

        // set up the merkle tree data
        merkleRoot = 0x971af7943ef35c1951d2b34a0f543aceea4d990b43386fdc0fc61bfc50644c05;

        vm.prank(owner);
        rewardsDistributor.setMerkleRoot(merkleRoot);

        // leaf 0
        stakingProvider0 = 0x2f9e94217C3f3493A2E65676E0F409fF5642A9AC;
        beneficiary0 = 0x2f9e94217C3f3493A2E65676E0F409fF5642A9AC;
        cumulativeAmount0 = 1000000000000;
        bytes32[4] memory merkleProofFixed0 = [
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
        merkleProof0 = new bytes32[](4);
        for (uint256 i = 0; i < 4; i++) {
            merkleProof0[i] = merkleProofFixed0[i];
        }
        // leaf 1
        stakingProvider1 = 0x005511deD6Aa2012DaE1307290779ED52639cCee;
        beneficiary1 = 0x005511deD6Aa2012DaE1307290779ED52639cCee;
        cumulativeAmount1 = 2000000000000;
        bytes32[4] memory merkleProofFixed1 = [
            bytes32(
                0x81c73e315412a576f33b7adfae9239e98aefe50869ec606c84b1c2dc000d7484
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
        merkleProof1 = new bytes32[](4);
        for (uint256 i = 0; i < 4; i++) {
            merkleProof1[i] = merkleProofFixed1[i];
        }
        // leaf 2
        stakingProvider2 = 0x729EE12F085cf02a7c365f81192f7774572663cA;
        beneficiary2 = 0xecd958EF8F5Dc16Cec4ef7d5441bFd9163C3f725;
        cumulativeAmount2 = 8840000000000;
        bytes32[4] memory merkleProofFixed2 = [
            bytes32(
                0x6993947da2248f7bf046f9ab27b7cc4f2625db627cf163b7e1a31b0018afc26d
            ),
            bytes32(
                0x363ac2361beaa633d6ef504ff1a4336b8cf2658c34c9086ea23e22bb7ef3d9f5
            ),
            bytes32(
                0xea4c5d91ad89102ba8b7e93436081b349452ac401ad6ab14d1036408c188a507
            ),
            bytes32(
                0x2c284433e85395a49e74b68c571b119870574c674d7c783a7f3c74c606610502
            )
        ];
        merkleProof2 = new bytes32[](4);
        for (uint256 i = 0; i < 4; i++) {
            merkleProof2[i] = merkleProofFixed2[i];
        }
        // leaf 3
        stakingProvider3 = 0xE4c8d3bcf8C87D73CE38Ab2DC288d309072ee4E7;
        beneficiary3 = 0xecd958EF8F5Dc16Cec4ef7d5441bFd9163C3f725;
        cumulativeAmount3 = 534000000000;
        bytes32[2] memory merkleProofFixed3 = [
            bytes32(
                0xf52211cbab67fddf51e81a0461685bc441bd353802343c74924f9f0788de9cdb
            ),
            bytes32(
                0x2406b5bd435b4c58e6f25507f0d5766eea7777e07a5361e2824446954e1e1213
            )
        ];
        merkleProof3 = new bytes32[](2);
        for (uint256 i = 0; i < 2; i++) {
            merkleProof3[i] = merkleProofFixed3[i];
        }

        claims.push(RewardsDistributor.Claim({
            stakingProvider: stakingProvider0,
            beneficiary: beneficiary0,
            amount: cumulativeAmount0,
            proof: merkleProof0
        }));
        claims.push(RewardsDistributor.Claim({
            stakingProvider: stakingProvider1,
            beneficiary: beneficiary1,
            amount: cumulativeAmount1,
            proof: merkleProof1
        }));
        claims.push(RewardsDistributor.Claim({
            stakingProvider: stakingProvider2,
            beneficiary: beneficiary2,
            amount: cumulativeAmount2,
            proof: merkleProof2
        }));
        claims.push(RewardsDistributor.Claim({
            stakingProvider: stakingProvider3,
            beneficiary: beneficiary3,
            amount: cumulativeAmount3,
            proof: merkleProof3
        }));
    }

    function test_BatchClaim() public {
        // should be possible to batch claims
        rewardsDistributor.batchClaim(merkleRoot, claims);
    }

    function test_BatchClaim_transfer_tokens_to_beneficiary() public {
        // tokens should be transferred to the beneficiaries
        uint256 balanceBefore0 = token.balanceOf(beneficiary0);
        uint256 balanceBefore1 = token.balanceOf(beneficiary1);
        uint256 balanceBefore2 = token.balanceOf(beneficiary2);

        rewardsDistributor.batchClaim(merkleRoot, claims);

        uint256 balanceAfter0 = token.balanceOf(beneficiary0);
        uint256 balanceAfter1 = token.balanceOf(beneficiary1);
        uint256 balanceAfter2 = token.balanceOf(beneficiary2);
        assertEq(balanceAfter0 - balanceBefore0, cumulativeAmount0);
        assertEq(balanceAfter1 - balanceBefore1, cumulativeAmount1);
        // Note that beneficiary2 and beneficiary3 are the same address
        // i.e. the claim 2 and 3 have the same beneficiary address
        assertEq(balanceAfter2 - balanceBefore2, cumulativeAmount2 + cumulativeAmount3);
    }

    function test_BatchClaim_wrong_proof() public {
        // tokens should not be transferred if wrong proof

        // wrong address, should fail
        claims[3].stakingProvider = 0xffff8E99e52DBfb8C305dE942f842C882aD2D1a5;

        vm.expectRevert("Invalid Merkle proof provided");
        rewardsDistributor.batchClaim(merkleRoot, claims);

        assertEq(token.balanceOf(beneficiary0), 0);
        assertEq(token.balanceOf(beneficiary1), 0);
        assertEq(token.balanceOf(beneficiary2), 0);
        assertEq(token.balanceOf(beneficiary3), 0);
    }
}
