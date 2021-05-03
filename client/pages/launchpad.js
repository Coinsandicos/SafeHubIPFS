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
import getWeb3 from '../lib/getWeb3'
import getContract from '../lib/getContract'
import contractDefinition from '../lib/contracts/SimpleStorage.json'
import TestTokenContractDefinition from '../lib/contracts/TestToken.json'

const chai = require('chai');
const BN = require('bn.js');

// Enable and inject BN dependency
chai.use(require('chai-bn')(BN));

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
  const [ethBalance, setEthBalance] = React.useState('');

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
    console.log("Data:", e);
    console.table(["***title***:", title, "***address***:", address]);

    try {
      const web3 = await getWeb3()
      const accounts = await web3.eth.getAccounts()
      const contract = await getContract(web3, contractDefinition)
      const data = await web3.eth
      const DeployToken = new web3.eth.Contract([TestTokenContractDefinition], '0xfAF0c3B3a34332264386813AAC334bDB58F1ba12', {
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });
      // web3.eth.defaultAccount = '0xfaf0c3b3a34332264386813aac334bdb58f1ba12'
      setWeb3(web3)
      setAccounts(accounts)
      setContract(contract)
      // console.log("Data!",data)
      // console.log(accounts)
      // console.log(contract)
      

      // web3.eth.sendTransaction({
      //   from: `${accounts}`,
      //   to: `0xE09B9154dDA29d69f8FC3F2C289B453dD846f16f`,
      //   value: '1000000000000000000',
      //   gasPrice:'20000000000',
      //   // nonce: "5",
      //   // chain: '5778'
      //   })
      // .then(function(receipt){
      //   console.log(receipt)
      // });

      var myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
        from: '0x1234567890123456789012345678901234567891', // default from address
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });


      web3.eth.getBalance(`${accounts}`,function(error,result){
        if(error){
           console.log(error)
        }
        else{
           setEthBalance(web3.utils.fromWei(result, 'ether'))
          //  console.log(result)
        }
     })
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      )
      console.log(error)
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
        <h2>Balance - {ethBalance} </h2>
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
