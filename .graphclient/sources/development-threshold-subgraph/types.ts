// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace DevelopmentThresholdSubgraphTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

/** Account represents the base user data: user's stakes and delegations */
export type Account = {
  /** ID is the account's ETH address */
  id: Scalars['ID']['output'];
  stakes?: Maybe<Array<StakeData>>;
  delegatee?: Maybe<TokenholderDelegation>;
};


/** Account represents the base user data: user's stakes and delegations */
export type AccountstakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakeData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeData_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  stakes_?: InputMaybe<StakeData_filter>;
  delegatee?: InputMaybe<Scalars['String']['input']>;
  delegatee_not?: InputMaybe<Scalars['String']['input']>;
  delegatee_gt?: InputMaybe<Scalars['String']['input']>;
  delegatee_lt?: InputMaybe<Scalars['String']['input']>;
  delegatee_gte?: InputMaybe<Scalars['String']['input']>;
  delegatee_lte?: InputMaybe<Scalars['String']['input']>;
  delegatee_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegatee_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegatee_contains?: InputMaybe<Scalars['String']['input']>;
  delegatee_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegatee_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegatee_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_?: InputMaybe<TokenholderDelegation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};

export type Account_orderBy =
  | 'id'
  | 'stakes'
  | 'delegatee'
  | 'delegatee__id'
  | 'delegatee__totalWeight'
  | 'delegatee__liquidWeight';

export type Aggregation_interval =
  | 'hour'
  | 'day';

/** AppAuthHistory stores each change in the stake's authorization of apps */
export type AppAuthHistory = {
  /** ID is <staking provider address>-<application address>-<block number> */
  id: Scalars['ID']['output'];
  /** AppAuthorization of this update in the authorization */
  appAuthorization: AppAuthorization;
  /** Amount of total T authorized by staking provider to the application in this block */
  amount: Scalars['BigInt']['output'];
  /** Amount of T that has been increased or decreased */
  eventAmount: Scalars['BigInt']['output'];
  /** Type of event that caused this update */
  eventType: Scalars['String']['output'];
  /** Block in which this authorization update became effective */
  blockNumber: Scalars['BigInt']['output'];
  /** Timestamp in which this authorization update became effective */
  timestamp: Scalars['BigInt']['output'];
};

export type AppAuthHistory_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  appAuthorization?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_not?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_gt?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_lt?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_gte?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_lte?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appAuthorization_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appAuthorization_contains?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_not_contains?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_starts_with?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_ends_with?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appAuthorization_?: InputMaybe<AppAuthorization_filter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventAmount?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventType?: InputMaybe<Scalars['String']['input']>;
  eventType_not?: InputMaybe<Scalars['String']['input']>;
  eventType_gt?: InputMaybe<Scalars['String']['input']>;
  eventType_lt?: InputMaybe<Scalars['String']['input']>;
  eventType_gte?: InputMaybe<Scalars['String']['input']>;
  eventType_lte?: InputMaybe<Scalars['String']['input']>;
  eventType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventType_contains?: InputMaybe<Scalars['String']['input']>;
  eventType_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType_starts_with?: InputMaybe<Scalars['String']['input']>;
  eventType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  eventType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType_ends_with?: InputMaybe<Scalars['String']['input']>;
  eventType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  eventType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AppAuthHistory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AppAuthHistory_filter>>>;
};

export type AppAuthHistory_orderBy =
  | 'id'
  | 'appAuthorization'
  | 'appAuthorization__id'
  | 'appAuthorization__appAddress'
  | 'appAuthorization__amount'
  | 'appAuthorization__amountDeauthorizing'
  | 'appAuthorization__appName'
  | 'amount'
  | 'eventAmount'
  | 'eventType'
  | 'blockNumber'
  | 'timestamp';

/** AppAuthorizations represents the stake authorizations to Threshold apps */
export type AppAuthorization = {
  /** ID is <staking provider address>-<application address> */
  id: Scalars['ID']['output'];
  /** Application contract address */
  appAddress: Scalars['Bytes']['output'];
  /** Stake data of the staking provider */
  stake: StakeData;
  /** Amount of total T currently authorized to the application */
  amount: Scalars['BigInt']['output'];
  /** Amount of T that is being deauthorized */
  amountDeauthorizing: Scalars['BigInt']['output'];
  /** Application name (if known) */
  appName?: Maybe<Scalars['String']['output']>;
};

