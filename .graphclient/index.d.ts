import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { MeshHTTPHandler } from '@graphql-mesh/http';
import { ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import type { DevelopmentThresholdSubgraphTypes } from './sources/development-threshold-subgraph/types';
import type { ThresholdStakingPolygonTypes } from './sources/threshold-staking-polygon/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    BigDecimal: {
        input: any;
        output: any;
    };
    BigInt: {
        input: any;
        output: any;
    };
    Bytes: {
        input: any;
        output: any;
    };
    Int8: {
        input: any;
        output: any;
    };
    Timestamp: {
        input: any;
        output: any;
    };
};
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
export type Account_orderBy = 'id' | 'stakes' | 'delegatee' | 'delegatee__id' | 'delegatee__totalWeight' | 'delegatee__liquidWeight';
export type Aggregation_interval = 'hour' | 'day';
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
export type AppAuthHistory_orderBy = 'id' | 'appAuthorization' | 'appAuthorization__id' | 'appAuthorization__appAddress' | 'appAuthorization__amount' | 'appAuthorization__amountDeauthorizing' | 'appAuthorization__appName' | 'amount' | 'eventAmount' | 'eventType' | 'blockNumber' | 'timestamp';
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
export type AppAuthorization_orderBy = 'id' | 'appAddress' | 'stake' | 'stake__id' | 'stake__beneficiary' | 'stake__authorizer' | 'stake__stakedAmount' | 'amount' | 'amountDeauthorizing' | 'appName';
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
export type DAOMetric_orderBy = 'id' | 'liquidTotal' | 'stakedTotal';
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
export type Delegation_orderBy = 'id' | 'totalWeight';
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
export type MinStakeAmount_orderBy = 'id' | 'amount' | 'updatedAt' | 'blockNumber';
/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc';
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
export type StakeData_orderBy = 'id' | 'owner' | 'owner__id' | 'beneficiary' | 'authorizer' | 'stakedAmount' | 'delegatee' | 'delegatee__id' | 'delegatee__totalWeight' | 'stakeHistory' | 'authorizations';
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
export type StakeDelegation_orderBy = 'id' | 'totalWeight' | 'stakeDelegators';
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
export type StakeHistory_orderBy = 'id' | 'stake' | 'stake__id' | 'stake__beneficiary' | 'stake__authorizer' | 'stake__stakedAmount' | 'eventAmount' | 'stakedAmount' | 'eventType' | 'blockNumber' | 'timestamp';
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
export type TACoCommitment_orderBy = 'id' | 'endCommitment' | 'duration';
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
    /** The operator won't be confirmed during the operator address update */
    confirmed?: Maybe<Scalars['Boolean']['output']>;
    /** Timestamp in which the current operator was confirmed to the staking provider */
    confirmedTimestamp: Scalars['BigInt']['output'];
    /** Timestamp in which the first operator of this staking provider was confirmed */
    confirmedTimestampFirstOperator?: Maybe<Scalars['BigInt']['output']>;
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
    confirmedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    confirmedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    confirmedTimestampFirstOperator?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestampFirstOperator_not?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestampFirstOperator_gt?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestampFirstOperator_lt?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestampFirstOperator_gte?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestampFirstOperator_lte?: InputMaybe<Scalars['BigInt']['input']>;
    confirmedTimestampFirstOperator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    confirmedTimestampFirstOperator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export type TACoOperator_orderBy = 'id' | 'operator' | 'bondedTimestamp' | 'bondedTimestampFirstOperator' | 'confirmed' | 'confirmedTimestamp' | 'confirmedTimestampFirstOperator';
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
export type TokenholderDelegation_orderBy = 'id' | 'totalWeight' | 'liquidWeight' | 'delegators';
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
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String']['output'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean']['output'];
};
export type _SubgraphErrorPolicy_ = 
/** Data will be returned even if the subgraph has indexing errors */
'allow'
/** If the subgraph has indexing errors, data will be omitted. The default. */
 | 'deny';
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;
export type ResolverTypeWrapper<T> = Promise<T> | T;
export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export type NextResolverFn<T> = () => Promise<T>;
export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
    Delegation: (StakeDelegation) | (TokenholderDelegation);
}>;
/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    Query: ResolverTypeWrapper<{}>;
    Subscription: ResolverTypeWrapper<{}>;
    Account: ResolverTypeWrapper<Account>;
    Account_filter: Account_filter;
    Account_orderBy: Account_orderBy;
    Aggregation_interval: Aggregation_interval;
    AppAuthHistory: ResolverTypeWrapper<AppAuthHistory>;
    AppAuthHistory_filter: AppAuthHistory_filter;
    AppAuthHistory_orderBy: AppAuthHistory_orderBy;
    AppAuthorization: ResolverTypeWrapper<AppAuthorization>;
    AppAuthorization_filter: AppAuthorization_filter;
    AppAuthorization_orderBy: AppAuthorization_orderBy;
    BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
    BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
    DAOMetric: ResolverTypeWrapper<DAOMetric>;
    DAOMetric_filter: DAOMetric_filter;
    DAOMetric_orderBy: DAOMetric_orderBy;
    Delegation: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Delegation']>;
    Delegation_filter: Delegation_filter;
    Delegation_orderBy: Delegation_orderBy;
    Float: ResolverTypeWrapper<Scalars['Float']['output']>;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
    MinStakeAmount: ResolverTypeWrapper<MinStakeAmount>;
    MinStakeAmount_filter: MinStakeAmount_filter;
    MinStakeAmount_orderBy: MinStakeAmount_orderBy;
    OrderDirection: OrderDirection;
    StakeData: ResolverTypeWrapper<StakeData>;
    StakeData_filter: StakeData_filter;
    StakeData_orderBy: StakeData_orderBy;
    StakeDelegation: ResolverTypeWrapper<StakeDelegation>;
    StakeDelegation_filter: StakeDelegation_filter;
    StakeDelegation_orderBy: StakeDelegation_orderBy;
    StakeHistory: ResolverTypeWrapper<StakeHistory>;
    StakeHistory_filter: StakeHistory_filter;
    StakeHistory_orderBy: StakeHistory_orderBy;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    TACoCommitment: ResolverTypeWrapper<TACoCommitment>;
    TACoCommitment_filter: TACoCommitment_filter;
    TACoCommitment_orderBy: TACoCommitment_orderBy;
    TACoOperator: ResolverTypeWrapper<TACoOperator>;
    TACoOperator_filter: TACoOperator_filter;
    TACoOperator_orderBy: TACoOperator_orderBy;
    Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
    TokenholderDelegation: ResolverTypeWrapper<TokenholderDelegation>;
    TokenholderDelegation_filter: TokenholderDelegation_filter;
    TokenholderDelegation_orderBy: TokenholderDelegation_orderBy;
    _Block_: ResolverTypeWrapper<_Block_>;
    _Meta_: ResolverTypeWrapper<_Meta_>;
    _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;
