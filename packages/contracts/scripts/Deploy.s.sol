// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.25 <0.9.0;
import "forge-std/Script.sol";
import "forge-std/console.sol";

import "./DeployHelpers.s.sol";

import { Todo } from "../src/Todo.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract Deploy is DeployHelpers {
    error InvalidPrivateKey(string);

    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }
        vm.startBroadcast(deployerPrivateKey);

        Todo todo = new Todo();
        console.log("Foo deployed at address: %s", address(todo));

        vm.stopBroadcast();

    }
}