export type AppAuthorization_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  appAddress?: InputMaybe<Scalars['Bytes']['input']>;
  appAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  appAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  appAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  appAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  appAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  appAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  appAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  appAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  appAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  stake?: InputMaybe<Scalars['String']['input']>;
  stake_not?: InputMaybe<Scalars['String']['input']>;
  stake_gt?: InputMaybe<Scalars['String']['input']>;
  stake_lt?: InputMaybe<Scalars['String']['input']>;
  stake_gte?: InputMaybe<Scalars['String']['input']>;
  stake_lte?: InputMaybe<Scalars['String']['input']>;
  stake_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stake_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stake_contains?: InputMaybe<Scalars['String']['input']>;
  stake_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_not_contains?: InputMaybe<Scalars['String']['input']>;
  stake_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_starts_with?: InputMaybe<Scalars['String']['input']>;
  stake_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stake_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_ends_with?: InputMaybe<Scalars['String']['input']>;
  stake_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stake_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_?: InputMaybe<StakeData_filter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountDeauthorizing?: InputMaybe<Scalars['BigInt']['input']>;
  amountDeauthorizing_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountDeauthorizing_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountDeauthorizing_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountDeauthorizing_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountDeauthorizing_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountDeauthorizing_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountDeauthorizing_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  appName?: InputMaybe<Scalars['String']['input']>;
  appName_not?: InputMaybe<Scalars['String']['input']>;
  appName_gt?: InputMaybe<Scalars['String']['input']>;
  appName_lt?: InputMaybe<Scalars['String']['input']>;
  appName_gte?: InputMaybe<Scalars['String']['input']>;
  appName_lte?: InputMaybe<Scalars['String']['input']>;
  appName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appName_contains?: InputMaybe<Scalars['String']['input']>;
  appName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appName_not_contains?: InputMaybe<Scalars['String']['input']>;
  appName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appName_starts_with?: InputMaybe<Scalars['String']['input']>;
  appName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  appName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appName_ends_with?: InputMaybe<Scalars['String']['input']>;
  appName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  appName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AppAuthorization_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AppAuthorization_filter>>>;
};

export type AppAuthorization_orderBy =
  | 'id'
  | 'appAddress'
  | 'stake'
  | 'stake__id'
  | 'stake__beneficiary'
  | 'stake__authorizer'
  | 'stake__stakedAmount'
  | 'amount'
  | 'amountDeauthorizing'
  | 'appName';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/** DAOMetric represents the liquid and staked T tokens in Threshold Network DAO */
export type DAOMetric = {
  /** ID is 'dao-metrics' (singleton entity) */
  id: Scalars['ID']['output'];
  liquidTotal: Scalars['BigInt']['output'];
  stakedTotal: Scalars['BigInt']['output'];
};

export type DAOMetric_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidTotal?: InputMaybe<Scalars['BigInt']['input']>;
  liquidTotal_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidTotal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidTotal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidTotal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidTotal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidTotal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidTotal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTotal?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTotal_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTotal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTotal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTotal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTotal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTotal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTotal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DAOMetric_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DAOMetric_filter>>>;
};

export type DAOMetric_orderBy =
  | 'id'
  | 'liquidTotal'
  | 'stakedTotal';

export type Delegation = {
  /** The delegatee address */
  id: Scalars['ID']['output'];
  totalWeight: Scalars['BigInt']['output'];
};

export type Delegation_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  totalWeight?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWeight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Delegation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Delegation_filter>>>;
};

export type Delegation_orderBy =
  | 'id'
  | 'totalWeight';

/** MinStakeAmount represents the minimum amount of tokens to stake */
export type MinStakeAmount = {
  /** ID is min-stake + transaction hash in which the amount changed */
  id: Scalars['ID']['output'];
  amount: Scalars['BigInt']['output'];
  updatedAt: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
};

export type MinStakeAmount_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MinStakeAmount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MinStakeAmount_filter>>>;
};

