"use strict";

let contract_abi = [
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "mWallet",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "request",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "daddress",
				"type": "address"
			}
		],
		"name": "setMarketingWalletAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "stakeLog",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "stakeSendRequestLog",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "startStake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startamount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endamount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "unstakeLog",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "withdrawBNB",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "withdrawTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "allSataked",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNow",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "marketingWallet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "restakeFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "request",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "requestTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "requestTimeEnd",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakingEndInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "twoWeekRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let token_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "autolpTaxSell",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "burnTaxSell",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feeStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMarketingWalletAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPoolWalletAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTeamWWalletAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isBeneficiary",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "marketingTaxBuy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "marketingTaxSell",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxTxAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxWalletAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolTaxBuy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolTaxSell",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "newValue",
				"type": "bool"
			}
		],
		"name": "setBeneficiary",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "daddress",
				"type": "address"
			}
		],
		"name": "setMarketingWalletAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "setMaxTxAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "setMaxWalletAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "daddress",
				"type": "address"
			}
		],
		"name": "setPoolWalletAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "team",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "marketing",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pool",
				"type": "uint256"
			}
		],
		"name": "setTaxesBuy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "marketing",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pool",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "autolp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "burn",
				"type": "uint256"
			}
		],
		"name": "setTaxesSell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "newValue",
				"type": "bool"
			}
		],
		"name": "setTaxesStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "daddress",
				"type": "address"
			}
		],
		"name": "setTeamWalletAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamTaxBuy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "withdrawBNB",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "withdrawTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

let contract_address = "0xd70B1d0C35EbA3187C22Fd5bE01a54f59304e838".toLowerCase();
let token_address = "0xE4753B01f38775E835732fC44E761815186CF93D".toLowerCase();
let bnb_address="0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd".toLowerCase();


const Web3Modal = window.Web3Modal.default;

const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal;
let provider;
let selectedAccount;
let interval;
let stake;

