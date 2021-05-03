// const DappToken = artifacts.require("./DappToken.sol");
const SafeHubPresale = artifacts.require("./SafeHubPresale.sol");
const chai = require('chai');
const BN = require('bn.js');
chai.use(require('chai-bn')(BN));
const ether = (n) => new BN('1');

const duration = {
  seconds: function (val) { return val; },
  minutes: function (val) { return val * this.seconds(60); },
  hours: function (val) { return val * this.minutes(60); },
  days: function (val) { return val * this.hours(24); },
  weeks: function (val) { return val * this.days(7); },
  years: function (val) { return val * this.days(365); },
};

module.exports = async function(deployer, network, accounts) {
  // const _name = "Safe Hub Token";
  // const _symbol = "SFH";
  // const _decimals = 18;

  // await deployer.deploy(DappToken, _name, _symbol, _decimals);
  // const deployedToken = await DappToken.deployed();

  const latestTime = (new Date).getTime();
  const _rate           = new BN('1000');
  const _wallet         = accounts[0]; // TODO: Replace me
  const _token          = deployedToken.address;
  const _openingTime    = latestTime + duration.minutes(1);
  const _closingTime    = _openingTime + duration.minutes(10);
  const _cap            = ether(100);
  const _goal           = ether(0.1);
  const _foundersFund   = "0xa78b64f203c43ecfe41bee281943f039839e1118"; // TODO: Replace me
  const _foundationFund = "0xa25d597cdfc787f273e590f666f745c8990c6a40"; // TODO: Replace me
  const _partnersFund   = "0x25151ab0bee3889a3a074db9a731591ddf3944da"; // TODO: Replace me
  const _releaseTime    = _closingTime + duration.minutes(10);

  await deployer.deploy(
    DappTokenCrowdsale,
    _rate,
    _wallet,
    _token,
    _cap,
    _openingTime,
    _closingTime,
    _goal,
    _foundersFund,
    _foundationFund,
    _partnersFund,
    _releaseTime
  );

  return true;
};