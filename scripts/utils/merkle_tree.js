const { MerkleTree } = require("merkletreejs");
const BigNumber = require("bignumber.js");
const keccak256 = require("keccak256");

//
// Generate a Merkle distribution from a TACo earned rewards input
//
function genMerkleDist(claimsData) {
  const stakingProviders = Object.keys(claimsData);
  const data = Object.values(claimsData);

  const elements = stakingProviders.map(
    (stakingProvider, i) =>
      stakingProvider +
      data[i].beneficiary.substr(2) +
      BigNumber(data[i].amount).toString(16).padStart(64, "0")
  );

  const tree = new MerkleTree(elements, keccak256, {
    hashLeaves: true,
    sort: true,
  });

  const root = tree.getHexRoot();
  const leaves = tree.getHexLeaves();
  const proofs = leaves.map(tree.getHexProof, tree);

  const totalAmount = data
    .map((claim) => BigNumber(claim.amount))
    .reduce((a, b) => a.plus(b))
    .toFixed();

  const claims = Object.entries(claimsData).map(([stakingProvider, data]) => {
    const leaf = MerkleTree.bufferToHex(
      keccak256(
        stakingProvider +
          data.beneficiary.substr(2) +
          BigNumber(data.amount).toString(16).padStart(64, "0")
      )
    );
    return {
      stakingProvider: stakingProvider,
      beneficiary: data.beneficiary,
      amount: data.amount,
      penalty: data.penalty,
      failedHeartbeats: data.failedHeartbeats,
      proof: proofs[leaves.indexOf(leaf)],
    };
  });

  const dist = {
    totalAmount: totalAmount,
    merkleRoot: root,
    claims: claims.reduce(
      (
        a,
        {
          stakingProvider,
          beneficiary,
          amount,
          penalty,
          failedHeartbeats,
          proof,
        }
      ) => {
        a[stakingProvider] = {
          beneficiary,
          amount,
          penalty,
          failedHeartbeats,
          proof,
        };
        return a;
      },
      {}
    ),
  };

  return dist;
}

module.exports = { genMerkleDist };