function init() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);

  console.log("window.ethereum is", window.ethereum);

  if(location.protocol !== 'https:') {
    const alert = document.querySelector("#alert-error-https");
    alert.style.display = "block";
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    return;
  }

	const providerOptions = {
		walletconnect: {
			package: WalletConnectProvider,
			options: {
				// Mikko's test key - don't copy as your mileage may vary
				//infuraId: "f7abbca2a4b4446498ff0418eec4e9fb",
				//chainId : "0x61",
				rpc: {97: "https://data-seed-prebsc-1-s1.binance.org:8545/"
						//56 : "https://bsc-dataseed.binance.org/",
						//1 : "https://mainnet.infura.io/v3/"

			},
			}
		},
		binancechainwallet: {
		package: true
	}
	};

	web3Modal = new Web3Modal({
		cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);

	if (localStorage.getItem('isWalletConnected')==='true'){
		//provider = window.web3.currentProvider;
		provider = window.ethereum;
		refreshAccountData();
	}
}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  await window.ethereum.enable();

	/*if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        window.alert('Non-Ethereum browser detected. Please install MetaMask plugin');
    };

    console.log("Web3 instance is", web3);*/

  const contract  = new web3.eth.Contract(contract_abi, contract_address);
  const token = new web3.eth.Contract(token_abi, token_address);

	// Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  const chainData = evmChains.getChain(chainId);
  //document.querySelector("#network-name").textContent = chainData.name;
  //document.querySelector("#network-id").textContent = chainId;

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];

	let currentStaked = await contract.methods.stakers(selectedAccount).call();
	document.querySelector("#currentStaked").textContent = (currentStaked['amount']/1e18).toFixed(2);

	let tbalance = await token.methods.balanceOf(selectedAccount).call();
	document.querySelector("#balance").textContent =  (tbalance/1e18).toFixed(2);

	let allowance = await token.methods.allowance(selectedAccount,contract_address).call();

	if (allowance>0){
		document.querySelector("#stake").style.display = "inline";
		//document.querySelector("#unstake").style.display = "inline";
		//document.querySelector("#request").style.display = "inline";
		document.querySelector("#allowToken").style.display = "none";
		//document.querySelector("#buy").hidden=false;
		//document.querySelector("#allowToken").hidden=true;
	}else{
		//document.querySelector("#buy").hidden=true;
		//document.querySelector("#allowToken").hidden=false;
		document.querySelector("#stake").style.display = "none";
		//document.querySelector("#unstake").style.display = "none";
		//document.querySelector("#request").style.display = "none";
		document.querySelector("#allowToken").style.display = "block";
	}

	setInterval(async function(){

		stake = await contract.methods.stakers(selectedAccount).call();
		let claimtime = stake['requestTimeEnd'];
		//claimtime = claimtime;
		let request = stake['request'];

		let timestamp = stake['timestamp'];
		//timestamp = timestamp;

		let amount = stake['amount'];


		let now = parseInt(Date.now()/1000);

		//console.log(receivableTime+" - "+now);
		if ((now>claimtime) && request && claimtime !=0){
			//playerTickets = await contract.methods.playerTickets(game-1,selectedAccount,winnerNumber).call();
			//let yourTicket = await contract.methods.returnTips(game-1,selectedAccount).call();
			document.querySelector("#unstake").style.display = "inline";
		}else{
			document.querySelector("#unstake").style.display = "none";
		}
    //console.log(now+" - "+timestamp);


		if ((request == false) && (((now-timestamp)%60)>40) && amount !=0 ){
			document.querySelector("#request").style.display = "inline";
		}else{
			document.querySelector("#request").style.display = "none";
		}

		let difi = (now+(60-(now-timestamp)%60))*1000;
		clearInterval(interval);
		interval = setInterval(function() {countdown(difi)},1000);
	},3000);

  // Get a handl
  //const template = document.querySelector("#template-balance");
  //const accountContainer = document.querySelector("#accounts");

	document.querySelector("#wa").style.display = "block";
	document.querySelector("#wa").innerHTML = "Wallet address:<br>0x.."+selectedAccount.slice(-4);

  // Purge UI elements any previously loaded accounts
  //accountContainer.innerHTML = '';

  // Go through all accounts and get their ETH balance
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    // https://github.com/indutny/bn.js/
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    // Fill in the templated row and put in the document
    //const clone = template.content.cloneNode(true);
    //clone.querySelector(".address").textContent = address;
    //clone.querySelector(".balance").textContent = humanFriendlyBalance;
  //  document.querySelector("#selected-balance").textContent=humanFriendlyBalance+' BNB';
    //accountContainer.appendChild(clone);
  });

  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers);

  // Display fully loaded UI for wallet data
	document.querySelector("#btn-connect").style.display = "none";
	document.querySelector("#btn-disconnect").style.display = "block";
}



/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  //document.querySelector("#connected").style.display = "none";
  //document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled")
}


/**
 * Connect wallet button pressed.
 */
 async function onConnect() {

   console.log("Opening a dialog", web3Modal);
 	if (localStorage.getItem('isWalletConnected')!=='true'){
 	  try {
 	    provider = await web3Modal.connect();
 			console.log(provider);
 			localStorage.setItem('isWalletConnected', true);
 	  } catch(e) {
 	    console.log("Could not get a wallet connection", e);
 	    return;
 	  }
 	}

   // Subscribe to accounts change
   provider.on("accountsChanged", (accounts) => {
     fetchAccountData();
   });

   // Subscribe to chainId change
   provider.on("chainChanged", (chainId) => {
     fetchAccountData();
   });

   // Subscribe to networkId change
   provider.on("networkChanged", (networkId) => {
     fetchAccountData();
   });

   await refreshAccountData();
 }

 /**
  * Disconnect wallet button pressed.
  */
 async function onDisconnect() {
 	localStorage.setItem('isWalletConnected', false);

  console.log("Killing the wallet connection", provider);

   // TODO: Which providers have close method?
   if(provider.close) {
     await provider.close();

     // If the cached provider is not cleared,
     // WalletConnect will default to the existing session
     // and does not allow to re-scan the QR code with a new wallet.
     // Depending on your use case you may want or want not his behavir.
     await web3Modal.clearCachedProvider();
     provider = null;
   }

   selectedAccount = null;

   // Set the UI back to the initial state
 	document.querySelector("#btn-disconnect").style.display = "none";
 	document.querySelector("#wa").style.display = "none";
 	document.querySelector("#wa").innerHTML = "";
  document.querySelector("#btn-connect").style.display = "inline";
 }


