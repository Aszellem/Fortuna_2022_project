"use strict";

let swap_abi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

let contract_abi = [
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "_busd",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "_usdt",
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
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "combination",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bet",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "gameScore",
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
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "ownerClaim",
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
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "gameType",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "ownerCreateGame",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "activeGame",
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
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "activeGamesPerType",
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
				"internalType": "uint8",
				"name": "gameType",
				"type": "uint8"
			}
		],
		"name": "activeGamesPerTypeList",
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
		"inputs": [],
		"name": "allGames",
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
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allGamesPerType",
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
				"internalType": "uint8",
				"name": "gameType",
				"type": "uint8"
			}
		],
		"name": "allGamesTypeList",
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
		"inputs": [],
		"name": "busd",
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
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "gameType",
				"type": "uint8"
			}
		],
		"name": "createGame",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_game",
				"type": "uint256"
			}
		],
		"name": "creatorClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "expiredGamesPerType",
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
				"internalType": "uint8",
				"name": "gameType",
				"type": "uint8"
			}
		],
		"name": "expiredGamesPerTypeList",
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
		"inputs": [],
		"name": "feeWallet",
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
			}
		],
		"name": "games",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "probas",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastGame",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "gType",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "ownerClaim",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "creationTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gamesLength",
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
				"internalType": "uint8",
				"name": "gameType",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "getIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "i",
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
		"inputs": [
			{
				"internalType": "uint8",
				"name": "gameType",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "getResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "n",
				"type": "uint256"
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
		"name": "playdGame",
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
		"stateMutability": "nonpayable",
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
				"name": "faddress",
				"type": "address"
			}
		],
		"name": "setFeeWalletAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_game",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_comb",
				"type": "uint256"
			}
		],
		"name": "theGameFortuna",
		"outputs": [],
		"stateMutability": "payable",
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
		"name": "tokenBalance",
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
		"name": "usdt",
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
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userAllGames",
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
				"name": "ad",
				"type": "address"
			}
		],
		"name": "userAllGamesList",
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
		"name": "userExpiredGames",
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
				"name": "ad",
				"type": "address"
			}
		],
		"name": "userExpiredGamesList",
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
		"name": "withdrawFToken",
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

let busd_abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

let usdt_abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

let swap_address = "0x10ED43C718714eb63d5aA57B78B54704E256024E".toLowerCase();
let contract_address = "0xA7406B07A8046729af521Ec87f7DdBfdb0b970B7".toLowerCase();
let token_address = "0xA12aF428990EA4801c8394B8B63FAced9F606310".toLowerCase();
let busd_address = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56".toLowerCase();
let usdt_address="0x55d398326f99059ff775485246999027b3197955".toLowerCase();


const Web3Modal = window.Web3Modal.default;

const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal;
let provider;
let selectedAccount;
let minAmount;
let maxAmount;
let results = [];

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
}

