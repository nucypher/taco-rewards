"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TacoOperatorsDocument = exports.TacoAuthHistoryDocument = exports.subscribe = exports.execute = exports.pollingInterval = exports.rawServeConfig = void 0;
exports.getMeshOptions = getMeshOptions;
exports.createBuiltMeshHTTPHandler = createBuiltMeshHTTPHandler;
exports.getBuiltGraphClient = getBuiltGraphClient;
exports.getBuiltGraphSDK = getBuiltGraphSDK;
exports.getSdk = getSdk;
const tslib_1 = require("tslib");
const utils_1 = require("@graphql-mesh/utils");
const utils_2 = require("@graphql-mesh/utils");
const utils_3 = require("@graphql-mesh/utils");
const cache_localforage_1 = tslib_1.__importDefault(require("@graphql-mesh/cache-localforage"));
const fetch_1 = require("@whatwg-node/fetch");
const graphql_1 = tslib_1.__importDefault(require("@graphql-mesh/graphql"));
const client_auto_pagination_1 = tslib_1.__importDefault(require("@graphprotocol/client-auto-pagination"));
const merger_stitching_1 = tslib_1.__importDefault(require("@graphql-mesh/merger-stitching"));
const utils_4 = require("@graphql-mesh/utils");
const plugin_persisted_operations_1 = require("@graphql-yoga/plugin-persisted-operations");
const http_1 = require("@graphql-mesh/http");
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const cross_helpers_1 = require("@graphql-mesh/cross-helpers");
const importedModule$0 = tslib_1.__importStar(require("./sources/threshold-staking-polygon/introspectionSchema.json"));
const importedModule$1 = tslib_1.__importStar(require("./sources/development-threshold-subgraph/introspectionSchema.json"));
const baseDir = cross_helpers_1.path.join(typeof __dirname === 'string' ? __dirname : '/', '..');
const importFn = (moduleId) => {
    const relativeModuleId = (cross_helpers_1.path.isAbsolute(moduleId) ? cross_helpers_1.path.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/threshold-staking-polygon/introspectionSchema.json":
            return Promise.resolve(importedModule$0);
        case ".graphclient/sources/development-threshold-subgraph/introspectionSchema.json":
            return Promise.resolve(importedModule$1);
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new store_1.MeshStore('.graphclient', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "json",
}), {
    readonly: true,
    validate: false
});
exports.rawServeConfig = undefined;
async function getMeshOptions() {
    const pubsub = new utils_2.PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new utils_3.DefaultLogger("GraphClient");
    const cache = new cache_localforage_1.default({
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
    const developmentThresholdSubgraphHandler = new graphql_1.default({
        name: "development-threshold-subgraph",
        config: { "endpoint": "https://api.goldsky.com/api/public/project_cmgzo6cgq00lc5np2dwaycfdl/subgraphs/threshold-staking/0.0.2/gn" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("development-threshold-subgraph"),
        logger: logger.child("development-threshold-subgraph"),
        importFn,
    });
    const thresholdStakingPolygonHandler = new graphql_1.default({
        name: "threshold-staking-polygon",
        config: { "endpoint": "https://api.studio.thegraph.com/query/24143/threshold-staking-polygon/0.1.1" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("threshold-staking-polygon"),
        logger: logger.child("threshold-staking-polygon"),
        importFn,
    });
    developmentThresholdSubgraphTransforms[0] = new client_auto_pagination_1.default({
        apiName: "development-threshold-subgraph",
        config: { "validateSchema": true },
        baseDir,
        cache,
        pubsub,
        importFn,
        logger,
    });
    thresholdStakingPolygonTransforms[0] = new client_auto_pagination_1.default({
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
    const merger = new merger_stitching_1.default({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
    });
    const documentHashMap = {
        "8dc1e3abb3c749310b151d4a2872a2e0d6b4fc2411676d868e8d7bfd8b48577e": exports.TacoAuthHistoryDocument,
        "a37918f83122f4fcf873612f69400c94d30f364de27d84f23feefa49a0eb5344": exports.TacoOperatorsDocument
    };
    additionalEnvelopPlugins.push((0, plugin_persisted_operations_1.usePersistedOperations)({
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
                    document: exports.TacoAuthHistoryDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.TacoAuthHistoryDocument);
                    },
                    location: 'TacoAuthHistoryDocument.graphql',
                    sha256Hash: '8dc1e3abb3c749310b151d4a2872a2e0d6b4fc2411676d868e8d7bfd8b48577e'
                }, {
                    document: exports.TacoOperatorsDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.TacoOperatorsDocument);
                    },
                    location: 'TacoOperatorsDocument.graphql',
                    sha256Hash: 'a37918f83122f4fcf873612f69400c94d30f364de27d84f23feefa49a0eb5344'
                }
            ];
        },
        fetchFn: fetch_1.fetch,
    };
}
function createBuiltMeshHTTPHandler() {
    return (0, http_1.createMeshHTTPHandler)({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
let meshInstance$;
exports.pollingInterval = null;
function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        if (exports.pollingInterval) {
            setInterval(() => {
                getMeshOptions()
                    .then(meshOptions => (0, runtime_1.getMesh)(meshOptions))
                    .then(newMesh => meshInstance$.then(oldMesh => {
                    oldMesh.destroy();
                    meshInstance$ = Promise.resolve(newMesh);
                })).catch(err => {
                    console.error("Mesh polling failed so the existing version will be used:", err);
                });
            }, exports.pollingInterval);
        }
        meshInstance$ = getMeshOptions().then(meshOptions => (0, runtime_1.getMesh)(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
const execute = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));
exports.execute = execute;
const subscribe = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
exports.subscribe = subscribe;
function getBuiltGraphSDK(globalContext) {
    const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
    return getSdk((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
exports.TacoAuthHistoryDocument = (0, utils_1.gql) `
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
exports.TacoOperatorsDocument = (0, utils_1.gql) `
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
function getSdk(requester) {
    return {
        TacoAuthHistory(variables, options) {
            return requester(exports.TacoAuthHistoryDocument, variables, options);
        },
        TacoOperators(variables, options) {
            return requester(exports.TacoOperatorsDocument, variables, options);
        }
    };
}
