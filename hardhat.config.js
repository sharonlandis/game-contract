require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_RINKEBY_KEY,
      accounts: [process.env.STAGING_PRIVATE_RINKEBY_KEY],
    },
    ropsten: {
      url: process.env.STAGING_ALCHEMY_ROPSTEN_KEY,
      accounts: [process.env.STAGING_PRIVATE_ROPSTEN_KEY],
    },
  },
  // etherscan: {
  //   apiKey: process.env.STAGING_ETHERSCAN_KEY,
  // },
};
