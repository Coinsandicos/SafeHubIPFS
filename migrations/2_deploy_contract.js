const SafeHubToken = artifacts.require('./SafeHubToken.sol')

module.exports = function (deployer) {
  deployer.deploy(SafeHubToken)
}
