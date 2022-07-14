"use strict";

let swap_abi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

let contract_abi = [
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "_token",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "game",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			},
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
		"name": "ticketBuyEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "game",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "winnerNumberEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "game",
				"type": "uint256"
			},
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
		"name": "winnerTokenClaimEvent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "arrayRemover",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			}
		],
		"name": "buyTicket",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "game",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "gameNumberTickets",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "gameWinnerNumber",
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
		"name": "getDif",
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
		"name": "getGl",
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
		"name": "getTokenPrize",
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
		"name": "lottery",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "playerTickets",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "playerTips",
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
		"name": "playersView",
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
		"name": "randomNumber",
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
		"name": "receivableTime",
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
				"internalType": "uint256",
				"name": "g",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ad",
				"type": "address"
			}
		],
		"name": "returnTips",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setTticketPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "soldTicket",
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
		"name": "ticketPrice",
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
		"name": "treasury",
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
				"name": "newA",
				"type": "address"
			}
		],
		"name": "treasuryAddressModify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winAmount",
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
		"name": "winnerNumber",
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
		"name": "winnerTokenClaim",
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

let swap_address = "0x10ED43C718714eb63d5aA57B78B54704E256024E".toLowerCase();
let contract_address = "0x97D140Be6262DCfEFb476a99b67608495C60f659".toLowerCase();
let token_address = "0xA12aF428990EA4801c8394B8B63FAced9F606310".toLowerCase();
let bnb_address="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c".toLowerCase();

const Web3Modal = window.Web3Modal.default;

const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal;
let provider;
let selectedAccount;
let minAmount;
let maxAmount;
let game;
let interval;

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
				rpc: {//97: "https://data-seed-prebsc-1-s1.binance.org:8545/"
						56 : "https://bsc-dataseed.binance.org/",
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
	//console.log(web3.isConnected());
	//console.log(window.web3.currentProvider.isMetaMask);
	//console.log(window.web3.currentProvider);
	//console.log("cp"+window.ethereum);
}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

	//console.log(localStorage.getItem('isWalletConnected'));

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


  //document.querySelector("#selected-account").textContent = selectedAccount;

  //document.querySelector("#myref").textContent = `https://teng.hu/CRO/index.php?ref=${selectedAccount}`;


//	let totalBetsHead= await contract.methods.totalBetsHead().call();
//	document.querySelector("#total-bet").textContent = totalBetsHead/1e18+' Token';

	//let totalWonHead = await contract.methods.totalWonHead().call();
	//document.querySelector("#total-wont").textContent = totalWonHead/1e18+' Token';

	//let headGame = await contract.methods.headGame().call();
	//document.querySelector("#total-game").textContent = headGame;

//	minAmount = await contract.methods.minAmount().call();
//	document.querySelector("#min-amount").textContent = minAmount/1e18;

//	maxAmount = await contract.methods.maxAmount().call();
//	document.querySelector("#max-amount").textContent = maxAmount/1e18;

	//let price = await contract.methods.ticketPrice().call();
  //document.querySelector("#price").textContent = price/1e18+' Token';

	let getTokenPrize = await contract.methods.getTokenPrize().call();
  document.querySelector("#tPrize").textContent = (getTokenPrize/1e18).toFixed(2);

	//let getBNBPrize = await contract.methods.getBNBPrize().call();
  //document.querySelector("#bPrize").textContent = getBNBPrize/1e18+' BNB';



	let allowance = await token.methods.allowance(selectedAccount,contract_address).call();
	//document.querySelector("#allowance").value = allowance/1e18;
	if (allowance>0){
		document.querySelector("#buy").style.display = "block";
		document.querySelector("#allowToken").style.display = "none";
		//document.querySelector("#buy").hidden=false;
		//document.querySelector("#allowToken").hidden=true;
	}else{
		//document.querySelector("#buy").hidden=true;
		//document.querySelector("#allowToken").hidden=false;
		document.querySelector("#buy").style.display = "none";
		document.querySelector("#allowToken").style.display = "block";
	}

	let allowanceS = await token.methods.allowance(selectedAccount,swap_address).call();

	if (allowanceS>0){
		document.querySelector("#swap").hidden=false;
		document.querySelector("#allowSwap").hidden=true;
	}else{
		document.querySelector("#swap").hidden=true;
		document.querySelector("#allowSwap").hidden=false;
	}

	setInterval(async function(){

		let balance = await token.methods.balanceOf(selectedAccount).call();
		document.querySelector("#balance").innerHTML = balance/1e18;

		game = await contract.methods.game().call();
		let winnerNumber = await contract.methods.winnerNumber().call();
		let receivableTime = await contract.methods.receivableTime().call();

		let now = Date.now();
		receivableTime = receivableTime*1000;
		//console.log(receivableTime+" - "+now);
		if (now<receivableTime){
			//playerTickets = await contract.methods.playerTickets(game-1,selectedAccount,winnerNumber).call();
			//let yourTicket = await contract.methods.returnTips(game-1,selectedAccount).call();
			let playerTickets = await contract.methods.playerTickets(game-1,selectedAccount,winnerNumber).call();
			let yourTicket = await contract.methods.returnTips(game-1,selectedAccount).call();
			document.querySelector("#your-tickets").textContent = yourTicket;

			if (playerTickets>0){
				document.querySelector("#tClaim").style.display = "block";
			}else{
				document.querySelector("#tClaim").style.display = "none";
			}
			document.querySelector("#winnerNumber").innerHTML = "Winner number: "+winnerNumber;

		}else{
			let yourTicket = await contract.methods.returnTips(game,selectedAccount).call();
			document.querySelector("#your-tickets").textContent = yourTicket;

			document.querySelector("#winnerNumber").innerHTML='';
			document.querySelector("#tClaim").style.display = "none";
		}
		clearInterval(interval);
		interval = setInterval(function() {countdown(receivableTime)},1000);
	},5000);





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
    //document.querySelector("#selected-balance").textContent=humanFriendlyBalance+' BNB';
    //accountContainer.appendChild(clone);
  });

  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers);

  // Display fully loaded UI for wallet data
	document.querySelector("#btn-connect").style.display = "none";
	//document.querySelector("#allowToken").style.display = "block";
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