export type MinStakeAmount_orderBy =
  | 'id'
  | 'amount'
  | 'updatedAt'
  | 'blockNumber';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  account?: Maybe<Account>;
  accounts: Array<Account>;
  stakeData?: Maybe<StakeData>;
  stakeDatas: Array<StakeData>;
  stakeHistory?: Maybe<StakeHistory>;
  stakeHistories: Array<StakeHistory>;
  appAuthorization?: Maybe<AppAuthorization>;
  appAuthorizations: Array<AppAuthorization>;
  appAuthHistory?: Maybe<AppAuthHistory>;
  appAuthHistories: Array<AppAuthHistory>;
  minStakeAmount?: Maybe<MinStakeAmount>;
  minStakeAmounts: Array<MinStakeAmount>;
  stakeDelegation?: Maybe<StakeDelegation>;
  stakeDelegations: Array<StakeDelegation>;
  tokenholderDelegation?: Maybe<TokenholderDelegation>;
  tokenholderDelegations: Array<TokenholderDelegation>;
  daometric?: Maybe<DAOMetric>;
  daometrics: Array<DAOMetric>;
  tacoOperator?: Maybe<TACoOperator>;
  tacoOperators: Array<TACoOperator>;
  tacoCommitment?: Maybe<TACoCommitment>;
  tacoCommitments: Array<TACoCommitment>;
  delegation?: Maybe<Delegation>;
  delegations: Array<Delegation>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryaccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakeData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeHistoryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeHistoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakeHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeHistory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryappAuthorizationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryappAuthorizationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppAuthorization_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AppAuthorization_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryappAuthHistoryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryappAuthHistoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppAuthHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AppAuthHistory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminStakeAmountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminStakeAmountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MinStakeAmount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinStakeAmount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeDelegationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeDelegationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakeDelegation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeDelegation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenholderDelegationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenholderDelegationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenholderDelegation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenholderDelegation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydaometricArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydaometricsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DAOMetric_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DAOMetric_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytacoOperatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytacoOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TACoOperator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TACoOperator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytacoCommitmentArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytacoCommitmentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TACoCommitment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TACoCommitment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydelegationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydelegationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Delegation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

/** StakeData represents the information about each stake */
export type StakeData = {
  /** ID is the staking provider's ETH address */
  id: Scalars['ID']['output'];
  owner: Account;
  beneficiary: Scalars['Bytes']['output'];
  authorizer: Scalars['Bytes']['output'];
  /** Staked T token total amount */
  stakedAmount: Scalars['BigInt']['output'];
  delegatee?: Maybe<StakeDelegation>;
  stakeHistory?: Maybe<Array<StakeHistory>>;
  authorizations?: Maybe<Array<AppAuthorization>>;
};


/** StakeData represents the information about each stake */
export type StakeDatastakeHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakeHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeHistory_filter>;
};


/** StakeData represents the information about each stake */
export type StakeDataauthorizationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppAuthorization_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AppAuthorization_filter>;
};

export type StakeData_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_filter>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  authorizer?: InputMaybe<Scalars['Bytes']['input']>;
  authorizer_not?: InputMaybe<Scalars['Bytes']['input']>;
  authorizer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  authorizer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  authorizer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  authorizer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  authorizer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  authorizer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  authorizer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  authorizer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  stakedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatee?: InputMaybe<Scalars['String']['input']>;
  delegatee_not?: InputMaybe<Scalars['String']['input']>;
  delegatee_gt?: InputMaybe<Scalars['String']['input']>;
  delegatee_lt?: InputMaybe<Scalars['String']['input']>;
  delegatee_gte?: InputMaybe<Scalars['String']['input']>;
  delegatee_lte?: InputMaybe<Scalars['String']['input']>;
  delegatee_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegatee_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegatee_contains?: InputMaybe<Scalars['String']['input']>;
  delegatee_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegatee_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegatee_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegatee_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatee_?: InputMaybe<StakeDelegation_filter>;
  stakeHistory_?: InputMaybe<StakeHistory_filter>;
  authorizations_?: InputMaybe<AppAuthorization_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakeData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StakeData_filter>>>;
};

