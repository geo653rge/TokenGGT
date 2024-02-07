import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config';

const INFURA_API_KEY = process.env.INFURA_API_KEY;
// const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY ||"";




module.exports = {
  defaultNetwork:"sepolia",
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,

     
    }
  }
};


