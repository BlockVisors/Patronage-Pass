import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'ERC6551Account';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const args: any[] = [];
  const deployment = await deploy(name, {
    from: deployer,
    args,
  });

  console.log(
    `npx hardhat verify --network ${network.name} ${
      deployment.address
    } ${args.map((arg) => `"${arg}"`)}`
  );
};

func.tags = [name];
export default func;




// import {verify} from '../hardhat.config';

// export async function main({getNamedAccounts, deployments, run}) {
//   const {deploy} = deployments;
//   const {deployer} = await getNamedAccounts();
//   const erc6551account = await deploy('ERC6551Account', {
//     from: deployer,
//     log: true,
//   });

//   // Run the verify command to verify the contract
//   await run('verify:verify', {
//     address: erc6551account.address,
//   });
// }

// main.tags = ['ERC6551Account'];


// const { verify } = require("../hardhat.config");

// module.exports = async ({ getNamedAccounts, deployments, run }) => {
//     const { deploy } = deployments;
//     const { deployer } = await getNamedAccounts();
//     const erc6551account = await deploy('ERC6551Account', {
//         from: deployer,
//         log: true,
//     });

// };
// module.exports.tags = ['ERC6551Account'];