export type StakeData_orderBy =
  | 'id'
  | 'owner'
  | 'owner__id'
  | 'beneficiary'
  | 'authorizer'
  | 'stakedAmount'
  | 'delegatee'
  | 'delegatee__id'
  | 'delegatee__totalWeight'
  | 'stakeHistory'
  | 'authorizations';

/** StakeDelegation represents the delegatee to whom the Stake DAO voting power has been delegated */
export type StakeDelegation = Delegation & {
  /** ID is delegatee ETH address */
  id: Scalars['ID']['output'];
  /** Stakes in the T network, tracked by T staking contract */
  totalWeight: Scalars['BigInt']['output'];
  stakeDelegators?: Maybe<Array<StakeData>>;
};


/** StakeDelegation represents the delegatee to whom the Stake DAO voting power has been delegated */
export type StakeDelegationstakeDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakeData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeData_filter>;
};

export type StakeDelegation_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  totalWeight?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWeight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakeDelegators_?: InputMaybe<StakeData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakeDelegation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StakeDelegation_filter>>>;
};

export type StakeDelegation_orderBy =
  | 'id'
  | 'totalWeight'
  | 'stakeDelegators';

/** History of each stake */
export type StakeHistory = {
  /** ID is <staking provider address>-<block number> */
  id: Scalars['ID']['output'];
  /** Stake data of the staking provider */
  stake: StakeData;
  /** The amount that has been added or reduced */
  eventAmount: Scalars['BigInt']['output'];
  /** The total staked amount at this time */
  stakedAmount: Scalars['BigInt']['output'];
  /** The event that updated the staked amount: Staked, ToppedUp or Unstaked */
  eventType: Scalars['String']['output'];
  /** The Ethereum block number in which the stake was updated */
  blockNumber: Scalars['BigInt']['output'];
  /** The timestamp in which the stake was updated */
  timestamp: Scalars['BigInt']['output'];
};

export type StakeHistory_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  stake?: InputMaybe<Scalars['String']['input']>;
  stake_not?: InputMaybe<Scalars['String']['input']>;
  stake_gt?: InputMaybe<Scalars['String']['input']>;
  stake_lt?: InputMaybe<Scalars['String']['input']>;
  stake_gte?: InputMaybe<Scalars['String']['input']>;
  stake_lte?: InputMaybe<Scalars['String']['input']>;
  stake_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stake_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stake_contains?: InputMaybe<Scalars['String']['input']>;
  stake_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_not_contains?: InputMaybe<Scalars['String']['input']>;
  stake_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_starts_with?: InputMaybe<Scalars['String']['input']>;
  stake_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stake_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_ends_with?: InputMaybe<Scalars['String']['input']>;
  stake_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stake_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stake_?: InputMaybe<StakeData_filter>;
  eventAmount?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  eventAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventType?: InputMaybe<Scalars['String']['input']>;
  eventType_not?: InputMaybe<Scalars['String']['input']>;
  eventType_gt?: InputMaybe<Scalars['String']['input']>;
  eventType_lt?: InputMaybe<Scalars['String']['input']>;
  eventType_gte?: InputMaybe<Scalars['String']['input']>;
  eventType_lte?: InputMaybe<Scalars['String']['input']>;
  eventType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventType_contains?: InputMaybe<Scalars['String']['input']>;
  eventType_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType_starts_with?: InputMaybe<Scalars['String']['input']>;
  eventType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  eventType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType_ends_with?: InputMaybe<Scalars['String']['input']>;
  eventType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  eventType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakeHistory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StakeHistory_filter>>>;
};

export type StakeHistory_orderBy =
  | 'id'
  | 'stake'
  | 'stake__id'
  | 'stake__beneficiary'
  | 'stake__authorizer'
  | 'stake__stakedAmount'
  | 'eventAmount'
  | 'stakedAmount'
  | 'eventType'
  | 'blockNumber'
  | 'timestamp';

