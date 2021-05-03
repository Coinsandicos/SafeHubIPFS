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
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Data:", e);
    // console.table(["***title***:", title, "***address***:", address]);

    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const contract = await getContract(web3, contractDefinition);
      // web3.eth.defaultAccount = '0xfaf0c3b3a34332264386813aac334bdb58f1ba12'
      setWeb3(web3);
      setAccounts(accounts);
      setContract(contract);
      // console.log("Data!",data)
      // console.log(accounts)

      new web3.eth.Contract([contractDefinition], `${accounts}`, {
        from: `${accounts}`,
        gasPrice: "20000000000",
        data: {
          generatedSources: [],
          linkReferences: {},
          object:
            "608060405234801561001057600080fd5b5061012f806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80632e64cec11460375780636057361d146051575b600080fd5b603d6069565b6040516048919060c2565b60405180910390f35b6067600480360381019060639190608f565b6072565b005b60008054905090565b8060008190555050565b60008135905060898160e5565b92915050565b60006020828403121560a057600080fd5b600060ac84828501607c565b91505092915050565b60bc8160db565b82525050565b600060208201905060d5600083018460b5565b92915050565b6000819050919050565b60ec8160db565b811460f657600080fd5b5056fea26469706673582212209ea413b32307fdcb80151d5cfa7449ee6ce6fd9f0b5a5cae9cbe9fe3944f97ef64736f6c63430008040033",
          opcodes:
            "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x12F DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x32 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x2E64CEC1 EQ PUSH1 0x37 JUMPI DUP1 PUSH4 0x6057361D EQ PUSH1 0x51 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x3D PUSH1 0x69 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x48 SWAP2 SWAP1 PUSH1 0xC2 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x67 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH1 0x63 SWAP2 SWAP1 PUSH1 0x8F JUMP JUMPDEST PUSH1 0x72 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST DUP1 PUSH1 0x0 DUP2 SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH1 0x89 DUP2 PUSH1 0xE5 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH1 0xA0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0xAC DUP5 DUP3 DUP6 ADD PUSH1 0x7C JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0xBC DUP2 PUSH1 0xDB JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH1 0xD5 PUSH1 0x0 DUP4 ADD DUP5 PUSH1 0xB5 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0xEC DUP2 PUSH1 0xDB JUMP JUMPDEST DUP2 EQ PUSH1 0xF6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SWAP15 LOG4 SGT 0xB3 0x23 SMOD REVERT 0xCB DUP1 ISZERO SAR 0x5C STATICCALL PUSH21 0x49EE6CE6FD9F0B5A5CAE9CBE9FE3944F97EF64736F PUSH13 0x63430008040033000000000000 ",
          sourceMap: "141:356:0:-:0;;;;;;;;;;;;;;;;;;;",
        },
      });
      console.log(contract)

      // .then(function(receipt){
      //     console.log(receipt)
      //   });

      // web3.eth.sendTransaction({
      //   from: `${accounts}`,
      //   to: `0xD600d591216DAF658f43BDA5a93e58B37008bAEf`,
      //   value: '1000000000000000000',
      //   gasPrice:'20000000000',
      //   // nonce: "5",
      //   // chain: '5778'
      //   })
      // .then(function(receipt){
      //   console.log(receipt)
      // });

      web3.eth.getBalance(`${accounts}`, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          setEthBalance(web3.utils.fromWei(result, "ether"));
          //  console.log(result)
        }
      });
    } catch (error) {
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
        </div>
      </Container>
    </div>
  );
}
