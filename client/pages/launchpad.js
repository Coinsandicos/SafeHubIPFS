import React, { useState, useEffect } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  OutlinedInput,
  InputLabel,
  Input,
  FormControl,
  FilledInput,
  FormHelperText,
  TextField,
  Paper,
  Grid,
  Divider,
} from "@material-ui/core";
import getWeb3 from "../lib/getWeb3";
import getContract from "../lib/getContract";
import contractDefinition from "../lib/contracts/SimpleStorage.json";
import PresaleContractDefinition from "../lib/contracts/SafeHubPresale.json";
import Web3 from "web3";
import SafeHubPresaleAbi from "./api/abi.json";

const chai = require("chai");
const BN = require("bn.js");
// Enable and inject BN dependency
chai.use(require("chai-bn")(BN));

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    title: {
      display: "flex",
      justifyContent: "center",
    },
    form: {
      margin: theme.spacing(1),
    },
  },
}));
export default function launchpad() {
  const classes = useStyles();
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [burnAddress, setburnAddress] = useState("");
  const [softCap, setSoftCap] = React.useState("");
  const [hardCap, setHardCap] = React.useState("");
  const [minInvestment, setMinInvestment] = React.useState("");
  const [maxInvestment, setMaxInvestment] = React.useState("");
  const [startingDate, setStartingDate] = React.useState("");
  const [closingDate, setClosingDate] = React.useState("");
  const [ethBalance, setEthBalance] = React.useState("");

  //   const myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
  //     from: '0xfaf0c3b3a34332264386813aac334bdb58f1ba12', // default from address
  //     gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  // });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    // const newWeb3 = new Web3(
    //   "https://ropsten.infura.io/v3/3d2818b6dda74d9780543605a2a50ae4"
    // );
    const web3 = await getWeb3();
    const abiData = SafeHubPresaleAbi;
    const contractAddress = "0x4498F943E0a13D70B28e7565CF4E33bF443e6Bf9";
    const preslaeContract = await new web3.eth.Contract(
      abiData,
      contractAddress
    );
    // preslaeContract.methods.createPresale().call((err, result)=> {console.log(result), console.log(err)})
    console.log(preslaeContract.methods);
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  const handleClick = async (e) => {
    e.preventDefault();

    // const web3 = new Web3(
    //   'https://ropsten.infura.io/v3/3d2818b6dda74d9780543605a2a50ae4'
    // );
    // const address = '0x4498F943E0a13D70B28e7565CF4E33bF443e6Bf9'

    const EthereumTx = require("ethereumjs-tx").Transaction;
    // var Buffer = require('buffer/').Buffer
    const web3 = new Web3(
      'https://ropsten.infura.io/v3/3d2818b6dda74d9780543605a2a50ae4'
    );
    const account1 = '0x4498F943E0a13D70B28e7565CF4E33bF443e6Bf9'
    const PRIVATE_KEY_1 = 'd5be4a03c98bedb8045fb9bd5b6ec265aa685b59c373559e5e7af02fe8927793'
    const privateKey1 = Buffer.from(PRIVATE_KEY_1, "hex");

    web3.eth.getTransactionCount(account1, (err, txCount) => {
      //Smart contract data
      const contractData = '0x60806040523480156200001157600080fd5b506040516200175a3803806200175a833981810160405281019062000037919062000193565b81600390805190602001906200004f92919062000071565b5080600490805190602001906200006892919062000071565b50505062000376565b8280546200007f906200029b565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b60006200013862000132846200022f565b62000206565b9050828152602081018484840111156200015157600080fd5b6200015e84828562000265565b509392505050565b600082601f8301126200017857600080fd5b81516200018a84826020860162000121565b91505092915050565b60008060408385031215620001a757600080fd5b600083015167ffffffffffffffff811115620001c257600080fd5b620001d08582860162000166565b925050602083015167ffffffffffffffff811115620001ee57600080fd5b620001fc8582860162000166565b9150509250929050565b60006200021262000225565b9050620002208282620002d1565b919050565b6000604051905090565b600067ffffffffffffffff8211156200024d576200024c62000336565b5b620002588262000365565b9050602081019050919050565b60005b838110156200028557808201518184015260208101905062000268565b8381111562000295576000848401525b50505050565b60006002820490506001821680620002b457607f821691505b60208210811415620002cb57620002ca62000307565b5b50919050565b620002dc8262000365565b810181811067ffffffffffffffff82111715620002fe57620002fd62000336565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6113d480620003866000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610e40565b60405180910390f35b6100e660048036038101906100e19190610c8e565b610308565b6040516100f39190610e25565b60405180910390f35b610104610326565b6040516101119190610f42565b60405180910390f35b610134600480360381019061012f9190610c3f565b610330565b6040516101419190610e25565b60405180910390f35b610152610431565b60405161015f9190610f5d565b60405180910390f35b610182600480360381019061017d9190610c8e565b61043a565b60405161018f9190610e25565b60405180910390f35b6101b260048036038101906101ad9190610bda565b6104e6565b6040516101bf9190610f42565b60405180910390f35b6101d061052e565b6040516101dd9190610e40565b60405180910390f35b61020060048036038101906101fb9190610c8e565b6105c0565b60405161020d9190610e25565b60405180910390f35b610230600480360381019061022b9190610c8e565b6106b4565b60405161023d9190610e25565b60405180910390f35b610260600480360381019061025b9190610c03565b6106d2565b60405161026d9190610f42565b60405180910390f35b606060038054610285906110a6565b80601f01602080910402602001604051908101604052809291908181526020018280546102b1906110a6565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c610315610759565b8484610761565b6001905092915050565b6000600254905090565b600061033d84848461092c565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610388610759565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610408576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ff90610ec2565b60405180910390fd5b61042585610414610759565b85846104209190610fea565b610761565b60019150509392505050565b60006012905090565b60006104dc610447610759565b848460016000610455610759565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104d79190610f94565b610761565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461053d906110a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610569906110a6565b80156105b65780601f1061058b576101008083540402835291602001916105b6565b820191906000526020600020905b81548152906001019060200180831161059957829003601f168201915b5050505050905090565b600080600160006105cf610759565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561068c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068390610f22565b60405180910390fd5b6106a9610697610759565b8585846106a49190610fea565b610761565b600191505092915050565b60006106c86106c1610759565b848461092c565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c890610f02565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610841576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083890610e82565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161091f9190610f42565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561099c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099390610ee2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0390610e62565b60405180910390fd5b610a17838383610bab565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9490610ea2565b60405180910390fd5b8181610aa99190610fea565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b399190610f94565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b9d9190610f42565b60405180910390a350505050565b505050565b600081359050610bbf81611370565b92915050565b600081359050610bd481611387565b92915050565b600060208284031215610bec57600080fd5b6000610bfa84828501610bb0565b91505092915050565b60008060408385031215610c1657600080fd5b6000610c2485828601610bb0565b9250506020610c3585828601610bb0565b9150509250929050565b600080600060608486031215610c5457600080fd5b6000610c6286828701610bb0565b9350506020610c7386828701610bb0565b9250506040610c8486828701610bc5565b9150509250925092565b60008060408385031215610ca157600080fd5b6000610caf85828601610bb0565b9250506020610cc085828601610bc5565b9150509250929050565b610cd381611030565b82525050565b6000610ce482610f78565b610cee8185610f83565b9350610cfe818560208601611073565b610d0781611136565b840191505092915050565b6000610d1f602383610f83565b9150610d2a82611147565b604082019050919050565b6000610d42602283610f83565b9150610d4d82611196565b604082019050919050565b6000610d65602683610f83565b9150610d70826111e5565b604082019050919050565b6000610d88602883610f83565b9150610d9382611234565b604082019050919050565b6000610dab602583610f83565b9150610db682611283565b604082019050919050565b6000610dce602483610f83565b9150610dd9826112d2565b604082019050919050565b6000610df1602583610f83565b9150610dfc82611321565b604082019050919050565b610e108161105c565b82525050565b610e1f81611066565b82525050565b6000602082019050610e3a6000830184610cca565b92915050565b60006020820190508181036000830152610e5a8184610cd9565b905092915050565b60006020820190508181036000830152610e7b81610d12565b9050919050565b60006020820190508181036000830152610e9b81610d35565b9050919050565b60006020820190508181036000830152610ebb81610d58565b9050919050565b60006020820190508181036000830152610edb81610d7b565b9050919050565b60006020820190508181036000830152610efb81610d9e565b9050919050565b60006020820190508181036000830152610f1b81610dc1565b9050919050565b60006020820190508181036000830152610f3b81610de4565b9050919050565b6000602082019050610f576000830184610e07565b92915050565b6000602082019050610f726000830184610e16565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610f9f8261105c565b9150610faa8361105c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fdf57610fde6110d8565b5b828201905092915050565b6000610ff58261105c565b91506110008361105c565b925082821015611013576110126110d8565b5b828203905092915050565b60006110298261103c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611091578082015181840152602081019050611076565b838111156110a0576000848401525b50505050565b600060028204905060018216806110be57607f821691505b602082108114156110d2576110d1611107565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6113798161101e565b811461138457600080fd5b50565b6113908161105c565b811461139b57600080fd5b5056fea264697066735822122045acfc413040dfd15208b5c20c4b5a2824c71db5dc37795ec1a36861340d816764736f6c63430008040033'
    // create transaction
    const txParams = {
      nonce: web3.utils.toHex(txCount),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      gasLimit: web3.utils.toHex(1000000),// Raise this if needed
      data: contractData,
      value: 0,
    };

    // The second parameter is not necessary if these values are used
    // sign the transaction
    const tx = new EthereumTx(txParams, { chain: 'ropsten', hardfork: 'byzantium' })
     tx.sign(privateKey1);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex')
    
    //broadcast transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err', err, 'txHash', txHash)
    })
  });

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Data:", e);
    // console.table(["***title***:", title, "***address***:", address]);

    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const contract = await getContract(web3, contractDefinition);


      setWeb3(web3);
      setAccounts(accounts);
      setContract(contract);
      // console.log("Data!",data)
      console.log(startingDate);

      // new web3.eth.Contract([contractDefinition], `${accounts}`, {
      //   from: `${accounts}`,
      //   gasPrice: "20000000000",
      //   data: {
      //     generatedSources: [],
      //     linkReferences: {},
      //     object:
      //       "608060405234801561001057600080fd5b5061012f806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80632e64cec11460375780636057361d146051575b600080fd5b603d6069565b6040516048919060c2565b60405180910390f35b6067600480360381019060639190608f565b6072565b005b60008054905090565b8060008190555050565b60008135905060898160e5565b92915050565b60006020828403121560a057600080fd5b600060ac84828501607c565b91505092915050565b60bc8160db565b82525050565b600060208201905060d5600083018460b5565b92915050565b6000819050919050565b60ec8160db565b811460f657600080fd5b5056fea26469706673582212209ea413b32307fdcb80151d5cfa7449ee6ce6fd9f0b5a5cae9cbe9fe3944f97ef64736f6c63430008040033",
      //     opcodes:
      //       "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x12F DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x32 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x2E64CEC1 EQ PUSH1 0x37 JUMPI DUP1 PUSH4 0x6057361D EQ PUSH1 0x51 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x3D PUSH1 0x69 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x48 SWAP2 SWAP1 PUSH1 0xC2 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x67 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH1 0x63 SWAP2 SWAP1 PUSH1 0x8F JUMP JUMPDEST PUSH1 0x72 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST DUP1 PUSH1 0x0 DUP2 SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH1 0x89 DUP2 PUSH1 0xE5 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH1 0xA0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0xAC DUP5 DUP3 DUP6 ADD PUSH1 0x7C JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0xBC DUP2 PUSH1 0xDB JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH1 0xD5 PUSH1 0x0 DUP4 ADD DUP5 PUSH1 0xB5 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0xEC DUP2 PUSH1 0xDB JUMP JUMPDEST DUP2 EQ PUSH1 0xF6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SWAP15 LOG4 SGT 0xB3 0x23 SMOD REVERT 0xCB DUP1 ISZERO SAR 0x5C STATICCALL PUSH21 0x49EE6CE6FD9F0B5A5CAE9CBE9FE3944F97EF64736F PUSH13 0x63430008040033000000000000 ",
      //     sourceMap: "141:356:0:-:0;;;;;;;;;;;;;;;;;;;",
      //   },
      // });
      // console.log(contract)
      // .then(function(receipt){
      //     console.log(receipt)
      //   });

      web3.eth.sendTransaction({
        from: `${accounts}`,
        to: `0xD600d591216DAF658f43BDA5a93e58B37008bAEf`,
        value: web3.utils.toWei('0.1','ether'),
        gasPrice:'20000000000',
        // nonce: "5",
        // chain: '5778'
        })
      .then(function(receipt){
        console.log(receipt)
      });

      web3.eth.getBalance(`${accounts}`, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          setEthBalance(web3.utils.fromWei(result, "ether"));
          //  console.log(result)
        }
      });
    } 
    catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <Container>
        <h1
          className={classes.title}
          style={{ display: "flex", justifyContent: "center" }}
        >
          Launchpad
        </h1>
        <h2>Balance - {ethBalance} ETH </h2>
        <Paper elevation={3} style={{ margin: 40 }}>
          <Container>
            <h2>*Please Read*</h2>
            <p>Fields marked with * are required</p>
            <p>Dev fee: 3% of raised ETH & raised Tokens.</p>
          </Container>
          <Divider />
          <form onSubmit={(e) => handleSubmit(e)}>
            <Container>
              <Grid container spacing={7} display="flex" alignItems="center">
                <Grid item xs={12} sm={6}>
                  <h3>* ERC20 Token Address</h3>
                  <input
                    // required
                    style={{ height: 30, width: "100%" }}
                    onChange={(e) => setAddress(e.target.value)}
                    id="Price"
                    type="text"
                    maxLength="42"
                    pattern="^0x[a-fA-F0-9]{40}$"
                    // value="0xE09B9154dDA29d69f8FC3F2C289B453dD846f16f"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Sale Title</h3>
                  <input
                    required
                    style={{ height: 30, width: "60%" }}
                    onChange={(e) => setTitle(e.target.value)}
                    id="Title"
                    type="text"
                    value="SImdaq"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>* Token Price (ETH)</h3>
                  <input
                    required
                    style={{ height: 30 }}
                    onChange={(e) => setPrice(e.target.value)}
                    id="Price"
                    type="number"
                    min={0}
                    step="0.1"
                    value={1000}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h4>
                    Address where UNSOLD TOKENS will be transferred to (burn
                    address by default)
                  </h4>
                  <input
                    style={{ height: 30, width: "100%" }}
                    onChange={(e) => setburnAddress(e.target.value)}
                    id="Burn Address"
                    type="text"
                    maxLength="42"
                    placeholder="0x00000000000000000000000000000000000dEaD"
                    pattern="^0x[a-fA-F0-9]{40}$"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>* Soft Cap (ETH)</h3>
                  <input
                    required
                    style={{ height: 30 }}
                    onChange={(e) => setSoftCap(e.target.value)}
                    id="SoftCap"
                    type="number"
                    min={0}
                    step="0.01"
                    value={100}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>* Hard Cap (ETH)</h3>
                  <input
                    required
                    style={{ height: 30 }}
                    onChange={(e) => setHardCap(e.target.value)}
                    id="HardCap"
                    type="number"
                    min={0}
                    step="0.01"
                    value={500}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Min. Investment per Wallet (ETH)</h3>
                  <input
                    style={{ height: 30 }}
                    onChange={(e) => setMinInvestment(e.target.value)}
                    id="MinInvestment"
                    type="number"
                    min={0}
                    step="0.001"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Max. Investment per Wallet (ETH)</h3>
                  <input
                    style={{ height: 30 }}
                    onChange={(e) => setMaxInvestment(e.target.value)}
                    id="MaxInvestment"
                    type="number"
                    min={0}
                    step="0.001"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>* Opens at</h3>
                  <input
                    // required
                    style={{ height: 40 }}
                    onChange={(e) => setStartingDate(e.target.value)}
                    id="Starting Date"
                    type="datetime-local"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>* Closes at</h3>
                  <input
                    // required
                    style={{ height: 40 }}
                    onChange={(e) => setClosingDate(e.target.value)}
                    id="Closing Date"
                    type="datetime-local"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h2>Whitelist</h2>
                  <Divider />
                  <h3>Whitelisted Addresses (Comma-separated)</h3>
                  <p>example:</p>
                  <p>0x94gsl87978..,</p>
                  <p>0x4F7d6gf292..,</p>
                  <p>0xfsf5fb6363..,</p>
                  <Grid item sm={9} xs={12}>
                    <TextField
                      multiline
                      rows={4}
                      id="outlined-basic"
                      variant="filled"
                    />
                    <p>Skip if there is no whitelist</p>
                  </Grid>
                </Grid>
              </Grid>
              <Button
                style={{ margin: "30px auto", width: "100%" }}
                color="primary"
                type="submit"
                variant="contained"
                size="large"
              >
                Submit Smart Contract
              </Button>
            </Container>
          </form>
        </Paper>
        <div>
          <Button variant="contained" color="primary" size="small">
            <Link href="/">
              <a style={{ textDecoration: "none", color: "white" }}>Home</a>
            </Link>
          </Button>
          <Button variant="contained" color="secondary" size="large" onClick={(e)=> handleClick(e)}>
            Deploy!
          </Button>
        </div>
      </Container>
    </div>
  );
}
