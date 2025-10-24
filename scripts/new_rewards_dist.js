require("dotenv").config();
const fs = require("fs");
const { program } = require("commander");
const BigNumber = require("bignumber.js");
const {
  getPotentialRewards,
  setBetaStakerRewardsToZero,
  getHeartbeatNodesFailures,
  calculatePenalties,
} = require("./utils/taco_rewards.js");
const MerkleDist = require("./utils/merkle_tree.js");

async function main() {
  program
    .name("new_rewards_dist")
    .description("Generates a new TACo rewards distribution")
    .requiredOption(
      "-s, --start-date <date>",
      "Start date of the rewards period (YYYY-MM-DD) UTC"
    )
    .requiredOption(
      "-e, --end-date <date>",
      "End date of the rewards period (YYYY-MM-DD) UTC"
    )
    .requiredOption(
      "-r, --rituals-path <path>",
      "Path to the heartbeat rituals JSON file"
    );

  program.parse();
  const cliOptions = program.opts();

  const heartbeatRitualsPath = cliOptions.ritualsPath;
  const startDate = `${cliOptions.startDate}T00:00:00+00:00`;
  const endDate = `${cliOptions.endDate}T00:00:00+00:00`;
  const startTimestamp = Math.floor(new Date(startDate).getTime() / 1000);
  const endTimestamp = Math.floor(new Date(endDate).getTime() / 1000);

  console.log("Rewards period start date:", startDate, startTimestamp);
  console.log("Rewards period end date:", endDate, endTimestamp);

  // Calculate the potential TACo rewards (i.e. before applying penalizations)
  const potentialTACoRewards = await getPotentialRewards(
    startTimestamp,
    endTimestamp
  );

  // Make sure Beta Stakers are not receiving rewards
  const noBetaStakerRewards = setBetaStakerRewardsToZero(potentialTACoRewards);

  console.log("✅ Potential TACo rewards calculated");

  // Filter the stakes that didnt earn any rewards
  const filteredPotentialTACoRewards = {};
  Object.keys(noBetaStakerRewards).forEach((stProv) => {
    if (noBetaStakerRewards[stProv].amount !== "0") {
      filteredPotentialTACoRewards[stProv] = {
        amount: noBetaStakerRewards[stProv].amount,
        beneficiary: noBetaStakerRewards[stProv].beneficiary,
      };
    }
  });

  console.log("Calculating penalizations based on DKG heartbeats...");

  // Read and copy the list of DKG heartbeats for this distribution
  const heartbeatRituals = readDataFromFile(heartbeatRitualsPath);

  try {
    failedHeartbeats = await getHeartbeatNodesFailures(heartbeatRituals);
  } catch (err) {
    console.error("Error in TACo penalty calculation:", err);
    return;
  }

  // Apply penalties to TACo rewards
  console.log("Applying penalties to TACo rewards...");
  const { earnedTACoRewards, tacoPenalties } = calculatePenalties(
    filteredPotentialTACoRewards,
    failedHeartbeats
  );

  const claimsData = {};
  Object.keys(earnedTACoRewards).forEach((stProv) => {
    claimsData[stProv] = {
      beneficiary: earnedTACoRewards[stProv].beneficiary,
      accumulatedAmount: earnedTACoRewards[stProv].amount, // to be updated below
      earnedThisDistribution: earnedTACoRewards[stProv].amount,
      failedHeartbeats: failedHeartbeats[stProv] || [],
      penaltyThisDistribution: tacoPenalties[stProv]
        ? tacoPenalties[stProv]
        : "0",
    };
  });

  // The reward amounts on the Merkle tree are those accumulated since the first
  // distribution. Add the rewards earned now to the previous amounts
  const previousMerkleDist = readDataFromFile("distributions/latest.json");
  const combinedClaimsData = {};
  Object.keys(previousMerkleDist.claims).forEach((stProv) => {
    // Update the claim for this stake
    if (claimsData[stProv]) {
      combinedClaimsData[stProv] = {
        ...claimsData[stProv],
        accumulatedAmount: BigNumber(
          previousMerkleDist.claims[stProv].accumulatedAmount
        )
          .plus(BigNumber(claimsData[stProv].earnedThisDistribution))
          .toFixed(0),
      };

      // If no new rewards were earned by this claim, keep the previous claim
    } else {
      combinedClaimsData[stProv] = {
        ...previousMerkleDist.claims[stProv],
        earnedThisDistribution: "0",
      };
    }
  });

  const claimsDataStProvs = Object.keys(claimsData);
  const previousMerkleDistStProvs = Object.keys(previousMerkleDist.claims);

  // Check if there are new stakes with rewards in this distribution
  const newClaims = claimsDataStProvs.filter(
    (stProv) => !previousMerkleDistStProvs.includes(stProv)
  );
  newClaims.forEach((stProv) => {
    console.log(`⚠️ New stake with rewards: ${stProv}`);
    combinedClaimsData[stProv] = { ...claimsData[stProv] };
  });

  // Generate the Merkle distribution output
  const merkleDistribution = MerkleDist.genMerkleDist(combinedClaimsData);
  merkleDistribution.heartbeatRituals = { ...heartbeatRituals };
  writeDataToFile(
    `distributions/${cliOptions.endDate}.json`,
    merkleDistribution
  );
  writeDataToFile("distributions/latest.json", merkleDistribution);
}

function readDataFromFile(path) {
  // Read the list of heartbeat rituals
  try {
    return JSON.parse(fs.readFileSync(path));
  } catch (err) {
    console.error(`Error reading data from file: ${path}`);
    console.error(err);
    throw err;
  }
}

function writeDataToFile(path, data) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
  } catch (err) {
    console.error(`Error writing data to file: ${path}`);
    console.error(err);
    throw err;
  }
}

main();
