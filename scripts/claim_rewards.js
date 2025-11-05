require("dotenv").config();
const fs = require("fs");
const readline = require("readline");
const BigNumber = require("bignumber.js");
const { ethers } = require("ethers");

async function main() {
  const LAST_DIST_PATH = "./distributions/latest.json";
  const DISTRIBUTOR_ADDRESS = "0xA08AadA7c59E4A1D4A858fcfA299673d2f6De0c3";
  const DISTRIBUTOR_ABI =
    '[{"inputs":[{"internalType":"address","name":"_initialOwner","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_rewardsHolder","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakingProvider","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"oldMerkleRoot","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"newMerkleRoot","type":"bytes32"}],"name":"MerkleRootUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldRewardsHolder","type":"address"},{"indexed":false,"internalType":"address","name":"newRewardsHolder","type":"address"}],"name":"RewardsHolderUpdated","type":"event"},{"inputs":[],"name":"TOKEN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"expectedMerkleRoot","type":"bytes32"},{"components":[{"internalType":"address","name":"stakingProvider","type":"address"},{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"internalType":"struct RewardsDistributor.Claim[]","name":"claims","type":"tuple[]"}],"name":"batchClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"stakingProvider","type":"address"},{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"cumulativeAmount","type":"uint256"},{"internalType":"bytes32","name":"expectedMerkleRoot","type":"bytes32"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"cumulativeClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsHolder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"newMerkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRewardsHolder","type":"address"}],"name":"setRewardsHolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
  const ethereumRpcUrl = process.env.ETHEREUM_RPC_URL;
  const claimerPrivateKey = process.env.CLAIMER_PRIVATE_KEY;

  if (!ethereumRpcUrl || !claimerPrivateKey) {
    console.log(
      "Error: Please set ETHEREUM_RPC_URL and CLAIMER_PRIVATE_KEY in .env file"
    );
    process.exit(1);
  }

  let dist;
  try {
    dist = JSON.parse(fs.readFileSync(LAST_DIST_PATH));
  } catch (error) {
    console.error(
      `Error: Failed to read or parse distribution file at ${LAST_DIST_PATH}: ${error.message}`
    );
    process.exit(1);
  }
  const provider = new ethers.providers.JsonRpcProvider(ethereumRpcUrl);
  const claimer = new ethers.Wallet(claimerPrivateKey, provider);
  const distributorAbi = JSON.parse(DISTRIBUTOR_ABI);
  const contract = new ethers.Contract(
    DISTRIBUTOR_ADDRESS,
    distributorAbi,
    provider
  );

  // Build the claim transaction
  const batchClaim = [];
  for (const stakingProvider of Object.keys(dist.claims)) {
    // Check if the stake has something to claim
    const cumulativeClaimed = BigNumber(
      (await contract.cumulativeClaimed(stakingProvider)).toString()
    );
    const accumulatedAmount = BigNumber(
      dist.claims[stakingProvider].accumulatedAmount
    );

    if (accumulatedAmount.gt(cumulativeClaimed)) {
      batchClaim.push({
        stakingProvider,
        beneficiary: dist.claims[stakingProvider].beneficiary,
        amount: dist.claims[stakingProvider].accumulatedAmount,
        proof: dist.claims[stakingProvider].proof,
      });
    }
  }

  const thisDistAmountRounded = BigNumber(dist.thisDistributionAmount)
    .div(1e18)
    .toFixed(0);

  // Display confirmation dialog
  console.log("\n=== Transaction Confirmation ===");
  console.log(`Claimer Address: ${claimer.address}`);
  console.log(`Merkle Root: ${dist.merkleRoot}`);
  console.log(`Number of Claims: ${batchClaim.length}`);
  console.log(
    `Total Amount to Claim (wei units): ${dist.thisDistributionAmount} T`
  );
  console.log(
    `Total Amount to Claim (ether units): ${thisDistAmountRounded} T`
  );
  console.log("================================\n");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const confirmed = await new Promise((resolve) => {
    rl.question(
      "Do you want to proceed with this transaction? (yes/no): ",
      (answer) => {
        rl.close();
        resolve(answer.toLowerCase() === "yes" || answer.toLowerCase() === "y");
      }
    );
  });

  if (!confirmed) {
    console.log("Transaction cancelled by user.");
    process.exit(0);
  }

  // Send the claim transaction
  try {
    const tx = await contract
      .connect(claimer)
      .batchClaim(dist.merkleRoot, batchClaim);
    const txReceipt = await tx.wait();
    console.log("✅ Claim transaction confirmed!");
    console.log(`Claimer: ${txReceipt.from}`);
    console.log(`Tx: https://etherscan.io/tx/${txReceipt.transactionHash}`);
  } catch (error) {
    console.log("Error claiming the rewards:");
    console.log(error.reason || error);
    process.exit(1);
  }
}

main();
