const { nullAddress, treasuryExports } = require("../helper/treasury");

const communityFund = "0x586b9b2F8010b284A0197f392156f1A7Eb5e86e9";
const nxm = "0xd7c49CEE7E9188cCa6AD8FF264C1DA2e69D4Cf3B";
const wNxm = "0x0d438F3b5175Bebc262bF23753C1E53d03432bDE";

module.exports = treasuryExports({
  ethereum: {
    tokens: [
      nullAddress,
      "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT
      "0x2ba592F78dB6436527729929AAf6c908497cB200", // CREAM
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
      "0x5aFE3855358E112B5647B952709E6165e1c1eEEe", // SAFE
    ],
    ownTokens: [nxm, wNxm],
    owners: [communityFund],
    ownTokenOwners: [communityFund],
  },
});
