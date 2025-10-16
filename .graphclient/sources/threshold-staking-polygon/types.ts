// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ThresholdStakingPolygonTypes {
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

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  tacoOperator?: Maybe<TACoOperator>;
  tacoOperators: Array<TACoOperator>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
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


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

/** TACoOperator represents the TACo operator's info of a staking provider */
export type TACoOperator = {
  /** ID is the staking provider address */
  id: Scalars['ID']['output'];
  /** Operator's address */
  operator: Scalars['Bytes']['output'];
  /** Timestamp in which the current operator was confirmed to the staking provider */
  confirmedTimestamp: Scalars['BigInt']['output'];
  /** Timestamp in which the first operator of this staking provider was confirmed */
  confirmedTimestampFirstOperator?: Maybe<Scalars['BigInt']['output']>;
  /** The operator won't be confirmed during the operator address update */
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
  | 'confirmedTimestamp'
  | 'confirmedTimestampFirstOperator'
  | 'confirmed';

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
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  tacoOperator: InContextSdkMethod<Query['tacoOperator'], QuerytacoOperatorArgs, MeshContext>,
  /** null **/
  tacoOperators: InContextSdkMethod<Query['tacoOperators'], QuerytacoOperatorsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["threshold-staking-polygon"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
