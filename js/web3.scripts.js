"use strict";

let contract_abi = [{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountInBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"datetime","type":"uint256"}],"name":"LogBuyWithBNB","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"neifAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"datetime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"version","type":"uint256"}],"name":"LogClaimBuyer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"neifAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"datetime","type":"uint256"}],"name":"LogClaimReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"LogEnableClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"LogEnablePreSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"FTOKEN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceOfToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referralAddress","type":"address"}],"name":"buyWithF","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"buyerAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimFromReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDepositTargetWalletAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeeWalletAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenAddress","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPreSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"daddress","type":"address"}],"name":"setDepositTargetWalletAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"state","type":"bool"}],"name":"setEnableClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"state","type":"bool"}],"name":"setEnablePreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"faddress","type":"address"}],"name":"setFeeWalletAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"soldAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"withdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawToOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawnTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

let contract_address = "0x9d03f3f421c20ee89f3ae148b4b0c7269c6bb524".toLowerCase();

const Web3Modal = window.Web3Modal.default;

const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal;
let provider;
let selectedAccount;

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
        //rpc: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        rpc: "https://rinkeby.infura.io/v3/",
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
}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  //await window.ethereum.enable();

    console.log("Web3 instance is", web3);

  const contract  = new web3.eth.Contract(contract_abi, contract_address);

  let isPreSale = await contract.methods.isPreSale().call();
  //console.log('Presale is enabled: '+isPreSale);
//  document.querySelector("#presale-status").textContent = isPreSale;

  let isClaim = await contract.methods.isClaim().call();
//  document.querySelector("#claim-status").textContent = isClaim;

  if (!isClaim) {
    document.querySelector("#claim").disabled = true;
    document.querySelector("#referral-claim").disabled = true;
  } else {
    document.querySelector("#claim").disabled = false;
    document.querySelector("#referral-claim").disabled = false;
  }





  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  //const chainData = evmChains.getChain(chainId);
  //document.querySelector("#network-name").textContent = chainData.name;
  //document.querySelector("#network-id").textContent = chainId;

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];

  //let boughtAmount = await contract.methods.amountOfBuyer().call();
  let boughtAmount = await contract.methods.buyerAmount(selectedAccount).call();
  document.querySelector("#bought-amount").textContent = boughtAmount/1e18+' Token';

  let soldAmount = await contract.methods.soldAmount().call();
  document.querySelector("#sold-amount").textContent = soldAmount/1e18+' Token';

  let referralAmount = await contract.methods.referralAmount(selectedAccount).call();
  document.querySelector("#referral-amount").textContent = (referralAmount/1e18).toFixed(2)+' Token';

  //document.querySelector("#selected-account").textContent = selectedAccount;

  document.querySelector("#myref").textContent = `https://teng.hu/CRO/index.php?ref=${selectedAccount}`;

  // Get a handl
  //const template = document.querySelector("#template-balance");
  //const accountContainer = document.querySelector("#accounts");

   document.querySelector("#myref").textContent = `https://teng.hu/CRO/index.php?ref=${selectedAccount}`;

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
    document.querySelector("#selected-balance").textContent=humanFriendlyBalance+' BNB';
    //accountContainer.appendChild(clone);
  });

  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers);

  // Display fully loaded UI for wallet data
//  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#c").style.display = "none";
  document.querySelector("#d").style.display = "block";
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
  document.querySelector("#c").style.display = "none";
  document.querySelector("#d").style.display = "block";
//  document.querySelector("#prepare").style.display = "block";

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
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
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
  //document.querySelector("#prepare").style.display = "block";
  document.querySelector("#d").style.display = "none";
  document.querySelector("#c").style.display = "block";

  document.querySelector("#bought-amount").textContent = '';
  document.querySelector("#referral-amount").textContent = '';
  document.querySelector("#selected-balance").textContent = '';

}


async function buy(){
  const web3 = new Web3(provider);
  web3.eth.handleRevert = true;
  //console.log(web3.eth.handleRevert);
  //let amount = BigInt(document.querySelector("#usdamount").value*1e18);
  let bnbnamount = document.querySelector("#bnbamount").value;
  let ref = (document.querySelector("#ref-id").value=='') ? '0x0000000000000000000000000000000000000000' : document.querySelector("#ref-id").value;
  var weiValue = await web3.utils.toWei(bnbnamount,'ether');
  console.log(bnbamount);
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

     let tx = await contract.methods.buyWithF(ref)
     //console.log('venne');
     .send({from:selectedAccount, value: weiValue})
     .once('sending', function(hash){ console.log(hash); })
     .once('sent', function(hash){ console.log(hash); })
     .once('transactionHash', function(hash){
       //document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+hash+'</a>';
       document.querySelector("#message").innerHTML='<a href="https://rinkeby.etherscan.io/tx/'+hash+'">'+hash+'</a>';

     })
     .once('confirmation', function(confirmationNumber, receipt){
      console.log('confirm',confirmationNumber, receipt)
     })
     .on('receipt', function(receipt){
         console.log('receipt', receipt)
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
        })
     ;

}
async function claim(){
  const web3 = new Web3(provider);
  web3.eth.handleRevert = true;
  console.log(web3.eth.handleRevert);

  try {
     const contract  = new web3.eth.Contract(contract_abi, contract_address);
     let tx = await contract.methods.claim()
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
}

async function calc(){
  let amount = document.querySelector("#bnbamount").value*160000;
  document.querySelector("#tokenamount").value=`${amount}`;
  //console.log(bnbnamount);
}

async function referralClaim(){
  const web3 = new Web3(provider);

  try {
     const contract  = new web3.eth.Contract(contract_abi, contract_address);
     let tx = await contract.methods.claimFromReferral()
     .send({
       from:selectedAccount
     })
     .on('transactionHash', function(hash){
       document.querySelector("#message").innerHTML='<a href="https://testnet.bscscan.com/tx/'+hash+'">'+hash+'</a>';
     })
     ;
   } catch (error) {
    console.log(error.message);
    //revertReason => console.log({ revertReason })
  }
}

async function addNetwork(){
  let isTestnet = true;
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

async function addToken(){
  try {
  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: '0x7Ed9097ACd5796429766c4C1fDaDA5c1e0644E75', // The address that the token is at.
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


let myref = document.querySelector("#myref");

myref.onclick = function() {
  document.execCommand("copy");
}

myref.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", myref.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  document.querySelector("#bnbamount").addEventListener("keyup", calc);
  document.querySelector("#buy").addEventListener("click", buy);
  document.querySelector("#claim").addEventListener("click", claim);
  document.querySelector("#referral-claim").addEventListener("click", referralClaim);
  //document.querySelector("#btn-addNetwork").addEventListener("click", addNetwork);
  document.querySelector("#btn-addToken").addEventListener("click", addToken);
});