export type Subscription = {
  account?: Maybe<Account>;
  accounts: Array<Account>;
  stakeData?: Maybe<StakeData>;
  stakeDatas: Array<StakeData>;
  stakeHistory?: Maybe<StakeHistory>;
  stakeHistories: Array<StakeHistory>;
  appAuthorization?: Maybe<AppAuthorization>;
  appAuthorizations: Array<AppAuthorization>;
  appAuthHistory?: Maybe<AppAuthHistory>;
  appAuthHistories: Array<AppAuthHistory>;
  minStakeAmount?: Maybe<MinStakeAmount>;
  minStakeAmounts: Array<MinStakeAmount>;
  stakeDelegation?: Maybe<StakeDelegation>;
  stakeDelegations: Array<StakeDelegation>;
  tokenholderDelegation?: Maybe<TokenholderDelegation>;
  tokenholderDelegations: Array<TokenholderDelegation>;
  daometric?: Maybe<DAOMetric>;
  daometrics: Array<DAOMetric>;
  tacoOperator?: Maybe<TACoOperator>;
  tacoOperators: Array<TACoOperator>;
  tacoCommitment?: Maybe<TACoCommitment>;
  tacoCommitments: Array<TACoCommitment>;
  delegation?: Maybe<Delegation>;
  delegations: Array<Delegation>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakeData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeHistoryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeHistoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakeHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeHistory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionappAuthorizationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionappAuthorizationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppAuthorization_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AppAuthorization_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionappAuthHistoryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionappAuthHistoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppAuthHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AppAuthHistory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminStakeAmountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminStakeAmountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MinStakeAmount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinStakeAmount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeDelegationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeDelegationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakeDelegation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeDelegation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenholderDelegationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenholderDelegationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenholderDelegation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenholderDelegation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondaometricArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondaometricsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DAOMetric_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DAOMetric_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontacoOperatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontacoOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TACoOperator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TACoOperator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontacoCommitmentArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontacoCommitmentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TACoCommitment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TACoCommitment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondelegationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondelegationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Delegation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

/** TACo commitments made by a staking provider */
export type TACoCommitment = {
  /** ID is the staking provider address */
  id: Scalars['ID']['output'];
  /** Timestamp of the end of the lock-up */
  endCommitment: Scalars['BigInt']['output'];
  /** Selected duration in month of the lock-up */
  duration: Scalars['Int']['output'];
};

export type TACoCommitment_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  endCommitment?: InputMaybe<Scalars['BigInt']['input']>;
  endCommitment_not?: InputMaybe<Scalars['BigInt']['input']>;
  endCommitment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endCommitment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endCommitment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endCommitment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endCommitment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endCommitment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_not?: InputMaybe<Scalars['Int']['input']>;
  duration_gt?: InputMaybe<Scalars['Int']['input']>;
  duration_lt?: InputMaybe<Scalars['Int']['input']>;
  duration_gte?: InputMaybe<Scalars['Int']['input']>;
  duration_lte?: InputMaybe<Scalars['Int']['input']>;
  duration_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  duration_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TACoCommitment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TACoCommitment_filter>>>;
};

export type TACoCommitment_orderBy =
  | 'id'
  | 'endCommitment'
  | 'duration';

/** TACoOperator represents the TACo operator's info of a staking provider */
export type TACoOperator = {
  /** ID is the staking provider address */
  id: Scalars['ID']['output'];
  /** Operator's address */
  operator: Scalars['Bytes']['output'];
  /** Timestamp in which the current operator was bonded to the staking provider */
  bondedTimestamp: Scalars['BigInt']['output'];
  /** Timestamp in which the first operator of this staking provider was bonded */
  bondedTimestampFirstOperator?: Maybe<Scalars['BigInt']['output']>;
  /** The operator has been confirmed. This info depends on polygon->ethereum bridge/bot */
  confirmed?: Maybe<Scalars['Boolean']['output']>;
};

export type TACoOperator_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bondedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bondedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bondedTimestampFirstOperator?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestampFirstOperator_not?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestampFirstOperator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestampFirstOperator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestampFirstOperator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestampFirstOperator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bondedTimestampFirstOperator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bondedTimestampFirstOperator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed_not?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  confirmed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TACoOperator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TACoOperator_filter>>>;
};