async function startStake(){
	///document.querySelector("#result").textContent="";

  const web3 = new Web3(provider);
  web3.eth.handleRevert = true;
	//const token  = new web3.eth.Contract(token_abi, token_address);
  //console.log(web3.eth.handleRevert);
  //let amount = BigInt(document.querySelector("#usdamount").value*1e18);
  //let bet = document.querySelector("#bet").value;
	//let bet = document.querySelector('input[name=inlineRadioOptions]:checked').value;
	let amount = BigInt(document.querySelector("#amount").value*1e18);
  //let ref = (document.querySelector("#ref-id").value=='') ? '0x0000000000000000000000000000000000000000' : document.querySelector("#ref-id").value;
  //var weiValue = await web3.utils.toWei(bnbnamount,'ether');
  //console.log(bnbamount);
  const contract  = new web3.eth.Contract(contract_abi, contract_address);
	const token = new web3.eth.Contract(token_abi, token_address);
  /*var getError = function(e){
      var st = e.indexOf('{');
      var end = e.indexOf('}');
      //return JSON.parse(e.substring(st, end+1));
      return JSON.parse(e);
  }

      try {
            tx = await contract.methods.buyWithBNB(amount).estimateGas({from: selectedAccount, value: weiValue});
        }catch(e){
            let error = getError(e.message);
            alert(error.message);
            return false;
     }*/

     let tx = await contract.methods.startStake(amount)
     //console.log('venne');
     .send({from:selectedAccount})
     //.once('sending', function(hash){ console.log(hash); })
     //.once('sent', function(hash){ console.log(hash); })
     .once('transactionHash', function(hash){
       document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+hash+'</a>';
     })
     /*.once('confirmation', function(confirmationNumber, receipt){
      console.log('confirm',confirmationNumber, receipt)
		})*/
     .once('receipt', function(receipt){

     })
     .on('error', function(error, receipt) {
         console.log('Receipt:');
         console.log(receipt);
         console.log('Error:');
         console.log(error);
     })
     .then(function(receipt){
    console.log(receipt);
    })
    .catch(error => {
            console.error(error);
        });
		let currentStaked = await contract.methods.stakers(selectedAccount).call();
		document.querySelector("#currentStaked").textContent = (currentStaked['amount']/1e18).toFixed(2);

		let tbalance = await token.methods.balanceOf(selectedAccount).call();
		document.querySelector("#balance").textContent =  (tbalance/1e18).toFixed(2);

		document.querySelector("#amount").value = '';

		//const token = new web3.eth.Contract(token_abi, token_address);
		//let tbalance = await token.methods.balanceOf(selectedAccount).call();
		//document.querySelector("#balance").textContent =  (tbalance/1e18).toFixed(2);

}

async function request(){
	const web3 = new Web3(provider);
  web3.eth.handleRevert = true;
	const contract  = new web3.eth.Contract(contract_abi, contract_address);

	let tx = await contract.methods.request()
	//console.log('venne');
	.send({from:selectedAccount})
	//.once('sending', function(hash){ console.log(hash); })
	//.once('sent', function(hash){ console.log(hash); })
	.once('transactionHash', function(hash){
		document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+hash+'</a>';
	})
	/*.once('confirmation', function(confirmationNumber, receipt){
	 console.log('confirm',confirmationNumber, receipt)
 })*/
	.once('receipt', function(receipt){
			console.log('receipt', receipt);
	})
	.on('error', function(error, receipt) {
			console.log('Receipt:');
			console.log(receipt);
			console.log('Error:');
			console.log(error);
	})
	.then(function(receipt){
 console.log(receipt);
 })
 .catch(error => {
				 console.error(error);
		 });
}

async function unstake(){
	const web3 = new Web3(provider);
  web3.eth.handleRevert = true;
	const contract  = new web3.eth.Contract(contract_abi, contract_address);

	let tx = await contract.methods.unstake()
	//console.log('venne');
	.send({from:selectedAccount})
	//.once('sending', function(hash){ console.log(hash); })
	//.once('sent', function(hash){ console.log(hash); })
	.once('transactionHash', function(hash){
		document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+hash+'</a>';
	})
	/*.once('confirmation', function(confirmationNumber, receipt){
	 console.log('confirm',confirmationNumber, receipt)
 })*/
	.once('receipt', function(receipt){
			console.log('receipt', receipt);
	})
	.on('error', function(error, receipt) {
			console.log('Receipt:');
			console.log(receipt);
			console.log('Error:');
			console.log(error);
	})
	.then(function(receipt){
 console.log(receipt);
 })
 .catch(error => {
				 console.error(error);
		 });

	let currentStaked = await contract.methods.stakers(selectedAccount).call();
	document.querySelector("#currentStaked").textContent = (currentStaked['amount']/1e18).toFixed(2);
	document.querySelector("#totalStaked").innerHTML = '';
}