/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    Query: {};
    Subscription: {};
    Account: Account;
    Account_filter: Account_filter;
    AppAuthHistory: AppAuthHistory;
    AppAuthHistory_filter: AppAuthHistory_filter;
    AppAuthorization: AppAuthorization;
    AppAuthorization_filter: AppAuthorization_filter;
    BigDecimal: Scalars['BigDecimal']['output'];
    BigInt: Scalars['BigInt']['output'];
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: Scalars['Boolean']['output'];
    Bytes: Scalars['Bytes']['output'];
    DAOMetric: DAOMetric;
    DAOMetric_filter: DAOMetric_filter;
    Delegation: ResolversInterfaceTypes<ResolversParentTypes>['Delegation'];
    Delegation_filter: Delegation_filter;
    Float: Scalars['Float']['output'];
    ID: Scalars['ID']['output'];
    Int: Scalars['Int']['output'];
    Int8: Scalars['Int8']['output'];
    MinStakeAmount: MinStakeAmount;
    MinStakeAmount_filter: MinStakeAmount_filter;
    StakeData: StakeData;
    StakeData_filter: StakeData_filter;
    StakeDelegation: StakeDelegation;
    StakeDelegation_filter: StakeDelegation_filter;
    StakeHistory: StakeHistory;
    StakeHistory_filter: StakeHistory_filter;
    String: Scalars['String']['output'];
    TACoCommitment: TACoCommitment;
    TACoCommitment_filter: TACoCommitment_filter;
    TACoOperator: TACoOperator;
    TACoOperator_filter: TACoOperator_filter;
    Timestamp: Scalars['Timestamp']['output'];
    TokenholderDelegation: TokenholderDelegation;
    TokenholderDelegation_filter: TokenholderDelegation_filter;
    _Block_: _Block_;
    _Meta_: _Meta_;
}>;
export type entityDirectiveArgs = {};
export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type subgraphIdDirectiveArgs = {
    id: Scalars['String']['input'];
};
export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type derivedFromDirectiveArgs = {
    field: Scalars['String']['input'];
};
export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
    accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    stakeData?: Resolver<Maybe<ResolversTypes['StakeData']>, ParentType, ContextType, RequireFields<QuerystakeDataArgs, 'id' | 'subgraphError'>>;
    stakeDatas?: Resolver<Array<ResolversTypes['StakeData']>, ParentType, ContextType, RequireFields<QuerystakeDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
    stakeHistory?: Resolver<Maybe<ResolversTypes['StakeHistory']>, ParentType, ContextType, RequireFields<QuerystakeHistoryArgs, 'id' | 'subgraphError'>>;
    stakeHistories?: Resolver<Array<ResolversTypes['StakeHistory']>, ParentType, ContextType, RequireFields<QuerystakeHistoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
    appAuthorization?: Resolver<Maybe<ResolversTypes['AppAuthorization']>, ParentType, ContextType, RequireFields<QueryappAuthorizationArgs, 'id' | 'subgraphError'>>;
    appAuthorizations?: Resolver<Array<ResolversTypes['AppAuthorization']>, ParentType, ContextType, RequireFields<QueryappAuthorizationsArgs, 'skip' | 'first' | 'subgraphError'>>;
    appAuthHistory?: Resolver<Maybe<ResolversTypes['AppAuthHistory']>, ParentType, ContextType, RequireFields<QueryappAuthHistoryArgs, 'id' | 'subgraphError'>>;
    appAuthHistories?: Resolver<Array<ResolversTypes['AppAuthHistory']>, ParentType, ContextType, RequireFields<QueryappAuthHistoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
    minStakeAmount?: Resolver<Maybe<ResolversTypes['MinStakeAmount']>, ParentType, ContextType, RequireFields<QueryminStakeAmountArgs, 'id' | 'subgraphError'>>;
    minStakeAmounts?: Resolver<Array<ResolversTypes['MinStakeAmount']>, ParentType, ContextType, RequireFields<QueryminStakeAmountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    stakeDelegation?: Resolver<Maybe<ResolversTypes['StakeDelegation']>, ParentType, ContextType, RequireFields<QuerystakeDelegationArgs, 'id' | 'subgraphError'>>;
    stakeDelegations?: Resolver<Array<ResolversTypes['StakeDelegation']>, ParentType, ContextType, RequireFields<QuerystakeDelegationsArgs, 'skip' | 'first' | 'subgraphError'>>;
    tokenholderDelegation?: Resolver<Maybe<ResolversTypes['TokenholderDelegation']>, ParentType, ContextType, RequireFields<QuerytokenholderDelegationArgs, 'id' | 'subgraphError'>>;
    tokenholderDelegations?: Resolver<Array<ResolversTypes['TokenholderDelegation']>, ParentType, ContextType, RequireFields<QuerytokenholderDelegationsArgs, 'skip' | 'first' | 'subgraphError'>>;
    daometric?: Resolver<Maybe<ResolversTypes['DAOMetric']>, ParentType, ContextType, RequireFields<QuerydaometricArgs, 'id' | 'subgraphError'>>;
    daometrics?: Resolver<Array<ResolversTypes['DAOMetric']>, ParentType, ContextType, RequireFields<QuerydaometricsArgs, 'skip' | 'first' | 'subgraphError'>>;
    tacoOperator?: Resolver<Maybe<ResolversTypes['TACoOperator']>, ParentType, ContextType, RequireFields<QuerytacoOperatorArgs, 'id' | 'subgraphError'>>;
    tacoOperators?: Resolver<Array<ResolversTypes['TACoOperator']>, ParentType, ContextType, RequireFields<QuerytacoOperatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
    tacoCommitment?: Resolver<Maybe<ResolversTypes['TACoCommitment']>, ParentType, ContextType, RequireFields<QuerytacoCommitmentArgs, 'id' | 'subgraphError'>>;
    tacoCommitments?: Resolver<Array<ResolversTypes['TACoCommitment']>, ParentType, ContextType, RequireFields<QuerytacoCommitmentsArgs, 'skip' | 'first' | 'subgraphError'>>;
    delegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<QuerydelegationArgs, 'id' | 'subgraphError'>>;
    delegations?: Resolver<Array<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<QuerydelegationsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;
