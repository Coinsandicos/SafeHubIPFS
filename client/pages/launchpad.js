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

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data:", e);
    console.table(["***title***:", title, "***address***:", address]);
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
                    required
                    style={{ height: 30, width: "100%" }}
                    onChange={(e) => setAddress(e.target.value)}
                    id="Price"
                    type="text"
                    maxLength="42"
                    pattern="^0x[a-fA-F0-9]{40}$"
                    // value="0x9cc3C8797863076EaCbB5Af775651407F7FD6122"
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
                    // value=""
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
