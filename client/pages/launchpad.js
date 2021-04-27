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
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    console.log(event.target.value);
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

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
            <h2>Sale Details</h2>
            <p>(Fields marked with * are required</p>
            <p>Dev fee: 3% of raised ETH & raised Tokens.</p>
          </Container>
          <Divider />
          <form onSubmit={handleSubmit}>
            <Container>
              <Grid container spacing={7} display="flex" alignItems="center">
                <Grid item xs={12} sm={6}>
                  <h3>* ERC20 Token Address</h3>
                  <TextField
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    id="outlined-basic"
                    variant="filled"
                    label="Token Address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Sale Title</h3>
                  <TextField
                    onChange={handleChange}
                    id="outlined-basic"
                    variant="filled"
                    label="Sale Title"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>* Token Price (ETH)</h3>
                  <TextField
                    onChange={handleChange}
                    id="outlined-basic"
                    variant="filled"
                    label="Token Price"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h4>
                    Address where UNSOLD TOKENS will be transferred to (burn
                    address by default)
                  </h4>
                  <TextField
                    onChange={handleChange}
                    id="outlined-basic"
                    variant="filled"
                    label="0x000000...dEaD"
                  />
                  {/* <p>Unsold tokens will be sent to burn address by default</p> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>* Soft Cap (ETH)</h3>
                  <TextField
                    onChange={handleChange}
                    id="outlined-basic"
                    variant="filled"
                    label="Soft Cap"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>* Hard Cap (ETH)</h3>
                  <TextField
                    onChange={handleChange}
                    id="outlined-basic"
                    variant="filled"
                    label="Hard Cap"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Min. Investment per Wallet (ETH)</h3>
                  <TextField
                    onChange={handleChange}
                    id="outlined-basic"
                    variant="filled"
                    label="Min. Investment"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Max. Investment per Wallet (ETH)</h3>
                  <TextField
                    onChange={handleChange}
                    id="outlined-basic"
                    variant="filled"
                    label="Max. Investment"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>* Opens at</h3>
                  <TextField
                    onChange={handleChange}
                    id="outlined-basic"
                    variant="filled"
                    type="datetime-local"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>* Closes at</h3>
                  <TextField
                    onChange={handleChange}
                    id="outlined-basic"
                    variant="filled"
                    type="datetime-local"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h2>Whitelist</h2>
                  <Divider/>
                  <h3>Whitelisted Addresses (Comma-separated)</h3>
                  <p>example:</p>
                  <p>0x9cc3C87978..,</p>
                  <p>0xcF7d623d92..,</p>
                  <p>0x3f5ce5fb63..,</p>
                  <Grid item sm={9} xs={12}>
                  <TextField
                    multiline
                    rows={4}
                    onChange={handleChange}
                    id="outlined-basic"
                    variant="filled"
                  />
                  </Grid>
                </Grid>
              </Grid>
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
