// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.0;

import {Script, console} from "forge-std/Script.sol";
import {RewardsDistributor} from "../src/RewardsDistributor.sol";

contract RewardsDistributorScript is Script {
    RewardsDistributor public rewardsDistributor;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // for Sepolia
        address owner = msg.sender;
        address token = 0x46abDF5aD1726ba700794539C3dB8fE591854729;
        address rewardsHolder = msg.sender;

        rewardsDistributor = new RewardsDistributor(
            owner,
            token,
            rewardsHolder
        );

        vm.stopBroadcast();
    }
}