export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
    account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
    accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    stakeData?: SubscriptionResolver<Maybe<ResolversTypes['StakeData']>, "stakeData", ParentType, ContextType, RequireFields<SubscriptionstakeDataArgs, 'id' | 'subgraphError'>>;
    stakeDatas?: SubscriptionResolver<Array<ResolversTypes['StakeData']>, "stakeDatas", ParentType, ContextType, RequireFields<SubscriptionstakeDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
    stakeHistory?: SubscriptionResolver<Maybe<ResolversTypes['StakeHistory']>, "stakeHistory", ParentType, ContextType, RequireFields<SubscriptionstakeHistoryArgs, 'id' | 'subgraphError'>>;
    stakeHistories?: SubscriptionResolver<Array<ResolversTypes['StakeHistory']>, "stakeHistories", ParentType, ContextType, RequireFields<SubscriptionstakeHistoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
    appAuthorization?: SubscriptionResolver<Maybe<ResolversTypes['AppAuthorization']>, "appAuthorization", ParentType, ContextType, RequireFields<SubscriptionappAuthorizationArgs, 'id' | 'subgraphError'>>;
    appAuthorizations?: SubscriptionResolver<Array<ResolversTypes['AppAuthorization']>, "appAuthorizations", ParentType, ContextType, RequireFields<SubscriptionappAuthorizationsArgs, 'skip' | 'first' | 'subgraphError'>>;
    appAuthHistory?: SubscriptionResolver<Maybe<ResolversTypes['AppAuthHistory']>, "appAuthHistory", ParentType, ContextType, RequireFields<SubscriptionappAuthHistoryArgs, 'id' | 'subgraphError'>>;
    appAuthHistories?: SubscriptionResolver<Array<ResolversTypes['AppAuthHistory']>, "appAuthHistories", ParentType, ContextType, RequireFields<SubscriptionappAuthHistoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
    minStakeAmount?: SubscriptionResolver<Maybe<ResolversTypes['MinStakeAmount']>, "minStakeAmount", ParentType, ContextType, RequireFields<SubscriptionminStakeAmountArgs, 'id' | 'subgraphError'>>;
    minStakeAmounts?: SubscriptionResolver<Array<ResolversTypes['MinStakeAmount']>, "minStakeAmounts", ParentType, ContextType, RequireFields<SubscriptionminStakeAmountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    stakeDelegation?: SubscriptionResolver<Maybe<ResolversTypes['StakeDelegation']>, "stakeDelegation", ParentType, ContextType, RequireFields<SubscriptionstakeDelegationArgs, 'id' | 'subgraphError'>>;
    stakeDelegations?: SubscriptionResolver<Array<ResolversTypes['StakeDelegation']>, "stakeDelegations", ParentType, ContextType, RequireFields<SubscriptionstakeDelegationsArgs, 'skip' | 'first' | 'subgraphError'>>;
    tokenholderDelegation?: SubscriptionResolver<Maybe<ResolversTypes['TokenholderDelegation']>, "tokenholderDelegation", ParentType, ContextType, RequireFields<SubscriptiontokenholderDelegationArgs, 'id' | 'subgraphError'>>;
    tokenholderDelegations?: SubscriptionResolver<Array<ResolversTypes['TokenholderDelegation']>, "tokenholderDelegations", ParentType, ContextType, RequireFields<SubscriptiontokenholderDelegationsArgs, 'skip' | 'first' | 'subgraphError'>>;
    daometric?: SubscriptionResolver<Maybe<ResolversTypes['DAOMetric']>, "daometric", ParentType, ContextType, RequireFields<SubscriptiondaometricArgs, 'id' | 'subgraphError'>>;
    daometrics?: SubscriptionResolver<Array<ResolversTypes['DAOMetric']>, "daometrics", ParentType, ContextType, RequireFields<SubscriptiondaometricsArgs, 'skip' | 'first' | 'subgraphError'>>;
    tacoOperator?: SubscriptionResolver<Maybe<ResolversTypes['TACoOperator']>, "tacoOperator", ParentType, ContextType, RequireFields<SubscriptiontacoOperatorArgs, 'id' | 'subgraphError'>>;
    tacoOperators?: SubscriptionResolver<Array<ResolversTypes['TACoOperator']>, "tacoOperators", ParentType, ContextType, RequireFields<SubscriptiontacoOperatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
    tacoCommitment?: SubscriptionResolver<Maybe<ResolversTypes['TACoCommitment']>, "tacoCommitment", ParentType, ContextType, RequireFields<SubscriptiontacoCommitmentArgs, 'id' | 'subgraphError'>>;
    tacoCommitments?: SubscriptionResolver<Array<ResolversTypes['TACoCommitment']>, "tacoCommitments", ParentType, ContextType, RequireFields<SubscriptiontacoCommitmentsArgs, 'skip' | 'first' | 'subgraphError'>>;
    delegation?: SubscriptionResolver<Maybe<ResolversTypes['Delegation']>, "delegation", ParentType, ContextType, RequireFields<SubscriptiondelegationArgs, 'id' | 'subgraphError'>>;
    delegations?: SubscriptionResolver<Array<ResolversTypes['Delegation']>, "delegations", ParentType, ContextType, RequireFields<SubscriptiondelegationsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;