export type TACoOperator_orderBy =
  | 'id'
  | 'operator'
  | 'bondedTimestamp'
  | 'bondedTimestampFirstOperator'
  | 'confirmed';

/** TokenholderDelegation represents the delegatee to whom the TokenHolder DAO voting power has been delegated */
export type TokenholderDelegation = Delegation & {
  /** ID is delegatee ETH address */
  id: Scalars['ID']['output'];
  /** Liquid T plus staked T in the T network. Legacy stakes (NU/KEEP) count for tokenholders' voting power, but not for the total voting power of the Tokenholder DAO (as it's already accounted by the Vending Machines) */
  totalWeight: Scalars['BigInt']['output'];
  /** Liquid T, tracked by the T Token contract */
  liquidWeight: Scalars['BigInt']['output'];
  delegators?: Maybe<Array<Account>>;
};


/** TokenholderDelegation represents the delegatee to whom the TokenHolder DAO voting power has been delegated */
export type TokenholderDelegationdelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
};

export type TokenholderDelegation_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  totalWeight?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWeight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidWeight?: InputMaybe<Scalars['BigInt']['input']>;
  liquidWeight_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidWeight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidWeight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidWeight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidWeight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidWeight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidWeight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegators_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenholderDelegation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenholderDelegation_filter>>>;
};

