# TACo Rewards Distribution Scripts

This directory contains the scripts used in the TACo rewards distribution process.

## Scripts

### combine_heartbeat_files.js
A script to combine multiple DKG heartbeat JSON files into a single JSON file.

Heartbeat DKG rounds are automatically executed every week, [Heartbeat DKG workflow](https://github.com/nucypher/nucypher-contracts/actions/workflows/heartbeat.yml).
Each resulting file should be something like:

```json
{
    "1507": [
        "0x36efDC29c776c35B55D08E657bF3048eDf65b1dD",
        "0x5F24A56620E8aB22Ff01585F83F6f63F8B5c205E"
    ],
    "1508": [
        "0x3070f20f86fDa706Ac380F5060D256028a46eC29",
        "0xE58dfD1bC7f3Ca2b694bDFDc1C6cac80179A7515"
    ],
    "1509": [
        "0x456D643CD97b058Fd3bBBEB76f04B1DE3679bc6A",
        "0xd6Fc4e95E0622DdedAD3289dF7873d8136645E8d"
    ],
    [...]
}
```

#### Usage

```bash
node ./scripts/combine_heartbeat_files.js -f ./heartbeat-rituals-1.json -f ./heartbeat-rituals-2.json -f ./heartbeat-rituals-3.json -f ./heartbeat-rituals-4.json

Combining heartbeat files:  [
  './heartbeat-rituals-1.json',
  './heartbeat-rituals-2.json',
  './heartbeat-rituals-3.json',
  './heartbeat-rituals-4.json'
]
Reading heartbeat file:  ./heartbeat-rituals-1.json
Reading heartbeat file:  ./heartbeat-rituals-2.json
Reading heartbeat file:  ./heartbeat-rituals-3.json
Reading heartbeat file:  ./heartbeat-rituals-4.json
✅ Combined heartbeat files written to disk (heartbeats_combined.json)
```


### new_rewards_dist.js

A CLI-based script for generating TACo rewards distributions.

The calculation of penalization requires a combined file of the 4 DKG heartbeat rounds
executed during the month whose rewards we are calculating. This is a JSON file
containing the artifacts of the DKG heartbeat rounds: these files can be combined
using the `combine_heartbeat_files.js` script mentioned above.

#### Usage

```bash
node scripts/new_rewards_dist.js \
--start-date <start-date> \
--end-date <end-date> \
--rituals-path <rituals-json-path>
```

```bash
node scripts/new_rewards_dist.js -s 2025-09-01 -e 2025-10-01 --rituals-path heartbeats_combined.json
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