export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    stakes?: Resolver<Maybe<Array<ResolversTypes['StakeData']>>, ParentType, ContextType, RequireFields<AccountstakesArgs, 'skip' | 'first'>>;
    delegatee?: Resolver<Maybe<ResolversTypes['TokenholderDelegation']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type AppAuthHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AppAuthHistory'] = ResolversParentTypes['AppAuthHistory']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    appAuthorization?: Resolver<ResolversTypes['AppAuthorization'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    eventAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type AppAuthorizationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AppAuthorization'] = ResolversParentTypes['AppAuthorization']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    appAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    stake?: Resolver<ResolversTypes['StakeData'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amountDeauthorizing?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    appName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
    name: 'BigDecimal';
}
export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
    name: 'BigInt';
}
export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
    name: 'Bytes';
}
export type DAOMetricResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DAOMetric'] = ResolversParentTypes['DAOMetric']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    liquidTotal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    stakedTotal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type DelegationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Delegation'] = ResolversParentTypes['Delegation']> = ResolversObject<{
    __resolveType: TypeResolveFn<'StakeDelegation' | 'TokenholderDelegation', ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    totalWeight?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
}>;
export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
    name: 'Int8';
}
export type MinStakeAmountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MinStakeAmount'] = ResolversParentTypes['MinStakeAmount']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StakeDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StakeData'] = ResolversParentTypes['StakeData']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    beneficiary?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    authorizer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    stakedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    delegatee?: Resolver<Maybe<ResolversTypes['StakeDelegation']>, ParentType, ContextType>;
    stakeHistory?: Resolver<Maybe<Array<ResolversTypes['StakeHistory']>>, ParentType, ContextType, RequireFields<StakeDatastakeHistoryArgs, 'skip' | 'first'>>;
    authorizations?: Resolver<Maybe<Array<ResolversTypes['AppAuthorization']>>, ParentType, ContextType, RequireFields<StakeDataauthorizationsArgs, 'skip' | 'first'>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StakeDelegationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StakeDelegation'] = ResolversParentTypes['StakeDelegation']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    totalWeight?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    stakeDelegators?: Resolver<Maybe<Array<ResolversTypes['StakeData']>>, ParentType, ContextType, RequireFields<StakeDelegationstakeDelegatorsArgs, 'skip' | 'first'>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StakeHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StakeHistory'] = ResolversParentTypes['StakeHistory']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    stake?: Resolver<ResolversTypes['StakeData'], ParentType, ContextType>;
    eventAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    stakedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type TACoCommitmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TACoCommitment'] = ResolversParentTypes['TACoCommitment']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    endCommitment?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type TACoOperatorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TACoOperator'] = ResolversParentTypes['TACoOperator']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    bondedTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    bondedTimestampFirstOperator?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    confirmedTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    confirmedTimestampFirstOperator?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
    name: 'Timestamp';
}
export type TokenholderDelegationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenholderDelegation'] = ResolversParentTypes['TokenholderDelegation']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    totalWeight?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    liquidWeight?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    delegators?: Resolver<Maybe<Array<ResolversTypes['Account']>>, ParentType, ContextType, RequireFields<TokenholderDelegationdelegatorsArgs, 'skip' | 'first'>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
    hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
    block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
    deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type Resolvers<ContextType = MeshContext> = ResolversObject<{
    Query?: QueryResolvers<ContextType>;
    Subscription?: SubscriptionResolvers<ContextType>;
    Account?: AccountResolvers<ContextType>;
    AppAuthHistory?: AppAuthHistoryResolvers<ContextType>;
    AppAuthorization?: AppAuthorizationResolvers<ContextType>;
    BigDecimal?: GraphQLScalarType;
    BigInt?: GraphQLScalarType;
    Bytes?: GraphQLScalarType;
    DAOMetric?: DAOMetricResolvers<ContextType>;
    Delegation?: DelegationResolvers<ContextType>;
    Int8?: GraphQLScalarType;
    MinStakeAmount?: MinStakeAmountResolvers<ContextType>;
    StakeData?: StakeDataResolvers<ContextType>;
    StakeDelegation?: StakeDelegationResolvers<ContextType>;
    StakeHistory?: StakeHistoryResolvers<ContextType>;
    TACoCommitment?: TACoCommitmentResolvers<ContextType>;
    TACoOperator?: TACoOperatorResolvers<ContextType>;
    Timestamp?: GraphQLScalarType;
    TokenholderDelegation?: TokenholderDelegationResolvers<ContextType>;
    _Block_?: _Block_Resolvers<ContextType>;
    _Meta_?: _Meta_Resolvers<ContextType>;
}>;
export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
    entity?: entityDirectiveResolver<any, any, ContextType>;
    subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
    derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;