async function buy(){
		if (document.querySelector("#number").value!=''){
	//document.querySelector("#result").textContent="";

  const web3 = new Web3(provider);
  web3.eth.handleRevert = true;
  let number = document.querySelector("#number").value;
  //console.log(web3.eth.handleRevert);
  //let amount = BigInt(document.querySelector("#usdamount").value*1e18);
  //let bet = document.querySelector("#bet").value;
	//let amount = BigInt(document.querySelector("#amount").value*1e18);
  //let ref = (document.querySelector("#ref-id").value=='') ? '0x0000000000000000000000000000000000000000' : document.querySelector("#ref-id").value;
  //var weiValue = await web3.utils.toWei(bnbnamount,'ether');
  //console.log(bnbamount);
  const contract  = new web3.eth.Contract(contract_abi, contract_address);
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

     let tx = await contract.methods.buyTicket(number)
     //console.log('venne');
     .send({from:selectedAccount})
     //.once('sending', function(hash){ console.log(hash); })
     //.once('sent', function(hash){ console.log(hash); })
     .once('transactionHash', function(hash){
       let smallHash = '0x...'+hash.slice(-4);
document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+smallHash+'</a>';
     })
     /*.once('confirmation', function(confirmationNumber, receipt){
      console.log('confirm',confirmationNumber, receipt)
		})*/
     .once('receipt', function(receipt){
         console.log('receipt', receipt);
				 /*let r = receipt['events']['resultDice']['returnValues']['r'];
				 let user = receipt['events']['resultDice']['returnValues']['user'];
				 let value = receipt['events']['resultDice']['returnValues']['value'];
				 let bet = receipt['events']['resultDice']['returnValues']['bet'];
				 let winAmount = receipt['events']['resultDice']['returnValues']['winAmount']/1e18;
				 //console.log('asd',receipt['events']['result']['returnValues']);
				 if (r==value){
					 document.querySelector("#result").textContent="YOU WIN "+winAmount+" Token";
				 }else{
					 document.querySelector("#result").textContent = "LOST the win number: "+r;
				 }*/
     })
     .on('error', function(error, receipt) {
         console.log('Receipt:');
         console.log(receipt);
         console.log('Error:');
         console.log(error);
     })
     /*.then(function(receipt){
    console.log('r2t:'+receipt);
	})*/
    .catch(error => {
            console.error(error);
        })
     ;
     let yourTicket = await contract.methods.returnTips(game,selectedAccount).call();
   	 document.querySelector("#your-tickets").textContent = yourTicket;
	 }else{
		document.querySelector("#message").textContent = "Please add amount !";
	 }
}


async function tClaim(){
  const web3 = new Web3(provider);

  try {
     const contract  = new web3.eth.Contract(contract_abi, contract_address);
     let tx = await contract.methods.winnerTokenClaim()
     .send({
       from:selectedAccount
     })
     .on('transactionHash', function(hash){
       let smallHash = '0x...'+hash.slice(-4);
document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+smallHash+'</a>';
     })
     ;
   } catch (error) {
    console.log(error.message);
    //revertReason => console.log({ revertReason })
  }
}

