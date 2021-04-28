module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 550000,
      gasPrice: 25000000000,
      network_id: "*", // Match any network id
    },
    ropsten: {
      // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraApiKey}`),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,
      networkCheckTimeout: 99999, // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  solc: {
    // Turns on the Solidity optimizer. For development the optimizer's
    // quite helpful, just remember to be careful, and potentially turn it
    // off, for live deployment and/or audit time. For more information,
    // see the Truffle 4.0.0 release notes.
    //
    // https://github.com/trufflesuite/truffle/releases/tag/v4.0.0
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
