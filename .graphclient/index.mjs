import { gql } from '@graphql-mesh/utils';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';
import GraphqlHandler from "@graphql-mesh/graphql";
import AutoPaginationTransform from "@graphprotocol/client-auto-pagination";
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import * as importedModule$0 from "./sources/threshold-staking-polygon/introspectionSchema.json";
import * as importedModule$1 from "./sources/development-threshold-subgraph/introspectionSchema.json";
import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');
const importFn = (moduleId) => {
    const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/threshold-staking-polygon/introspectionSchema.json":
            return Promise.resolve(importedModule$0);
        case ".graphclient/sources/development-threshold-subgraph/introspectionSchema.json":
            return Promise.resolve(importedModule$1);
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "json",
}), {
    readonly: true,
    validate: false
});
export const rawServeConfig = undefined;
export async function getMeshOptions() {
    const pubsub = new PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new DefaultLogger("GraphClient");
    const cache = new MeshCache({
        ...{},
        importFn,
        store: rootStore.child('cache'),
        pubsub,
        logger,
    });
    const sources = [];
    const transforms = [];
    const additionalEnvelopPlugins = [];
    const developmentThresholdSubgraphTransforms = [];
    const thresholdStakingPolygonTransforms = [];
    const additionalTypeDefs = [];
    const developmentThresholdSubgraphHandler = new GraphqlHandler({
        name: "development-threshold-subgraph",
        config: { "endpoint": "https://api.goldsky.com/api/public/project_cmgzo6cgq00lc5np2dwaycfdl/subgraphs/threshold-staking/0.0.2/gn" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("development-threshold-subgraph"),
        logger: logger.child("development-threshold-subgraph"),
        importFn,
    });
    const thresholdStakingPolygonHandler = new GraphqlHandler({
        name: "threshold-staking-polygon",
        config: { "endpoint": "https://api.studio.thegraph.com/query/24143/threshold-staking-polygon/0.1.1" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("threshold-staking-polygon"),
        logger: logger.child("threshold-staking-polygon"),
        importFn,
    });
    developmentThresholdSubgraphTransforms[0] = new AutoPaginationTransform({
        apiName: "development-threshold-subgraph",
        config: { "validateSchema": true },
        baseDir,
        cache,
        pubsub,
        importFn,
        logger,
    });
    thresholdStakingPolygonTransforms[0] = new AutoPaginationTransform({
        apiName: "threshold-staking-polygon",
        config: { "validateSchema": true },
        baseDir,
        cache,
        pubsub,
        importFn,
        logger,
    });
    sources[0] = {
        name: 'development-threshold-subgraph',
        handler: developmentThresholdSubgraphHandler,
        transforms: developmentThresholdSubgraphTransforms
    };
    sources[1] = {
        name: 'threshold-staking-polygon',
        handler: thresholdStakingPolygonHandler,
        transforms: thresholdStakingPolygonTransforms
    };
    const additionalResolvers = [];
    const merger = new StitchingMerger({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
    });
    const documentHashMap = {
        "8dc1e3abb3c749310b151d4a2872a2e0d6b4fc2411676d868e8d7bfd8b48577e": TacoAuthHistoryDocument,
        "a37918f83122f4fcf873612f69400c94d30f364de27d84f23feefa49a0eb5344": TacoOperatorsDocument
    };
    additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
            return documentHashMap[key];
        },
        ...{}
    }));
    return {
        sources,
        transforms,
        additionalTypeDefs,
        additionalResolvers,
        cache,
        pubsub,
        merger,
        logger,
        additionalEnvelopPlugins,
        get documents() {
            return [
                {
                    document: TacoAuthHistoryDocument,
                    get rawSDL() {
                        return printWithCache(TacoAuthHistoryDocument);
                    },
                    location: 'TacoAuthHistoryDocument.graphql',
                    sha256Hash: '8dc1e3abb3c749310b151d4a2872a2e0d6b4fc2411676d868e8d7bfd8b48577e'
                }, {
                    document: TacoOperatorsDocument,
                    get rawSDL() {
                        return printWithCache(TacoOperatorsDocument);
                    },
                    location: 'TacoOperatorsDocument.graphql',
                    sha256Hash: 'a37918f83122f4fcf873612f69400c94d30f364de27d84f23feefa49a0eb5344'
                }
            ];
        },
        fetchFn,
    };
}
export function createBuiltMeshHTTPHandler() {
    return createMeshHTTPHandler({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
let meshInstance$;
export const pollingInterval = null;
export function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        if (pollingInterval) {
            setInterval(() => {
                getMeshOptions()
                    .then(meshOptions => getMesh(meshOptions))
                    .then(newMesh => meshInstance$.then(oldMesh => {
                    oldMesh.destroy();
                    meshInstance$ = Promise.resolve(newMesh);
                })).catch(err => {
                    console.error("Mesh polling failed so the existing version will be used:", err);
                });
            }, pollingInterval);
        }
        meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
export const execute = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));
export const subscribe = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK(globalContext) {
    const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
    return getSdk((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export const TacoAuthHistoryDocument = gql `
    query TacoAuthHistory($endTimestamp: BigInt, $first: Int = 1000, $skip: Int = 0) {
  appAuthHistories(
    where: {timestamp_lte: $endTimestamp, appAuthorization_: {appName: "TACo"}}
    first: $first
    skip: $skip
  ) {
    id
    timestamp
    amount
    blockNumber
    eventType
    appAuthorization {
      stake {
        id
        beneficiary
      }
    }
  }
}
    `;
export const TacoOperatorsDocument = gql `
    query TacoOperators($endTimestamp: BigInt, $first: Int = 1000, $skip: Int = 0) {
  tacoOperators(
    where: {confirmedTimestampFirstOperator_lte: $endTimestamp}
    first: $first
    skip: $skip
  ) {
    id
    operator
    confirmedTimestampFirstOperator
  }
}
    `;
export function getSdk(requester) {
    return {
        TacoAuthHistory(variables, options) {
            return requester(TacoAuthHistoryDocument, variables, options);
        },
        TacoOperators(variables, options) {
            return requester(TacoOperatorsDocument, variables, options);
        }
    };
}