async function gamesDisplay(){
	const web3 = new Web3(provider);
  await window.ethereum.enable();

	const contract  = new web3.eth.Contract(contract_abi, contract_address);
	const token = new web3.eth.Contract(token_abi, token_address);

	const ugames = await contract.methods.userAllGamesList(selectedAccount).call();

	const games = await contract.methods.allGames().call();

	console.log(ugames);
	for (let i=0; i<games; i++){
		const game = await contract.methods.games(i).call();
		results.push(game);
		//console.log(game);
		let value = game.amount / 1e18;
		let cost = value / 100 * 15;
		let playdGame = game.probas;
		let winnerAddress = (game.winner != '0x0000000000000000000000000000000000000000') ? true : false;
		//console.log(game+" - " +winnerAddress);
		let gameType = game.gType;
		let owner = game.owner;
		let ownerClaimed = game.ownerClaim;
		let creatorClaim = '';
		let creatorClaimD = '';
		let openGame = '';
		//document.querySelector("#playdGame").textContent = playdGame;
		//document.querySelector("#value").textContent = value;
		//document.querySelector("#cost").textContent = cost;
		if (selectedAccount == owner){


			//document.querySelector("#creatorClaim").style.display = "block";
			creatorClaim = 'style="display:block;"';
			if (ownerClaimed){
				//document.querySelector("#creatorClaim").disabled = true;
				creatorClaimD = 'disabled';
			}else{
				//document.querySelector("#creatorClaim").disabled = false;
			}
		}else{
			//document.querySelector("#creatorClaim").style.display = "none";
			creatorClaim = 'display:none;';
		}
		if (playdGame==3 || ownerClaimed || winnerAddress){
			//document.querySelector("#play").style.display = "none";
			openGame='disabled';
		}else{
			//document.querySelector("#play").style.display = "block";
			//play = 'display:block';
		}

		document.querySelector('#games').innerHTML = `
				<div class="col-lg-3 col-md-6 my-3" id="${i}">
						<div class="bg-lottery p-3">
								<div class="widget-hero-banner">
										<div>
											Ide kellene valami jel hogy hány próbálkozás volt PL X X Pipa, vagy semmi
											<p id="playdGame${i}">${playdGame}</p>
										</div>
								</div>
								<hr>
								<p class="h3">Safe Value</p>
								<p class="h4" id="value_${i}">${value}</p> ${gameType}
								<hr>
								<p class="h3">Cost</p>
								<p class="h4" id="cost_${i}">${cost} ${gameType}</p>
								Openkey: <input type="text" id="openCode${i}" size="1" maxlength="1" ${openGame}>
								<p><button class="btn-one mt-4" type="button" id="play${i}" onclick="playGame(${i})" ${openGame}><i class="fa-solid fa-shield-cat"></i> &nbsp; Open </button></p>
								<button type="button" id="creatorClaim${i}"  onclick="creatorClaim(${i})" style="${creatorClaim}" ${creatorClaimD}>Close & Withdraw</button>
								<p id="gmessage${i}"></p>
						</div>
				</div>
		`+document.querySelector('#games').innerHTML;

		//document.querySelector("#play"+i).addEventListener("click", playGame);
		//document.querySelector("#creatorClaim"+i).addEventListener("click", creatorClaim);
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
	const busd = new web3.eth.Contract(busd_abi, busd_address);
	const usdt = new web3.eth.Contract(usdt_abi, usdt_address);






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



	//gamesDisplay();
	change();

  //document.querySelector("#selected-account").textContent = selectedAccount;

//  document.querySelector("#myref").textContent = `https://teng.hu/CRO/index.php?ref=${selectedAccount}`;

//	let totalBetsDice = await contract.methods.totalBetsDice().call();
//  document.querySelector("#total-bet").textContent = (totalBetsDice/1e18).toFixed(2)+' Token';

	//let totalWonDice = await contract.methods.totalWonDice().call();
  //document.querySelector("#total-wont").textContent = totalWonDice/1e18+' Token';

	//let diceGame = await contract.methods.diceGame().call();
  //document.querySelector("#total-game").textContent = diceGame;

	let allowance = await token.methods.allowance(selectedAccount,contract_address).call();

	if (allowance>0){
		//document.querySelector("#create").hidden=false;

		document.querySelector("#allowToken").hidden = true;
		document.querySelector("#flexRadioDefault0").disabled = false;
	}else{
		//document.querySelector("#create").hidden=true;
		document.querySelector("#allowToken").hidden=false;
		document.querySelector("#flexRadioDefault0").disabled = true;
	}

	let busdAllowance = await busd.methods.allowance(selectedAccount,contract_address).call();
	if (busdAllowance>0){
		//document.querySelector("#create").hidden=false;
		document.querySelector("#busdAllowToken").hidden=true;
		document.querySelector("#flexRadioDefault1").disabled = false;
	}else{
		//document.querySelector("#create").hidden=true;
		document.querySelector("#busdAllowToken").hidden=false;
		document.querySelector("#flexRadioDefault1").disabled = true;
	}

	let usdtAllowance = await usdt.methods.allowance(selectedAccount,contract_address).call();
	if (usdtAllowance>0){
		//document.querySelector("#create").hidden=false;
		document.querySelector("#usdtAllowToken").hidden=true;
		document.querySelector("#flexRadioDefault2").disabled = false;
	}else{
		//document.querySelector("#create").hidden=true;
		document.querySelector("#usdtAllowToken").hidden=false;
		document.querySelector("#flexRadioDefault2").disabled = true;
	}

	setInterval(async function(){

		let bnbB = await web3.eth.getBalance(selectedAccount);
		//console.log(bnbB);
		document.querySelector("#BNB").innerHTML = 'BNB ('+(bnbB/1e18).toFixed(4)+")";

		let tokenB = await token.methods.balanceOf(selectedAccount).call();
		document.querySelector("#Fortuna").innerHTML = 'Fortuna ('+(tokenB/1e18).toFixed(4)+")";

		let busdB = await busd.methods.balanceOf(selectedAccount).call();
		document.querySelector("#BUSD").innerHTML = 'BUSD ('+(busdB/1e18).toFixed(4)+")";

		let usdtB = await usdt.methods.balanceOf(selectedAccount).call();
		document.querySelector("#USDT").innerHTML = 'USDT ('+(usdtB/1e18).toFixed(4)+")";



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

	//console.log(results);
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


async function createGame(){

	if (document.querySelector("#amount").value!=''){
	//document.querySelector("#result").textContent="";

  const web3 = new Web3(provider);
  web3.eth.handleRevert = true;
	//const token  = new web3.eth.Contract(token_abi, token_address);
  //console.log(web3.eth.handleRevert);
  //let amount = BigInt(document.querySelector("#usdamount").value*1e18);
  //let bet = document.querySelector("#bet").value;
	//let bet = document.querySelector('input[name=inlineRadioOptions]:checked').value;
	let gameType = document.querySelector('input[name=flexRadioDefault]:checked').value;
	let weiValue = document.querySelector("#amount").value*1e18;
	let amount = BigInt(weiValue);

  //let ref = (document.querySelector("#ref-id").value=='') ? '0x0000000000000000000000000000000000000000' : document.querySelector("#ref-id").value;
  //var weiValue = await web3.utils.toWei(bnbnamount,'ether');
  weiValue = (gameType==3) ? weiValue : 0;

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

     let tx = await contract.methods.createGame(amount,gameType)
     //console.log('venne');
     .send({from:selectedAccount, value: weiValue})
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
				 //location.reload();
				 document.getElementById('o_own').checked = true;
				 document.getElementById('s_active').checked = true;
			 	 document.getElementById('t_'+gameType).checked = true;
			 	 change();
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
		//let totalBetsDice = await contract.methods.totalBetsDice().call();
		//document.querySelector("#total-bet").textContent = (totalBetsDice/1e18).toFixed(2)+' Token';

		//const token = new web3.eth.Contract(token_abi, token_address);
		//let tbalance = await token.methods.balanceOf(selectedAccount).call();
		//document.querySelector("#balance").textContent =  (tbalance/1e18).toFixed(2);
	}else{
	 document.querySelector("#message").textContent = "Please add amount !";
 }
}

async function playGame(i){
	if (document.querySelector("#openCode"+i).value!=''){
	//document.querySelector("#result").textContent="";

  const web3 = new Web3(provider);
  web3.eth.handleRevert = true;
	//const token  = new web3.eth.Contract(token_abi, token_address);
  //console.log(web3.eth.handleRevert);
  //let amount = BigInt(document.querySelector("#usdamount").value*1e18);
  //let bet = document.querySelector("#bet").value;
	//let bet = document.querySelector('input[name=inlineRadioOptions]:checked').value;

	let openCode = document.querySelector("#openCode"+i).value;
	let weiValue = document.querySelector("#bcost_"+i).value;
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

     let tx = await contract.methods.theGameFortuna(i,openCode)
     //console.log('venne');
		 // érték a gombból
     .send({from:selectedAccount, value: weiValue})
     //.once('sending', function(hash){ console.log(hash); })
     //.once('sent', function(hash){ console.log(hash); })
     .once('transactionHash', function(hash){
       //document.querySelector("#gmessage"+i).innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+hash+'</a>';
			 let smallHash = '0x...'+hash.slice(-4);
       document.querySelector("#gmessage"+i).innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+smallHash+'</a>';
     })
     /*.once('confirmation', function(confirmationNumber, receipt){
      console.log('confirm',confirmationNumber, receipt)
		})*/
     .once('receipt', function(receipt){
         console.log('receipt', receipt);
				 let r = receipt['events']['gameScore']['returnValues']['combination'];
				 let value = receipt['events']['gameScore']['returnValues']['value'];
				 //console.log('asd',receipt['events']['result']['returnValues']);
				 if (r==value){
					 document.querySelector("#gmessage"+i).textContent = "YOU WIN, The prize will be awarded!";
					 winEffect();
				 }else{
					 document.querySelector("#gmessage"+i).textContent = "LOST the win number: "+r;
				 }
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
		//let totalBetsDice = await contract.methods.totalBetsDice().call();
		//document.querySelector("#total-bet").textContent = (totalBetsDice/1e18).toFixed(2)+' Token';

		//const token = new web3.eth.Contract(token_abi, token_address);
		//let tbalance = await token.methods.balanceOf(selectedAccount).call();
		//document.querySelector("#balance").textContent =  (tbalance/1e18).toFixed(2);
		const game = await contract.methods.games(i).call();
		let playdGame = game.probas;
		let winnerAddress = (game.winner != '0x0000000000000000000000000000000000000000') ? true : false;

		let ownerClaimed = game.ownerClaim;
		document.querySelector("#playdGame"+i).textContent = playdGame;
		if (playdGame==3 || ownerClaimed || winnerAddress){
			document.querySelector("#play"+i).disabled = true;
			document.querySelector("#play"+i).textContent = 'Closed';
			document.querySelector("#openCode"+i).disabled = true;
		}else{
			document.querySelector("#play"+i).style.display = "block";
		}
	}else{
	document.querySelector("#gmessage"+i).textContent = "Please add amount !";
 }

}

async function creatorClaim(i){
	//document.querySelector("#result").textContent="";

  const web3 = new Web3(provider);
  web3.eth.handleRevert = true;
	//const token  = new web3.eth.Contract(token_abi, token_address);
  //console.log(web3.eth.handleRevert);
  //let amount = BigInt(document.querySelector("#usdamount").value*1e18);
  //let bet = document.querySelector("#bet").value;
	//let bet = document.querySelector('input[name=inlineRadioOptions]:checked').value;
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

     let tx = await contract.methods.creatorClaim(i)
     //console.log('venne');
     .send({from:selectedAccount})
     //.once('sending', function(hash){ console.log(hash); })
     //.once('sent', function(hash){ console.log(hash); })
     .once('transactionHash', function(hash){
       //document.querySelector("#gmessage"+i).innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+hash+'</a>';
			 let smallHash = '0x...'+hash.slice(-4);
       document.querySelector("#gmessage"+i).innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+smallHash+'</a>';
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
     .then(function(receipt){
    console.log(receipt);
    })
    .catch(error => {
            console.error(error);
        });
		//let totalBetsDice = await contract.methods.totalBetsDice().call();
		//document.querySelector("#total-bet").textContent = (totalBetsDice/1e18).toFixed(2)+' Token';

		//const token = new web3.eth.Contract(token_abi, token_address);
		//let tbalance = await token.methods.balanceOf(selectedAccount).call();
		//document.querySelector("#balance").textContent =  (tbalance/1e18).toFixed(2);
		document.querySelector("#openCode"+i).disabled = true;
		document.querySelector("#play"+i).disabled = true;
		document.querySelector("#creatorClaim"+i).disabled = true;

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
       let smallHash = '0x...'+hash.slice(-4);
document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+smallHash+'</a>';
     })
     .once('confirmation', function(confirmationNumber, receipt){
            console.log('confirm',confirmationNumber, receipt);
						document.querySelector("#create").hidden=false;
     })
     ;
   } catch (error) {
    console.log(error.message);
  }

	const token = new web3.eth.Contract(token_abi, token_address);
	let allowance = await token.methods.allowance(selectedAccount,contract_address).call();
	//document.querySelector("#allowance").value = allowance/1e18;
	if (allowance>0){
		//document.querySelector("#buy").style.display = "block";
		document.querySelector("#allowToken").hidden = true;
		document.querySelector("#flexRadioDefault0").disabled = false;
	}else{
		//document.querySelector("#create").hidden=true;
		document.querySelector("#allowToken").hidden=false;
		document.querySelector("#flexRadioDefault0").disabled = true;
	}
}

async function busdAllowToken(){
  const web3 = new Web3(provider);
  let amount = BigInt('115792089237316195423570985008687907853269984665640564039457584007913129639935');
	//let amount = BigInt("2").pow(new BN("256").sub(new BN("1")));
  console.log(amount);

  try {
     const contract  = new web3.eth.Contract(busd_abi, busd_address);
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
						document.querySelector("#create").hidden=false;
     })
     ;
   } catch (error) {
    console.log(error.message);
  }
	const token = new web3.eth.Contract(busd_abi, busd_address);
	let allowance = await token.methods.allowance(selectedAccount,contract_address).call();
	//document.querySelector("#allowance").value = allowance/1e18;
	if (allowance>0){
		//document.querySelector("#buy").style.display = "block";
		document.querySelector("#busdAllowToken").hidden=true;
		document.querySelector("#flexRadioDefault1").disabled = false;
	}else{
		//document.querySelector("#create").hidden=true;
		document.querySelector("#busdAllowToken").hidden=false;
		document.querySelector("#flexRadioDefault1").disabled = true;
	}
}

	async function usdtAllowToken(){
	  const web3 = new Web3(provider);
	  let amount = BigInt('115792089237316195423570985008687907853269984665640564039457584007913129639935');
		//let amount = BigInt("2").pow(new BN("256").sub(new BN("1")));
	  console.log(amount);

	  try {
	     const contract  = new web3.eth.Contract(usdt_abi, usdt_address);
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
							document.querySelector("#create").hidden=false;
	     })
	     ;
	   } catch (error) {
	    console.log(error.message);
	  }

	const token = new web3.eth.Contract(usdt_abi, usdt_address);
	let allowance = await token.methods.allowance(selectedAccount,contract_address).call();
	//document.querySelector("#allowance").value = allowance/1e18;
	if (allowance>0){
		//document.querySelector("#buy").style.display = "block";
		document.querySelector("#usdtAllowToken").hidden=true;
		document.querySelector("#flexRadioDefault2").disabled = false;
	}else{
		//document.querySelector("#create").hidden=true;
		document.querySelector("#usdtAllowToken").hidden=false;
		document.querySelector("#flexRadioDefault2").disabled = true;
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

function asc(){
	results.sort((a, b) => {
    return b.amount - a.amount;
	});

	//console.log(results);
	document.querySelector('#games').innerHTML='';
	let i=0;
	results.forEach((game) => {
		let value = game.amount / 1e18;
		let cost = value / 100 * 15;
		let playdGame = game.probas;
		let winnerAddress = (game.winner != '0x0000000000000000000000000000000000000000') ? true : false;
		//console.log(game+" - " +winnerAddress);
		let gameType = game.gType;
		let bcost = (gameType == 3) ? Math.round(cost*1e18) : 0;
		let owner = game.owner;
		let ownerClaimed = game.ownerClaim;
		let creatorClaim = '';
		let creatorClaimD = '';
		let openGame = '';
		let buttonText = 'Open';

		switch (gameType) {
	  case 0:
	    gameType = "Fortuna";
	    break;
	  case 1:
	    gameType = "BUSD";
	    break;
	  case 2:
	    gameType = "USDT";
	    break;
	  case 3:
	    gameType = "BNB";
	    break;
	  }
		//document.querySelector("#playdGame").textContent = playdGame;
		//document.querySelector("#value").textContent = value;
		//document.querySelector("#cost").textContent = cost;
		if (selectedAccount == owner){


			//document.querySelector("#creatorClaim").style.display = "block";
			creatorClaim = 'style="display:block;"';
			if (ownerClaimed){
				//document.querySelector("#creatorClaim").disabled = true;
				creatorClaimD = 'disabled';
			}else{
				//document.querySelector("#creatorClaim").disabled = false;
			}
		}else{
			//document.querySelector("#creatorClaim").style.display = "none";
			creatorClaim = 'display:none;';
		}
		if (playdGame==3 || ownerClaimed || winnerAddress){
			//document.querySelector("#play").style.display = "none";
			openGame='disabled';
			buttonText = 'Closed';
		}else{
			//document.querySelector("#play").style.display = "block";
			//play = 'display:block';
		}

		document.querySelector('#games').innerHTML = `
				<div class="col-lg-3 col-md-6 my-3" id="${i}">
						<div class="bg-lottery p-3">
								<div class="widget-hero-banner">
										<div>
											Ide kellene valami jel hogy hány próbálkozás volt PL X X Pipa, vagy semmi
											<p id="playdGame${i}">${playdGame}</p>
										</div>
								</div>
								<hr>
								<p class="h3">Safe Value</p>
								<p class="h4" id="value_${i}">${value}</p> ${gameType}
								<hr>
								<p class="h3">Cost</p>
								<p class="h4" id="cost_${i}">${cost} ${gameType}</p>
								<input type="hidden" id="bcost_${i}" value="${bcost}">
								Openkey: <input type="text" id="openCode${i}" size="1" maxlength="1" ${openGame}>
								<p><button class="btn-one mt-4" type="button" id="play${i}" onclick="playGame(${i})" ${openGame}><i class="fa-solid fa-shield-cat"></i> &nbsp; ${buttonText} </button></p>
								<button type="button" id="creatorClaim${i}"  onclick="creatorClaim(${i})" style="${creatorClaim}" ${creatorClaimD}>Close & Withdraw</button>
								<p id="gmessage${i}"></p>
						</div>
				</div>
		`+document.querySelector('#games').innerHTML;
		i++;
});
}

function desc(){
	results.sort((a, b) => {
    return a.amount - b.amount;
	});

	//console.log(results);
	document.querySelector('#games').innerHTML='';
	let i=0;
	results.forEach((game) => {
		//console.log('asd'+game);
		let value = game.amount / 1e18;
		let cost = value / 100 * 15;
		let playdGame = game.probas;
		let winnerAddress = (game.winner != '0x0000000000000000000000000000000000000000') ? true : false;
		//console.log(game+" - " +winnerAddress);
		let gameType = game.gType;
		let bcost = (gameType == 3) ? Math.round(cost*1e18) : 0;
		let owner = game.owner;
		let ownerClaimed = game.ownerClaim;
		let creatorClaim = '';
		let creatorClaimD = '';
		let openGame = '';
		let buttonText = 'Open';

		switch (gameType) {
	  case 0:
	    gameType = "Fortuna";
	    break;
	  case 1:
	    gameType = "BUSD";
	    break;
	  case 2:
	    gameType = "USDT";
	    break;
	  case 3:
	    gameType = "BNB";
	    break;
	  }
		//document.querySelector("#playdGame").textContent = playdGame;
		//document.querySelector("#value").textContent = value;
		//document.querySelector("#cost").textContent = cost;
		if (selectedAccount == owner){


			//document.querySelector("#creatorClaim").style.display = "block";
			creatorClaim = 'style="display:block;"';
			if (ownerClaimed){
				//document.querySelector("#creatorClaim").disabled = true;
				creatorClaimD = 'disabled';
			}else{
				//document.querySelector("#creatorClaim").disabled = false;
			}
		}else{
			//document.querySelector("#creatorClaim").style.display = "none";
			creatorClaim = 'display:none;';
		}
		if (playdGame==3 || ownerClaimed || winnerAddress){
			//document.querySelector("#play").style.display = "none";
			openGame = 'disabled';
			buttonText = 'Closed';
		}else{
			//document.querySelector("#play").style.display = "block";
			//play = 'display:block';
		}

		document.querySelector('#games').innerHTML = `
				<div class="col-lg-3 col-md-6 my-3" id="${i}">
						<div class="bg-lottery p-3">
								<div class="widget-hero-banner">
										<div>
											Ide kellene valami jel hogy hány próbálkozás volt PL X X Pipa, vagy semmi
											<p id="playdGame${i}">${playdGame}</p>
										</div>
								</div>
								<hr>
								<p class="h3">Safe Value</p>
								<p class="h4" id="value_${i}">${value}</p> ${gameType}
								<hr>
								<p class="h3">Cost</p>
								<p class="h4" id="cost_${i}">${cost} ${gameType}</p>
								<input type="hidden" id="bcost_${i}" value="${bcost}">
								Openkey: <input type="text" id="openCode${i}" size="1" maxlength="1" ${openGame}>
								<p><button class="btn-one mt-4" type="button" id="play${i}" onclick="playGame(${i})" ${openGame}><i class="fa-solid fa-shield-cat"></i> &nbsp; ${buttonText} </button></p>
								<button type="button" id="creatorClaim${i}"  onclick="creatorClaim(${i})" style="${creatorClaim}" ${creatorClaimD}>Close & Withdraw</button>
								<p id="gmessage${i}"></p>
						</div>
				</div>
		`+document.querySelector('#games').innerHTML;
		i++;
});
}

async function change(){
	//console.log(this.value);

	const web3 = new Web3(provider);
	await window.ethereum.enable();

	const contract  = new web3.eth.Contract(contract_abi, contract_address);
	const token = new web3.eth.Contract(token_abi, token_address);

	let radioOwner = document.querySelector('input[name="owner"]:checked').value;
	let radioState = document.querySelector('input[name="state"]:checked').value;
	let radioType = document.querySelector('input[name="type"]:checked').value;
	//let radioShort = document.querySelector('input[name="short"]:checked').value;

	console.log(radioOwner, radioState, radioType);



	let gameList;

	if (radioOwner=='all'){
		if (radioState=='active'){
			gameList = await contract.methods.activeGamesPerTypeList(radioType).call();
		}
		if (radioState=='expired'){
			gameList = await contract.methods.expiredGamesPerTypeList(radioType).call();
		}
		if (radioState=='all'){
			gameList = await contract.methods.allGamesTypeList(radioType).call();
		}
	}else{
		if (radioState=='all' || radioState=='active'){
			gameList = await contract.methods.userAllGamesList(selectedAccount).call();
		}
		if (radioState=='expired'){
			gameList = await contract.methods.userExpiredGamesList(selectedAccount).call();
		}
	}
 console.log('GameList: '+gameList);
 results=[];
	for  (let j=0; j<gameList.length; j++){
		const game = await contract.methods.games(gameList[j]).call();
		game.number=gameList[j];
    console.log(game);
		if (radioOwner == 'all' || (radioOwner=='own' && (radioState=='all' || radioState=='expired' || (radioState=='active' && game.probas!=3 && !game.ownerClaim && game.winner == '0x0000000000000000000000000000000000000000'))) && radioType == game.gType){
			results.push(game);
		}
	}


	document.querySelector('#games').innerHTML='';
	//let i=0;
	results.forEach((game) => {
		//console.log('asd'+game);
		let i = game.number;
		let value = game.amount / 1e18;
		let cost = value / 100 * 15;
		let playdGame = game.probas;
		let winnerAddress = (game.winner != '0x0000000000000000000000000000000000000000') ? true : false;
		//console.log(game+" - " +winnerAddress);
		let gameType = parseInt(game.gType);
		let bcost = (gameType == 3) ? Math.round(cost*1e18) : 0;
		let owner = game.owner;
		let ownerClaimed = game.ownerClaim;
		let creatorClaim = '';
		let creatorClaimD = '';
		let openGame = '';
		let buttonText = 'Open';

		//console.log(gameType);
		//document.querySelector("#playdGame").textContent = playdGame;
		//document.querySelector("#value").textContent = value;
		//document.querySelector("#cost").textContent = cost;

		switch (gameType) {
	  case 0:
	    gameType = "Fortuna";
	    break;
	  case 1:
	    gameType = "BUSD";
	    break;
	  case 2:
	    gameType = "USDT";
	    break;
	  case 3:
	    gameType = "BNB";
	    break;
	  }
		//console.log(gameType);

		if (selectedAccount == owner){
			//document.querySelector("#creatorClaim").style.display = "block";
			creatorClaim = 'style="display:block;"';
			if (ownerClaimed){
				//document.querySelector("#creatorClaim").disabled = true;
				creatorClaimD = 'disabled';
			}else{
				//document.querySelector("#creatorClaim").disabled = false;
			}
		}else{
			//document.querySelector("#creatorClaim").style.display = "none";
			creatorClaim = 'display:none;';
		}
		if (playdGame==3 || ownerClaimed || winnerAddress){
			//document.querySelector("#play").style.display = "none";
			openGame='disabled';
			buttonText = 'Closed';
		}else{
			//document.querySelector("#play").style.display = "block";
			//play = 'display:block';
		}
    let data = `
				<div class="col-lg-3 col-md-6 my-3" id="${i}">
						<div class="bg-lottery p-3">
								<div class="widget-hero-banner">
										<div>
											Ide kellene valami jel hogy hány próbálkozás volt PL X X Pipa, vagy semmi
											<p id="playdGame${i}">${playdGame}</p>
										</div>
								</div>
								<hr>
								<p class="h3">Safe Value</p>
								<p class="h4" id="value_${i}">${value}</p>${gameType}
								<hr>
								<p class="h3">Cost</p>
								<p class="h4" id="cost_${i}">${cost} ${gameType}</p>
								<input type="hidden" id="bcost_${i}" value="${bcost}">
								Openkey: <input type="text" id="openCode${i}" size="1" maxlength="1" ${openGame}>
								<p><button class="btn-one mt-4" type="button" id="play${i}" onclick="playGame(${i})" ${openGame}><i class="fa-solid fa-shield-cat"></i> &nbsp; ${buttonText} </button></p>
								<button type="button" id="creatorClaim${i}"  onclick="creatorClaim(${i})" style="${creatorClaim}" ${creatorClaimD}>Close & Withdraw</button>
								<p id="gmessage${i}"></p>
						</div>
				</div>
		`;
		if (radioOwner == 'all' || (radioOwner == 'own' && selectedAccount == owner)){

			if (radioState == 'all' || (radioState == 'active' && (playdGame!=3 && !ownerClaimed && !winnerAddress)) || (radioState == 'expired' && (playdGame==3 || ownerClaimed || winnerAddress) )){
				document.querySelector('#games').innerHTML = data + document.querySelector('#games').innerHTML;
				//i++;
			}
		}
});
	/*if (radioShort=='desc'){
		desc();
	}else{
		asc();
	}*/
	//console.log(this.checked);
}
/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
	//document.querySelector("#head").addEventListener("click", head);
	//document.querySelector("#tail").addEventListener("click", tail);
	//document.querySelector("#max").addEventListener("click", max);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
	document.querySelector("#allowToken").addEventListener("click", allowToken);
	document.querySelector("#busdAllowToken").addEventListener("click", busdAllowToken);
	document.querySelector("#usdtAllowToken").addEventListener("click", usdtAllowToken);
	document.querySelector("#create").addEventListener("click", createGame);
	document.querySelector("#asc").addEventListener("click", asc);
	document.querySelector("#desc").addEventListener("click", desc);

	//document.querySelector("input[name='owner']").addEventListener("change", change);
	//document.querySelector("input[name='state']").addEventListener("change", change);

	document.querySelectorAll("input[name='owner']").forEach((input) => {
        input.addEventListener('change', change);
  });
	document.querySelectorAll("input[name='state']").forEach((input) => {
        input.addEventListener('change', change);
  });
	document.querySelectorAll("input[name='type']").forEach((input) => {
        input.addEventListener('change', change);
  });
	document.querySelectorAll("input[name='short']").forEach((input) => {
        input.addEventListener('change', change);
  });
	//document.getElementsByName("your").addEventListener("click", change);
	//document.querySelector("#play").addEventListener("click", playGame);
	//document.querySelector("#creatorClaim").addEventListener("click", creatorClaim);
	//document.querySelector("#allowSwap").addEventListener("click", allowSwap);
	//document.querySelector("#amount").addEventListener("keyup", check);
  //document.querySelector("#random").addEventListener("click", random);
	//document.querySelector("#sAmount").addEventListener("keyup", calcS);
	//document.querySelector("#swap").addEventListener("click", swap);
	//document.querySelector("#myt").addEventListener("click", myt);
  //document.querySelector("#btn-addNetwork").addEventListener("click", addNetwork);
  //document.querySelector("#btn-addToken").addEventListener("click", addToken);
});
