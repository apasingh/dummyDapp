import { Interface } from 'ethers/lib/utils';
import { Contract } from 'ethers';

const contractAddress="0xaC6907b239D4680b354c236Dfa396bF696A37E1A";
const ABI = new Interface([
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "floor",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ownerName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "link",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "color",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "windowsTint",
          "type": "uint256"
        }
      ],
      "name": "NewFLoor",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "floors",
      "outputs": [
        {
          "internalType": "string",
          "name": "ownerName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "message",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "link",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "color",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "windowsTint",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "nbFloors",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_ownerName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_link",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_color",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_windowsTint",
          "type": "uint256"
        }
      ],
      "name": "createFloor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]);

export const contract = new Contract(contractAddress, ABI);

//this is a custom hook to interact with our contract