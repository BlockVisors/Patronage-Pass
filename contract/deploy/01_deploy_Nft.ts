import { ethers } from "hardhat"

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log("Deploying contracts with the account:", deployer.address)

  console.log("Account balance:", (await deployer.getBalance()).toString())

  const ContractFactory = await ethers.getContractFactory("PatronagePass")
  const contract = await ContractFactory.deploy()

  console.log("Token address:", contract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })



// import {verify} from '../hardhat.config';

// export async function main({getNamedAccounts, deployments}) {
//   const {deploy} = deployments;
//   const {deployer} = await getNamedAccounts();
//   const basicNFT = await deploy('NFT', {
//     from: deployer,
//     log: true,
//   });
// }

// main.tags = ['NFT'];



// const { verify } = require("../hardhat.config");

// module.exports = async ({ getNamedAccounts, deployments }) => {
//     const { deploy } = deployments;
//     const { deployer } = await getNamedAccounts();
//     const basicNFT = await deploy('NFT', {
//         from: deployer,
//         log: true,
//     });


// };
// module.exports.tags = ['NFT'];



