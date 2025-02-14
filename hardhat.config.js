require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    arbSepolia: {
      url: `https://arb-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  }
};