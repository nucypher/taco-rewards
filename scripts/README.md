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

-

## Development

### Subgraphs

Some script uses [subgraphs](https://thegraph.com/explorer) for querying staking
data and calculating the appropriate rewards. These subgraphs are queried using
(`graph-client`)[https://thegraph.com/docs/en/querying/graph-client/README/]
since this library supports auto-pagination, retry, fallback, etc.

Modification or addition of new subgraphs must be done in `.graphclientrc.yml`.
Also, new queries must be added to this file in addition to the `src/script/graphql`
folder.

Every time the subgraph queries are modified, these must be recompiled:

```bash
npm run build-graphclient
```
