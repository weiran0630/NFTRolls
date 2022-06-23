# NFTRolls

This project demonstrates a basic Hardhat use case. It comes with a ERC721 contract, a test without actual testing (I'm too lazy for that), a script that deploys that contract, and an front-end application built with react and Chakra UI, which able to mint some rick roll images.

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
npm run dev
```
