# TACo Rewards Distribution Scripts

This directory contains the scripts used in the TACo rewards distribution process.

## Scripts

### new_rewards_dist.js

A CLI-based script for generating TACo rewards distributions.

#### Usage

```bash
node scripts/new_rewards_dist.js \
--start-date <start-date> \
--end-date <end-date>
```

```bash
node scripts/new_rewards_dist.js -s 2025-09-01 -e 2025-10-01
```

#### Environment variables

Requires a `.env` file with necessary configuration:

```dotenv
POLYGON_RPC_URL=https://polygon-mainnet.infura.io/v3/<INFURA_KEY>
```

### claim_rewards.js

A script to claim TACo rewards for all stakes.

The script calls the `batchClaim` function on the
[TACo Rewards distributor contract](https://etherscan.io/address/0xa08aada7c59e4a1d4a858fcfa299673d2f6de0c3)
and passes the data for every stake. When executed, the TACo rewards earned by
each stake will be transferred to its corresponding beneficiary address.

This transaction can be executed by any Ethereum address.

#### Usage

```bash
node scripts/claim_rewards.js
```

#### Environment variables

Requires a `.env` file with necessary configuration:

```dotenv
ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/<INFURA_KEY>
CLAIMER_PRIVATE_KEY=<PRIVATE_KEY>
```

The claimer address is the one that will execute the onchain transaction. Any
EOA with enough ETH for gas can be set here.

## Development

### Subgraphs

Some scripts use [subgraphs](https://thegraph.com/explorer) for querying staking
data and calculating the appropriate rewards. These subgraphs are queried using
[`graph-client`](https://thegraph.com/docs/en/querying/graph-client/README/)
since this library supports auto-pagination, retry, fallback, etc.

Modification or addition of new subgraphs must be done in `.graphclientrc.yml`.
Also, new queries must be added to this file in addition to the `scripts/utils/graphql`
folder.

Every time the subgraph queries are modified, these must be recompiled:

```bash
npm run build-graphclient
```
