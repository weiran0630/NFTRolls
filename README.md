# NFTRolls

This project demonstrates a basic Web3 dapp for minting NFTs. Mostly refer to the [Web3 Tutorial](https://github.com/fireship-io/web3-nft-dapp-tutorial) created by [@fireship-io](https://github.com/fireship-io). It comes with a ERC721 contract, a test without actual testing (I'm too lazy for that), a script that deploys that contract, and a front-end application built with react and Chakra UI, which is able to mint some rick roll images.

Clone the project:

```shell
git clone https://github.com/weiran0630/NFTRolls.git
```

To compile and serve the contract on a blockchain (Polygon testnet is used on this project), try running some of the following tasks:

```shell
# Terminal tab 1
npx hardhat compile
npx hardhat node

# Terminal tab 2
npx hardhat run scripts/sample-script.js --network localhost
```

To run the front-end application on a local development server:

```shell
# Terminal tab 3
vim .env      # Create your .env file with your own VITE_CONTENT_ID and VITE_CONTRACT_ADDRESS.
              # If needed, also VITE_FILE_EXTENSION of your preference.

npm run dev   # start up the development server
```
