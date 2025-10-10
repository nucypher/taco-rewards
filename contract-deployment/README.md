# TACo Rewards

RewardsDistributor contract development uses [Foundry](https://getfoundry.sh/).

To run the commands, terminal must be in contract-deployment folder:
```sh
cd contract-deployment
```

Compile the contracts:
```sh
forge build
```

Run the tests:
```sh
forge test -vvv
```

## RewardsDistributor deployment notes

Solidity compiler version: `0.8.30`

The Rewards Distributor contract ([0xA08AadA7c59E4A1D4A858fcfA299673d2f6De0c3](https://etherscan.io/address/0xa08aada7c59e4a1d4a858fcfa299673d2f6de0c3)) was deployed using the the following command:
```sh
forge script --chain mainnet script/RewardsDistributor.s.sol:RewardsDistributorScript --rpc-url $MAINNET_RPC_URL --broadcast --verify -vvvv --ledger --mnemonic-indexes 6 --sender 0xe0AfAd35ADA675959E6836D38e7c9F4A207CFd27
```

The Etherscan verification failed, so I run:
```sh
forge verify-contract 0xA08AadA7c59E4A1D4A858fcfA299673d2f6De0c3 src/RewardsDistributor.sol:RewardsDistributor --compiler-version 0.8.30
```