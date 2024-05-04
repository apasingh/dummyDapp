# dummyDapp
testing for the secureswap project

npm install -g truffle
truffle init    // creates basic folders, put in solidity contract into the contracts folder.
truffle compile //compiles the solidity contract. the config will hold any errors if there are any. the version is   
                // usually the issue, check compilers, solc, version

//make sure we are in the test network
//on our browser we use metamask to deploy contract, but in vscode we need to use an hd wallet provider to do it

npm install @truffle/hdwallet-provider

//go to truffle-config again, uncomment the three lines const HDWalletProvider..., const fs..., and const mnemonic...
//the read secretfile is your private key. make a .secret file, and enter your 12 words seed

//open browser and go to infura.io
//create an account/log in, create a new project on ethereum

npm install uws //install uWebSockets (uWs) library in my Node.js project

** my node was an incorrect version and i had to install nvm, and use version 18:
nvm use 18 //but most ppl do not have this issue

truffle migrate --network sepolia //to try and deploy the contract


# ONCE CONTRACT IS DEPLOYED

npm create vite@latest infinity-tower-web-tutorial --template react-ts //choose react, choose TypeScript

npm install vite

npm install vite --save-dev

npm run dev   //should run on localhost

npm install @mantine/hooks @mantine/core @mantine/form

//using dapp ethers for using hooks, now we can create our walletconnect
npm install @usedapp/core ethers

//make sure to config in main.tsx

npm install normalize.css //for style in mantine
