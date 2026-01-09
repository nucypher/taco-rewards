const fs = require("fs");
const { program } = require("commander");

async function main() {
  program
    .name("combine_heartbeat_files")
    .description("Combines multiple heartbeat files into one")
    .requiredOption(
      "-f, --heartbeat-file <file>",
      "Heartbeat JSON file",
      (value, previous = []) => [...previous, value]
    );

  program.parse();
  const cliOptions = program.opts();

  const heartbeatFiles = cliOptions.heartbeatFile;
  console.log("Combining heartbeat files: ", heartbeatFiles);

  // Read and combine heartbeat ritual files
  const combinedHeartbeatRituals = {};
  heartbeatFiles.forEach((file) => {
    console.log("Reading heartbeat file: ", file);
    const heartbeatData = readDataFromFile(file);
    Object.keys(heartbeatData).forEach((ritualId) => {
      combinedHeartbeatRituals[ritualId] = heartbeatData[ritualId];
    });
  });

  // sort combinedHeartbeatRituals by ritual ID
  const sortedCombinedHeartbeatRituals = {};
  Object.keys(combinedHeartbeatRituals).sort().forEach((ritualId) => {
    sortedCombinedHeartbeatRituals[ritualId] = combinedHeartbeatRituals[ritualId];
  });

  // Write combined heartbeat rituals to file
  writeDataToFile("./heartbeats_combined.json", sortedCombinedHeartbeatRituals);
  console.log("✅ Combined heartbeat files written to disk (heartbeats_combined.json)");
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
