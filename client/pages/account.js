import React from "react";
import Link from "next/link";
import Web3Container from "../lib/Web3Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  link: {
    textDecoration: "none",
    color: "red",
  },
}));

const Accounts = ({ accounts }) => {
  const classes = useStyles();
  return (
    <div>
      <h1>My Account</h1>
      <pre>{JSON.stringify(accounts, null, 4)}</pre>
      <div className={classes.root}>
        {/* <Button variant="contained" color="primary" size="small">
      <Link href="/dapp"><a style={{textDecoration:"none", color:"white"}}>My Dapp</a></Link>
      </Button> */}
        <Button variant="contained" color="primary" size="small">
          <Link href="/">
            <a style={{ textDecoration: "none", color: "white" }}>Home</a>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ accounts }) => <Accounts accounts={accounts} />}
  />
);