export type TokenholderDelegation_orderBy =
  | 'id'
  | 'totalWeight'
  | 'liquidWeight'
  | 'delegators';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>,
  /** null **/
  stakeData: InContextSdkMethod<Query['stakeData'], QuerystakeDataArgs, MeshContext>,
  /** null **/
  stakeDatas: InContextSdkMethod<Query['stakeDatas'], QuerystakeDatasArgs, MeshContext>,
  /** null **/
  stakeHistory: InContextSdkMethod<Query['stakeHistory'], QuerystakeHistoryArgs, MeshContext>,
  /** null **/
  stakeHistories: InContextSdkMethod<Query['stakeHistories'], QuerystakeHistoriesArgs, MeshContext>,
  /** null **/
  appAuthorization: InContextSdkMethod<Query['appAuthorization'], QueryappAuthorizationArgs, MeshContext>,
  /** null **/
  appAuthorizations: InContextSdkMethod<Query['appAuthorizations'], QueryappAuthorizationsArgs, MeshContext>,
  /** null **/
  appAuthHistory: InContextSdkMethod<Query['appAuthHistory'], QueryappAuthHistoryArgs, MeshContext>,
  /** null **/
  appAuthHistories: InContextSdkMethod<Query['appAuthHistories'], QueryappAuthHistoriesArgs, MeshContext>,
  /** null **/
  minStakeAmount: InContextSdkMethod<Query['minStakeAmount'], QueryminStakeAmountArgs, MeshContext>,
  /** null **/
  minStakeAmounts: InContextSdkMethod<Query['minStakeAmounts'], QueryminStakeAmountsArgs, MeshContext>,
  /** null **/
  stakeDelegation: InContextSdkMethod<Query['stakeDelegation'], QuerystakeDelegationArgs, MeshContext>,
  /** null **/
  stakeDelegations: InContextSdkMethod<Query['stakeDelegations'], QuerystakeDelegationsArgs, MeshContext>,
  /** null **/
  tokenholderDelegation: InContextSdkMethod<Query['tokenholderDelegation'], QuerytokenholderDelegationArgs, MeshContext>,
  /** null **/
  tokenholderDelegations: InContextSdkMethod<Query['tokenholderDelegations'], QuerytokenholderDelegationsArgs, MeshContext>,
  /** null **/
  daometric: InContextSdkMethod<Query['daometric'], QuerydaometricArgs, MeshContext>,
  /** null **/
  daometrics: InContextSdkMethod<Query['daometrics'], QuerydaometricsArgs, MeshContext>,
  /** null **/
  tacoOperator: InContextSdkMethod<Query['tacoOperator'], QuerytacoOperatorArgs, MeshContext>,
  /** null **/
  tacoOperators: InContextSdkMethod<Query['tacoOperators'], QuerytacoOperatorsArgs, MeshContext>,
  /** null **/
  tacoCommitment: InContextSdkMethod<Query['tacoCommitment'], QuerytacoCommitmentArgs, MeshContext>,
  /** null **/
  tacoCommitments: InContextSdkMethod<Query['tacoCommitments'], QuerytacoCommitmentsArgs, MeshContext>,
  /** null **/
  delegation: InContextSdkMethod<StakeDelegation | TokenholderDelegation, QuerydelegationArgs, MeshContext>,
  /** null **/
  delegations: InContextSdkMethod<[StakeDelegation | TokenholderDelegation!]!, QuerydelegationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  account: InContextSdkMethod<Subscription['account'], SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Subscription['accounts'], SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  stakeData: InContextSdkMethod<Subscription['stakeData'], SubscriptionstakeDataArgs, MeshContext>,
  /** null **/
  stakeDatas: InContextSdkMethod<Subscription['stakeDatas'], SubscriptionstakeDatasArgs, MeshContext>,
  /** null **/
  stakeHistory: InContextSdkMethod<Subscription['stakeHistory'], SubscriptionstakeHistoryArgs, MeshContext>,
  /** null **/
  stakeHistories: InContextSdkMethod<Subscription['stakeHistories'], SubscriptionstakeHistoriesArgs, MeshContext>,
  /** null **/
  appAuthorization: InContextSdkMethod<Subscription['appAuthorization'], SubscriptionappAuthorizationArgs, MeshContext>,
  /** null **/
  appAuthorizations: InContextSdkMethod<Subscription['appAuthorizations'], SubscriptionappAuthorizationsArgs, MeshContext>,
  /** null **/
  appAuthHistory: InContextSdkMethod<Subscription['appAuthHistory'], SubscriptionappAuthHistoryArgs, MeshContext>,
  /** null **/
  appAuthHistories: InContextSdkMethod<Subscription['appAuthHistories'], SubscriptionappAuthHistoriesArgs, MeshContext>,
  /** null **/
  minStakeAmount: InContextSdkMethod<Subscription['minStakeAmount'], SubscriptionminStakeAmountArgs, MeshContext>,
  /** null **/
  minStakeAmounts: InContextSdkMethod<Subscription['minStakeAmounts'], SubscriptionminStakeAmountsArgs, MeshContext>,
  /** null **/
  stakeDelegation: InContextSdkMethod<Subscription['stakeDelegation'], SubscriptionstakeDelegationArgs, MeshContext>,
  /** null **/
  stakeDelegations: InContextSdkMethod<Subscription['stakeDelegations'], SubscriptionstakeDelegationsArgs, MeshContext>,
  /** null **/
  tokenholderDelegation: InContextSdkMethod<Subscription['tokenholderDelegation'], SubscriptiontokenholderDelegationArgs, MeshContext>,
  /** null **/
  tokenholderDelegations: InContextSdkMethod<Subscription['tokenholderDelegations'], SubscriptiontokenholderDelegationsArgs, MeshContext>,
  /** null **/
  daometric: InContextSdkMethod<Subscription['daometric'], SubscriptiondaometricArgs, MeshContext>,
  /** null **/
  daometrics: InContextSdkMethod<Subscription['daometrics'], SubscriptiondaometricsArgs, MeshContext>,
  /** null **/
  tacoOperator: InContextSdkMethod<Subscription['tacoOperator'], SubscriptiontacoOperatorArgs, MeshContext>,
  /** null **/
  tacoOperators: InContextSdkMethod<Subscription['tacoOperators'], SubscriptiontacoOperatorsArgs, MeshContext>,
  /** null **/
  tacoCommitment: InContextSdkMethod<Subscription['tacoCommitment'], SubscriptiontacoCommitmentArgs, MeshContext>,
  /** null **/
  tacoCommitments: InContextSdkMethod<Subscription['tacoCommitments'], SubscriptiontacoCommitmentsArgs, MeshContext>,
  /** null **/
  delegation: InContextSdkMethod<StakeDelegation | TokenholderDelegation, SubscriptiondelegationArgs, MeshContext>,
  /** null **/
  delegations: InContextSdkMethod<[StakeDelegation | TokenholderDelegation!]!, SubscriptiondelegationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["development-threshold-subgraph"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