/*async function bClaim(){
  const web3 = new Web3(provider);

  try {
     const contract  = new web3.eth.Contract(contract_abi, contract_address);
     let tx = await contract.methods.winnerBNBClaim()
     .send({
       from:selectedAccount
     })
     .on('transactionHash', function(hash){
       document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+hash+'</a>';
     })
     ;
   } catch (error) {
    console.log(error.message);
    //revertReason => console.log({ revertReason })
  }
}*/

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
  //console.log(amount);

  try {
     const contract  = new web3.eth.Contract(token_abi, token_address);
     let tx = await contract.methods.approve(
       contract_address,
       amount
     )
     .send({from:selectedAccount
           })
    .on('transactionHash', function(hash){
       let smallHash = '0x...'+hash.slice(-4);
document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+smallHash+'</a>';
     })
     .once('confirmation', function(confirmationNumber, receipt){
            console.log('confirm',confirmationNumber, receipt);
     })
     ;
   } catch (error) {
    console.log(error.message);
  }

	const token = new web3.eth.Contract(token_abi, token_address);
	let allowance = await token.methods.allowance(selectedAccount,contract_address).call();
	//document.querySelector("#allowance").value = allowance/1e18;
	if (allowance>0){
		document.querySelector("#buy").style.display = "block";
		document.querySelector("#allowToken").style.display = "none";
		//document.querySelector("#buy").hidden=false;
		//document.querySelector("#allowToken").hidden=true;
	}else{
		//document.querySelector("#buy").hidden=true;
		//document.querySelector("#allowToken").hidden=false;
		document.querySelector("#buy").style.display = "none";
		document.querySelector("#allowToken").style.display = "block";
	}
}

async function allowSwap(){
  const web3 = new Web3(provider);
  let amount = BigInt('115792089237316195423570985008687907853269984665640564039457584007913129639935');
	//let amount = BigInt("2").pow(new BN("256").sub(new BN("1")));
  console.log(amount);

  try {
     const token  = new web3.eth.Contract(token_abi, token_address);
     let tx = await token.methods.approve(
       contract_address,
       amount
     )
     .send({from:selectedAccount
           })
    .on('transactionHash', function(hash){
       let smallHash = '0x...'+hash.slice(-4);
document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+smallHash+'</a>';
     })
     .once('confirmation', function(confirmationNumber, receipt){
            console.log('confirm',confirmationNumber, receipt)
     })
     ;
   } catch (error) {
    console.log(error.message);
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

async function swap(){
	//document.querySelector("#result").textContent="";

  const web3 = new Web3(provider);
  web3.eth.handleRevert = true;
  //console.log(web3.eth.handleRevert);
  //let amount = BigInt(document.querySelector("#usdamount").value*1e18);
  //let bet = document.querySelector("#bet").value;
	//let amount = BigInt(document.querySelector("#amount").value*1e18);
  //let ref = (document.querySelector("#ref-id").value=='') ? '0x0000000000000000000000000000000000000000' : document.querySelector("#ref-id").value;
  //var weiValue = await web3.utils.toWei(bnbnamount,'ether');
  //console.log(bnbamount);
  const contract  = new web3.eth.Contract(swap_abi, swap_address);
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



		 let path=[bnb_address,token_address];
		 let time=Date.now()+1200;
		 let amount = document.querySelector("#sAmount").value;
		 var weiValue = await web3.utils.toWei(amount,'ether');

     let tx = await contract.methods.swapExactETHForTokens(0,path, selectedAccount, time)
     //console.log('venne');
     .send({from:selectedAccount, value: weiValue})
     //.once('sending', function(hash){ console.log(hash); })
     //.once('sent', function(hash){ console.log(hash); })
     .once('transactionHash', function(hash){
       let smallHash = '0x...'+hash.slice(-4);
document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+smallHash+'</a>';
     })
     .once('confirmation', function(confirmationNumber, receipt){
      console.log('confirm',confirmationNumber, receipt)
     })
     .once('receipt', function(receipt){
         console.log('receipt', receipt);
				 /*let r = receipt['events']['resultDice']['returnValues']['r'];
				 let user = receipt['events']['resultDice']['returnValues']['user'];
				 let value = receipt['events']['resultDice']['returnValues']['value'];
				 let bet = receipt['events']['resultDice']['returnValues']['bet'];
				 let winAmount = receipt['events']['resultDice']['returnValues']['winAmount']/1e18;
				 //console.log('asd',receipt['events']['result']['returnValues']);
				 if (r==value){
					 document.querySelector("#result").textContent="YOU WIN "+winAmount+" Token";
				 }else{
					 document.querySelector("#result").textContent = "LOST the win number: "+r;
				 }*/
     })
     .on('error', function(error, receipt) {
         console.log('Receipt:');
         console.log(receipt);
         console.log('Error:');
         console.log(error);
     })
     .then(function(receipt){
    console.log('r2t:'+receipt);
    })
    .catch(error => {
            console.error(error);
        })
     ;

}

async function calcS(){
	const web3 = new Web3(provider);
	const contract  = new web3.eth.Contract(swap_abi, swap_address);
	let path=[bnb_address,token_address];
  let amount = BigInt(document.querySelector("#sAmount").value*1e18);
	console.log(amount);

	let tokenAmount = await contract.methods.getAmountsOut(amount,path).call();
	console.log(tokenAmount);
	let value  = tokenAmount[1]/1e18;
  document.querySelector("#estimedamount").innerHTML = value.toFixed(2);

}
/*
const myref = document.querySelector("#myref");

myref.onclick = function() {
  document.execCommand("copy");
}

myref.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", myref.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});*/


/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
	//document.querySelector("#head").addEventListener("click", head);
	//document.querySelector("#tail").addEventListener("click", tail);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
	document.querySelector("#allowToken").addEventListener("click", allowToken);
	document.querySelector("#allowSwap").addEventListener("click", allowSwap);
	//document.querySelector("#amount").addEventListener("keyup", check);
  document.querySelector("#buy").addEventListener("click", buy);
	document.querySelector("#tClaim").addEventListener("click", tClaim);
	document.querySelector("#sAmount").addEventListener("keyup", calcS);
	document.querySelector("#swap").addEventListener("click", swap);
	//document.querySelector("#bClaim").addEventListener("click", bClaim);
	//document.querySelector("#myt").addEventListener("click", myt);
  //document.querySelector("#btn-addNetwork").addEventListener("click", addNetwork);
  //document.querySelector("#btn-addToken").addEventListener("click", addToken);
});