async function addNetwork(){
  let isTestnet = false;
  //const web3 = new Web3(provider);
  //const chainId = await web3.eth.getChainId();
  //console.log(chainId);
   let cID= await ethereum.request({ method: 'eth_chainId' });
   //console.log(cid.toString());

  if (isTestnet){
    //console.log('asd');
    if (cID == "0x61") {
        alert("BSC Network has already been added to Metamask.");
        return;
    } else {
      ethereum.request({
      method: 'wallet_addEthereumChain',
      params : [{
          chainId: '0x61',
          chainName: 'Binance Smart Chain Testnet',
          nativeCurrency: {
              name: 'tBNB',
              symbol: 'tBNB',
              decimals: 18
          },
          rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          blockExplorerUrls: ['https://testnet.bscscan.com/']
      }]
      })
      .catch((error) => {
        console.log(error)
      });
    }
  }else{
    if (cID == "0x38") {
        alert("BSC Network has already been added to Metamask.");
        return;
    } else {
    ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
      chainId: '0x38',
      chainName: 'Binance Smart Chain',
      nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18
      },
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com']
      }]
      })
      .catch((error) => {
      console.log(error)
      });
    }
  }
}

async function allowToken(){
  const web3 = new Web3(provider);
  let amount = BigInt('115792089237316195423570985008687907853269984665640564039457584007913129639935');
	//let amount = BigInt("2").pow(new BN("256").sub(new BN("1")));
  console.log(amount);

  try {
     const contract  = new web3.eth.Contract(token_abi, token_address);
     let tx = await contract.methods.approve(
       contract_address,
       amount
     )
     .send({from:selectedAccount
           })
    .on('transactionHash', function(hash){
       document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+hash+'</a>';
     })
     .once('confirmation', function(confirmationNumber, receipt){
            console.log('confirm',confirmationNumber, receipt)
     })
     ;
   } catch (error) {
    console.log(error.message);
  }

	const token = new web3.eth.Contract(token_abi, token_address);
	let allowance = await token.methods.allowance(selectedAccount,contract_address).call();
	//document.querySelector("#allowance").value = allowance/1e18;
	if (allowance>0){
		document.querySelector("#stake").style.display = "inline";
		//document.querySelector("#unstake").style.display = "block";
		//document.querySelector("#request").style.display = "block";
		document.querySelector("#allowToken").style.display = "none";
		//document.querySelector("#buy").hidden=false;
		//document.querySelector("#allowToken").hidden=true;
	}else{
		//document.querySelector("#buy").hidden=true;
		//document.querySelector("#allowToken").hidden=false;
		document.querySelector("#stake").style.display = "none";
		//document.querySelector("#unstake").style.display = "none";
		//document.querySelector("#request").style.display = "none";
		document.querySelector("#allowToken").style.display = "block";
	}
}



async function addToken(){
  try {
  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: '0x67C9Ec39Dc0aeb6231829e5bE40a8d73AE2896Bf', // The address that the token is at.
        symbol: 'FToken', // A ticker symbol or shorthand, up to 5 chars.
        decimals: 18 //, The number of decimals in the token
        //image: tokenImage, // A string url of the token logo
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Your loss!');
  }
} catch (error) {
  console.log(error);
}
}

async function calc(){

	let amount = parseFloat(document.querySelector("#amount").value);
	let current = parseInt(document.querySelector("#currentStaked").textContent);

	document.querySelector("#totalStaked").innerHTML= amount + current;
}

/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
	document.querySelector("#allowToken").addEventListener("click", allowToken);
	document.querySelector("#amount").addEventListener("keyup", calc);
  document.querySelector("#stake").addEventListener("click", startStake);
	document.querySelector("#request").addEventListener("click", request);
	document.querySelector("#unstake").addEventListener("click", unstake);


});
