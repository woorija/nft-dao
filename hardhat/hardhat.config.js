require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

//const QUICKNODE_HTTP_URL = process.env.Goerli_URL;
const QUICKNODE_HTTP_URL = process.env.Sepolia_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const LINEA_API_KEY = process.env.LINEA_API_KEY;
const LINEA_URL = process.env.LINEA_URL;
const POLYzkevm_API_KEY = process.env.POLYzkevm_API_KEY;
const POLYzkevm_URL = process.env.POLYzkevm_URL;

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
    linea_testnet: {
      url: LINEA_URL,
      accounts: [PRIVATE_KEY],
    },
    zkEVM_testnet:{
      url: POLYzkevm_URL,
      accounts: [PRIVATE_KEY],
    }
  },
  
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  
 /*
  etherscan: {
    apiKey: {
      linea_testnet: LINEA_API_KEY,
      zkEVM_testnet: POLYzkevm_API_KEY
    },
    customChains: [
      {
        network: "linea_testnet",
        chainId: 59140,
        urls: {
          apiURL: "https://api-testnet.lineascan.build/api",
          browserURL: "https://goerli.lineascan.build/address"
        }
      },
      {
        network: "zkEVM_testnet",
        chainId: 1442,
        urls: {
          apiURL: "https://api-testnet-zkevm.polygonscan.com/api",
          browserURL: "https://testnet-zkevm.polygonscan.com/"
        }
      }
    ]
  }
  */
};