let first=true;
function leaderboard(){
	let rArray = [];
	$.post( {
			 url: "https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=19000000&toBlock=99999999&address=0x97d140be6262dcfefb476a99b67608495c60f659&topic0=0x7896333699a71bd020a1ec1c2dee656c152b70c1372a96be34d55fb69467f962&apikey=YourApiKeyToken",
			 dataType: "json",
			 data: {},
			 success: function( data ) {
						 if (data['status']==1){
							 console.log(data);
							 rArray = data['result'];
						 }
						 let row;
						 let address;

						 let tablerow;
						 let limit = 2;
						 let rowNumber = 0;
						 let previous = '';
						 let winNumber = 0;
						 let blockNumber = 0;
						 rArray.reverse().forEach(element => {
							 if (rowNumber<limit){
							 row = element.data;
							 //console.log(row);

							 // type user value combination bet time

							 winNumber = parseInt(row.substr(66,64),16);
							 //tip = parseInt(row.substr(39,64),16);
							 blockNumber = parseInt(element.blockNumber,16);

							 //amount = parseInt(row.substr(193, 63),16)/1e18;
							 //bet = parseInt(row.substr(193, 63),16)/1e18;

							 /*console.log(`
								TX Hash:     0x...${element.transactionHash.substr(62)}
								Winnumber:   ${winNumber}
								BlockNumber: ${blockNumber}

							 `);*/

							 //if (gtype == 3){

							 tablerow = `<tr id="${element.transactionHash}" class='click-row' target="_blank">
								<td>0x...${element.transactionHash.substr(62)}</td>
								<td>${winNumber}</td>
								<td>${blockNumber}</td>
							 </tr>`;



							 if (typeof $('#'+element.transactionHash).val() !== "string" && first == true) {
								 $('#leaderboard').append(tablerow);
							 }

							 if (typeof $('#'+element.transactionHash).val() !== "string" && first == false){
								 console.log(previous + "  -  " + typeof $('#'+element.transactionHash).val());

								 if (previous != '') {
									 $('#leaderboard').append(tablerow);
									 $('#'+previous).after(tablerow);
									 previous = element.transactionHash;
									 console.log('2 ' + previous);
								 }

								 if (previous == '') {
									 $('#leaderboard').prepend(tablerow);
									 previous = element.transactionHash;
									 console.log('1');
								 }
							 }

							 if (typeof $('#'+element.transactionHash).val() == "string" && first == false){
								 previous = element.transactionHash;
							 }

							 if ($('#leaderboard >tbody >tr').length > limit){
								 $('#leaderboard tr:last').remove();
							 }

							 //$('#leaderboard >tbody >tr:first').attr('id')

								 rowNumber++;
							 //}
							 }
						 });
						 first = false;
						 previous = '';

						 $(".click-row").click(function() {
               console.log($(this).attr('id'));
               let url="https://bscscan.com/tx/"+$(this).attr('id');
                 window.open(url);
             });
			 }
		} );

	}
	//leaderboard();
	setInterval(leaderboard, 13000);