export type MeshContext = DevelopmentThresholdSubgraphTypes.Context & ThresholdStakingPolygonTypes.Context & BaseMeshContext;
export declare const rawServeConfig: YamlConfig.Config['serve'];
export declare function getMeshOptions(): Promise<GetMeshOptions>;
export declare function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext>;
export declare const pollingInterval: any;
export declare function getBuiltGraphClient(): Promise<MeshInstance>;
export declare const execute: ExecuteMeshFn;
export declare const subscribe: SubscribeMeshFn;
export declare function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext): {
    TacoAuthHistory(variables?: Exact<{
        endTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
        first?: InputMaybe<Scalars["Int"]["input"]>;
        skip?: InputMaybe<Scalars["Int"]["input"]>;
    }>, options?: TOperationContext): Promise<TacoAuthHistoryQuery>;
    TacoOperators(variables?: Exact<{
        endTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
        first?: InputMaybe<Scalars["Int"]["input"]>;
        skip?: InputMaybe<Scalars["Int"]["input"]>;
    }>, options?: TOperationContext): Promise<TacoOperatorsQuery>;
};
export type TacoAuthHistoryQueryVariables = Exact<{
    endTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
}>;
export type TacoAuthHistoryQuery = {
    appAuthHistories: Array<(Pick<AppAuthHistory, 'id' | 'timestamp' | 'amount' | 'blockNumber' | 'eventType'> & {
        appAuthorization: {
            stake: Pick<StakeData, 'id' | 'beneficiary'>;
        };
    })>;
};
export type TacoOperatorsQueryVariables = Exact<{
    endTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
}>;
export type TacoOperatorsQuery = {
    tacoOperators: Array<Pick<TACoOperator, 'id' | 'operator' | 'confirmedTimestampFirstOperator'>>;
};
export declare const TacoAuthHistoryDocument: DocumentNode<TacoAuthHistoryQuery, TacoAuthHistoryQueryVariables>;
export declare const TacoOperatorsDocument: DocumentNode<TacoOperatorsQuery, TacoOperatorsQueryVariables>;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>;
export declare function getSdk<C, E>(requester: Requester<C, E>): {
    TacoAuthHistory(variables?: TacoAuthHistoryQueryVariables, options?: C): Promise<TacoAuthHistoryQuery>;
    TacoOperators(variables?: TacoOperatorsQueryVariables, options?: C): Promise<TacoOperatorsQuery>;
};
export type Sdk = ReturnType<typeof getSdk>;
