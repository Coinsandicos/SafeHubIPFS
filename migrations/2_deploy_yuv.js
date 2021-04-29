const YuvToken = artifacts.require('./YuvToken.sol')

module.exports = function (deployer) {
  deployer.deploy(YuvToken)
}
