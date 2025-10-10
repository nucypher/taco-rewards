// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.0;

import {Script, console} from "forge-std/Script.sol";
import {RewardsDistributor} from "../src/RewardsDistributor.sol";

contract RewardsDistributorScript is Script {
    RewardsDistributor public rewardsDistributor;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // for mainnet
        address owner = 0xe0AfAd35ADA675959E6836D38e7c9F4A207CFd27;
        address token = 0xCdF7028ceAB81fA0C6971208e83fa7872994beE5;
        address rewardsHolder = 0xe0AfAd35ADA675959E6836D38e7c9F4A207CFd27;

        rewardsDistributor = new RewardsDistributor(
            owner,
            token,
            rewardsHolder
        );

        vm.stopBroadcast();
    }
}