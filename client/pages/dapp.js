import React from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

class Dapp extends React.Component {
  state = {
    balance: undefined,
    ethBalance: undefined
  };

  storeValue = async () => {
    const { accounts, contract } = this.props
    await contract.methods.set(5).send({ from: accounts[0] })
    alert('Stored 5 into account')
  };

  getValue = async () => {
    const { accounts, contract } = this.props
    const response = await contract.methods.get().call({ from: accounts[0] })
    this.setState({ balance: response })
  };

  getEthBalance = async () => {
    const { web3, accounts } = this.props
    const balanceInWei = await web3.eth.getBalance(accounts[0])
    this.setState({ ethBalance: balanceInWei / 1e18 })
  };

  render () {
    const { balance = 'N/A', ethBalance = 'N/A' } = this.state
    return (
      <div>
        <h1>My Dapp</h1>
        <div>
        <Button onClick={this.storeValue} size="small" variant="contained" color="primary">
        Store 5 into account balance
        </Button>
        </div>
        <div>
        <Button onClick={this.getValue} size="small" variant="contained" color="primary">
        Get account balance
        </Button>
        </div>
        <div>
        <Button onClick={this.getEthBalance} size="small" variant="contained" color="primary">
        Get ether balance
        </Button>
        </div>
        <div>Account Balance: {balance}</div>
        <div>Ether Balance: {ethBalance}</div>
        <div>
        <Button variant="contained" color="primary" size="small">
      <Link href="/accounts"><a style={{textDecoration:"none", color:"white"}}>My Accounts</a></Link>
      </Button>
        </div>
        <div>
        <Button variant="contained" color="primary" size="small">
      <Link href="/"><a style={{textDecoration:"none", color:"white"}}>Home</a></Link>
      </Button>
        </div>
      </div>
    )
  }
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({ web3, accounts, contract }) => (
      <Dapp accounts={accounts} contract={contract} web3={web3} />
    )}
  />
)
