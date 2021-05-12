import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Container, Grid, Divider } from "@material-ui/core";
import getWeb3 from "../lib/getWeb3";
import SafeHubPresaleAbi from "./api/abi.json";
import NewTokenbytecode from "./api/newTokenbytecode.json";
import Web3 from "web3";

function presale(props) {
  useEffect(async () => {
  });

  const handlePresale = async (e) => {
    e.preventDefault();
    const web3 = await getWeb3();
    const abiData = SafeHubPresaleAbi;
    const contractAddress = "0x4498F943E0a13D70B28e7565CF4E33bF443e6Bf9";

    // web3.eth.defaultAccount = web3.eth.accounts[0]
    // console.log(abiData)
    // const NewTokenbytecode = NewTokenbytecode;
    // const WERTokenContract = await new web3.eth.Contract(
    //   WERTokenAbiData,
    //   contractAddress
    // );
    // console.log(WERTokenContract);

    const duration = {
      seconds: function (val) {
        return val;
      },
      minutes: function (val) {
        return val * this.seconds(60);
      },
      hours: function (val) {
        return val * this.minutes(60);
      },
      days: function (val) {
        return val * this.hours(24);
      },
      weeks: function (val) {
        return val * this.days(7);
      },
      years: function (val) {
        return val * this.days(365);
      },
    };

    const latestTime = new Date().getTime();
    const openingTime = latestTime + duration.minutes(1);
    const closingTime = openingTime + duration.minutes(10);
    const liqAddingTime = closingTime + duration.minutes(5);

    let _info = {
      address : "0x4498F943E0a13D70B28e7565CF4E33bF443e6Bf9",
      tokenPrice : web3.utils.toWei("10", "ether"),
      hardCap: web3.utils.toWei("100", "ether"),
      softCap: web3.utils.toWei("30", "ether"),
      minInv: web3.utils.toWei("0.1", "ether"),
      maxInv: web3.utils.toWei("5", "ether"),
      openingTime: openingTime,
      closingTime: closingTime,
  };

    let _uniInfo = {
      listingPrice: web3.utils.toWei("20", "ether"),
      liqTime: liqAddingTime,
      lockTime: 365,
      precentLock: 25,
    };

    let _stringInfo = {
      listingName: "WER sale",
    };

    const preslaeContract = await new web3.eth.Contract(
      abiData,
      contractAddress
    );
    // console.log(preslaeContract.methods)
    preslaeContract.methods
    .createPresale(_info,_uniInfo,_stringInfo)
    .call((err, result) => {
      console.log(result), console.log(err);
    });
  }

  const handleSmartContract = async (e) => {
    e.preventDefault();
    const web3 = await getWeb3();
    // const web3 = new Web3(
    //   "https://ropsten.infura.io/v3/3d2818b6dda74d9780543605a2a50ae4"
    // );
    const EthereumTx = require('ethereumjs-tx').Transaction
    
    // Data set up
    let abi = '[{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"update_quantity","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get_quantity","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'
    let bytecode = '608060405234801561001057600080fd5b50606460008190555060ca806100276000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806380219655146037578063ed0109a5146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b6068608c565b6040518082815260200191505060405180910390f35b806000540160008190555050565b6000805490509056fea265627a7a7230582002f975dfd70c1b1f649671805826a83fc9b92457fe7dd245527f56b7776d043464736f6c634300050a0032';

    //Contract object and account info
    let deploy_contract = new web3.eth.Contract(JSON.parse(abi));
    let account = "0x4498F943E0a13D70B28e7565CF4E33bF443e6Bf9";

    // Function Parameter
    let payload = {
      data: bytecode,
    };

    let parameter = {
      from: account,
      gas: web3.utils.toHex(800000),
      gasPrice: web3.utils.toHex(web3.utils.toWei("30", "gwei")),
    };

    // Function Call
    deploy_contract
      .deploy(payload)
      .send(parameter, (err, transactionHash) => {
        console.log("Transaction Hash :", transactionHash);
      })
      .on("confirmation", () => {})
      .then((newContractInstance) => {
        console.log(
          "Deployed Contract Address : ",
          newContractInstance.options.address
        );
      });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={(e) => handleSmartContract(e)}
      >
        Deploy Smart Contract
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={(e) => handlePresale(e)}
      >
        Deploy Presale
      </Button>
    </div>
  );
}

export default presale;
