const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Voting = artifacts.require('Voting');

module.exports = async (deployer) => {
  await deployProxy(Voting, { deployer, initializer: false });
}