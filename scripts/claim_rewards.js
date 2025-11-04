require("dotenv").config();
const fs = require("fs");
const readline = require("readline");
const { ethers } = require("ethers");

async function main() {
  const LAST_DIST_PATH = "./distributions/latest.json";
  const DISTRIBUTOR_ADDRESS = "0xA08AadA7c59E4A1D4A858fcfA299673d2f6De0c3";
  const BATCH_CLAIM_ABI =
    '[{"inputs":[{"internalType":"bytes32","name":"expectedMerkleRoot","type":"bytes32"},{"components":[{"internalType":"address","name":"stakingProvider","type":"address"},{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"internalType":"struct RewardsDistributor.Claim[]","name":"claims","type":"tuple[]"}],"name":"batchClaim","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
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
  const batchClaimAbi = JSON.parse(BATCH_CLAIM_ABI);
  const contract = new ethers.Contract(
    DISTRIBUTOR_ADDRESS,
    batchClaimAbi,
    provider
  );

  // Build the claim transaction
  const batchClaim = Object.keys(dist.claims).map((stakingProvider) => {
    return {
      stakingProvider: stakingProvider,
      beneficiary: dist.claims[stakingProvider].beneficiary,
      amount: dist.claims[stakingProvider].accumulatedAmount,
      proof: dist.claims[stakingProvider].proof,
    };
  });

  // Display confirmation dialog
  console.log("\n=== Transaction Confirmation ===");
  console.log(`Claimer Address: ${claimer.address}`);
  console.log(`Merkle Root: ${dist.merkleRoot}`);
  console.log(`Number of Claims: ${batchClaim.length}`);
  console.log(`Total Amount to Claim: ${dist.thisDistributionAmount}`);
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
    console.log("✅ Claim transaction sent!");
    console.log(`Claimer: ${txReceipt.from}`);
    console.log(`Tx: https://etherscan.io/tx/${txReceipt.transactionHash}/`);
  } catch (error) {
    console.log("Error claiming the rewards:");
    console.log(error.reason || error);
    process.exit(1);
  }
}

main();
