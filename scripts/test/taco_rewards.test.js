require("dotenv").config();
const { expect } = require("chai");
const { BigNumber } = require("bignumber.js");
const {
  getHeartbeatNodesFailures,
  calculatePenalties,
} = require("../utils/taco_rewards");

describe("TACo rewards calculation", () => {
  describe("Apply penalties", () => {
    const potentialTACoRewards = {
      "0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741": {
        beneficiary: "0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741",
        amount: "100000000000000000000",
      },
      "0xe16A1eE2eeB1a5AF31C35A498d703d6F198C1efE": {
        beneficiary: "0xe16A1eE2eeB1a5AF31C35A498d703d6F198C1efE",
        amount: "320000000000000000000",
      },
    };

    it("should be no penalty if no node failures", () => {
      const failedHeartbeats = {};
      const { earnedTACoRewards, tacoPenalties } = calculatePenalties(
        potentialTACoRewards,
        failedHeartbeats
      );
      expect(earnedTACoRewards).to.deep.equal(potentialTACoRewards);
      expect(tacoPenalties).to.be.empty;
    });

    it("should be no penalty if only one node failure", () => {
      const failedHeartbeats = {
        "0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741": ["136"],
      };
      const { earnedTACoRewards, tacoPenalties } = calculatePenalties(
        potentialTACoRewards,
        failedHeartbeats
      );
      expect(earnedTACoRewards).to.deep.equal(potentialTACoRewards);
      expect(tacoPenalties).to.be.empty;
    });

    it("should be 1/3 penalty when two failures", () => {
      const failedHeartbeats = {
        "0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741": ["33", "136"],
      };
      const { earnedTACoRewards, tacoPenalties } = calculatePenalties(
        potentialTACoRewards,
        failedHeartbeats
      );
      // should be subtracted 1/3 of the reward
      const earningsExpected = BigNumber(
        potentialTACoRewards["0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741"]
          .amount
      )
        .times(2)
        .div(3)
        .toFixed(0);
      const penaltyExpected = BigNumber(
        potentialTACoRewards["0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741"]
          .amount
      )
        .div(3)
        .toFixed(0);

      expect(
        earnedTACoRewards["0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741"].amount
      ).to.equal(earningsExpected);
      expect(
        earnedTACoRewards["0xe16A1eE2eeB1a5AF31C35A498d703d6F198C1efE"].amount
      ).to.equal(
        potentialTACoRewards["0xe16A1eE2eeB1a5AF31C35A498d703d6F198C1efE"]
          .amount
      );
      expect(
        tacoPenalties["0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741"]
      ).to.equal(penaltyExpected);
      expect(tacoPenalties["0xe16A1eE2eeB1a5AF31C35A498d703d6F198C1efE"]).to.be
        .undefined;
    });

    it("should be 2/3 penalty if three failures", () => {
      const failedHeartbeats = {
        "0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741": ["33", "136", "150"],
      };
      const { earnedTACoRewards, tacoPenalties } = calculatePenalties(
        potentialTACoRewards,
        failedHeartbeats
      );
      // should be subtracted 2/3 of the reward
      const earningsExpected = BigNumber(
        potentialTACoRewards["0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741"]
          .amount
      )
        .div(3)
        .toFixed(0);

      const penaltyExpected = BigNumber(
        potentialTACoRewards["0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741"]
          .amount
      )
        .times(2)
        .div(3)
        .toFixed(0);

      expect(
        earnedTACoRewards["0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741"].amount
      ).to.equal(earningsExpected);

      expect(
        earnedTACoRewards["0xe16A1eE2eeB1a5AF31C35A498d703d6F198C1efE"].amount
      ).to.equal(
        potentialTACoRewards["0xe16A1eE2eeB1a5AF31C35A498d703d6F198C1efE"]
          .amount
      );

      expect(
        tacoPenalties["0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741"]
      ).to.equal(penaltyExpected);
      expect(tacoPenalties["0xe16A1eE2eeB1a5AF31C35A498d703d6F198C1efE"]).to.be
        .undefined;
    });

    it("should be no rewards if more than three failures", () => {
      const failedHeartbeats = {
        "0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741": ["33", "136", "150", "170"],
      };
      const { earnedTACoRewards, tacoPenalties } = calculatePenalties(
        potentialTACoRewards,
        failedHeartbeats
      );
      // should be subtracted all of the reward
      const earningsExpected = "0";
      const penaltyExpected =
        potentialTACoRewards["0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741"]
          .amount;

      expect(
        earnedTACoRewards["0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741"].amount
      ).to.equal(earningsExpected);

      expect(
        earnedTACoRewards["0xe16A1eE2eeB1a5AF31C35A498d703d6F198C1efE"].amount
      ).to.equal(
        potentialTACoRewards["0xe16A1eE2eeB1a5AF31C35A498d703d6F198C1efE"]
          .amount
      );

      expect(
        tacoPenalties["0x6c2e7e031324E68CC767B2f8781f9Fd7D2e75741"]
      ).to.equal(penaltyExpected);
      expect(tacoPenalties["0xe16A1eE2eeB1a5AF31C35A498d703d6F198C1efE"]).to.be
        .undefined;
    });
  });

  describe("Get failed heartbeats", () => {
    it("should return a list of failed heartbeats", async () => {
      // This ritual failed
      const heartbeats = {
        136: [
          "0x3B8FeB29eFb63A7609D5351b3A6AdDaed3c1C7eD",
          "0x5838636dCDd92113998FEcbcDeDf5B0d8bEB4920",
        ],
        137: [
          "0x6dEE1fd2b29e2214a4f9aB9Ba5f3D17C8Cb56D11",
          "0xAAFc71044C2B832dDDFcedb0AE99695B0367dC57",
        ],
      };

      const nodesFailures = await getHeartbeatNodesFailures(heartbeats);
      expect(nodesFailures).to.deep.equal({
        "0x5838636dCDd92113998FEcbcDeDf5B0d8bEB4920": ["136"],
        "0x6dEE1fd2b29e2214a4f9aB9Ba5f3D17C8Cb56D11": ["137"],
        "0xAAFc71044C2B832dDDFcedb0AE99695B0367dC57": ["137"],
      });
    });
  });
});
