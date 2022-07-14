"use strict";

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
let web3Modal;
let provider;
let selectedAccount;
let row = 0;

let web3;
//let contract;

//let decimal = 18;

const contract_abi = [
  {"inputs": [],
      "name": "name",
      "outputs": [
      {
      "internalType": "string",
      "name": "",
      "type": "string"
      }
      ],
      "stateMutability": "view",
      "type": "function"},
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
{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}

    ];

function init() {

  console.log("Initializing example");

  if(location.protocol !== 'https:') {
    /*const alert = document.querySelector("#alert-error-https");
    alert.style.display = "block";
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    return;*/
    alert("System not work, only HTTPS!");
  }

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {56: "https://bsc-dataseed.binance.org"
      },network: "binance"
      }
    }//,
    /*binancechainwallet: {
    package: true
  }*/
  };

  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions,
    disableInjectedProvider: false
  });
  //console.log("Web3Modal instance is", web3Modal);
}

async function fetchAccountData() {

  web3 = new Web3(provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  //const chainData = evmChains.getChain(chainId);
  //document.querySelector("#network-name").textContent = chainData.name;
  //document.querySelector("#network-id").textContent = chainId;
  console.log(chainId);

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  console.log( accounts);
  selectedAccount = accounts[0];

  document.querySelector("#wa").style.display = "block";
	document.querySelector("#wa").innerHTML = "Wallet address:<br>0x.. "+selectedAccount.slice(-4);

}

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
  //document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  //document.querySelector("#btn-connect").removeAttribute("disabled")
}

async function tokname(address,row){
  //web3 = new Web3(provider);

  const contract = new web3.eth.Contract(contract_abi, address);

  const tname = await contract.methods.name().call();
  let t0;
  let t1;
  let pair = '';
  if (tname=='Pancake LPs'){
    const token0 = await contract.methods.token0().call();
    const token1 = await contract.methods.token1().call();

    //t0 = token0;
    //t1 = token1;

    if (typeof mtokens[token0] !== 'undefined'){
      t0 = mtokens[token0].name;
    }else{
      const t0contract  = new web3.eth.Contract(contract_abi, token0);
      const t0name = await t0contract.methods.symbol().call();
      t0 = t0name;
    }

    if (typeof mtokens[token1] !== 'undefined'){
      t1 = mtokens[token1].name;
    }
    else{
      const t1contract  = new web3.eth.Contract(contract_abi, token1);
      const t1name = await t1contract.methods.symbol().call();
      t1 = t1name;
    }

    //console.log(t0 + " "+ t1);
    pair =  t0 +"-"+  t1;
    //console.log(pair)
    //pair = # ${t0}-${t1}`;
  }
  const dec = await contract.methods.decimals().call();

  Promise.all([tname, dec, pair]).then((values) => {
  //console.log(values);
  document.querySelector("#r_"+row).innerHTML=`${values[0]} ${values[2]} (${values[1]})`;
  document.querySelector("#d"+row).value=`${values[1]}`;
  //document.querySelector("#t_"+row).innerHTML=`${address}`;
  document.querySelector("#v"+row).innerHTML = (document.querySelector("#v"+row).innerHTML!=='max') ? document.querySelector("#v"+row).innerHTML/10**values[1] : document.querySelector("#v"+row).innerHTML;

});
  //document.querySelector("#r_"+row).innerHTML=`${tname} ${pair} (${dec})<br>${address}`;
  //return tname;
}

async function reader(){
    let address = selectedAccount;
    //console.log(address);
    let url = `https://api.bscscan.com/api?module=account&action=txlist&apikey=1HHZ44UKGDY6JTFX6YAR9852HA2JYY9CBU&address=${address}&sort=desc`;
    let raddress = '';
    let rUaddress = '';
    let rname = '';
    let taddress = '';
    let utaddress = '';
    let name = '';
    //console.log(url);
    fetch(url)
    .then(
      res => res.json()
    )
    .then(
        out => {
          console.log('Checkout this JSON! ', out);
          if (out.status == '1' && out.message == 'OK'){
            //console.log(out.result);
            out.result.forEach(
              element => {
                //console.log(element.input.substr(34,40));
                if (element.input.substr(0,10)=='0x095ea7b3'){
                  let value = '';
                  if (element.input.substr(74,64)=='ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'){
                    value='max';
                  }else{
                    value=parseInt(element.input.substr(74,64), 16);
                  }
                  row++;

                  taddress = element.to;
                  utaddress = taddress.toUpperCase();

                  if (typeof tokens[utaddress] !== 'undefined'){
                  //if (routers[rUaddress].name === undefined){
                    name = tokens[utaddress].name;
                    //console.log("undef");
                  }else {
                    name = taddress;
                  }

                  tokname(taddress,row);
                  //console.log(`Reqa:${taddress} \r\n${row}`);
                  raddress = `0x${element.input.substr(34,40)}`;
                  rUaddress = raddress.toUpperCase();

                  rname="Unknown";

                  if (typeof routers[rUaddress] !== 'undefined'){
                    rname = routers[rUaddress].name;
                  }

                  /*$('#tdata').append(`
                  <tr>
                    <td id="r_${row}">${name}</td>
                    <td>${rname}<br>${raddress}</td>
                    <td align="right" id="v${row}">${value}</td>
                    <td align="right"><a href="https://bscscan.com/tx/${element.hash}">${element.blockNumber}</a></td>
                    <td>
                      <input type="hidden" id="d${row}">
                      <input type="hidden" id="t${row}" value="${element.to}">
                      <input type="hidden" id="c${row}" value="${raddress}">
                      <button class="remove" data-row="${row}" id="r${row}" onclick="onRemove(this)">Remove</button>
                    </td>
                  </tr>
                  `);*/
                  document.querySelector('#tdata').insertAdjacentHTML(
                  'beforeend',
                  `<div class="row mt-4 border rounded py-3 text-center justify-content-center">
                      <div class="col-md-3 my-auto">
                          <p class="h5" id="r_${row}">${name}</p>
                          <a class="pt-5">${taddress}</a>
                      </div>
                      <div class="col-md-3 my-auto">
                          <p class="h5">${rname}</p>
                          <a class="pt-5">${raddress}</a>
                      </div>
                      <div class="col-md-3 my-auto" id="v${row}">${value}</div>
                      <div class="col-md-3 my-auto">
                          <input type="hidden" id="d${row}">
                          <input type="hidden" id="t${row}" value="${element.to}">
                          <input type="hidden" id="c${row}" value="${raddress}">
                          <button class="btn-one" data-row="${row}" id="r${row}" onclick="onRemove(this)">Remove</button>
                          <br>
                          <a href="https://bscscan.com/tx/${element.hash}">Block: ${element.blockNumber}</a>
                      </div>
                  </div> `);
                }
              }
            );
          }
        }


      )
    .catch(
      err => console.log(err)
    );
  }

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

  /*      // Subscribe to networkId change
    provider.on("networkChanged", (networkId: number) => {
      console.log(networkId);
    });*/

    provider.on("open", () => {
      console.log("open");
    });

    document.querySelector("#btn-connect").style.display = "none";
    document.querySelector("#wa").style.display = "inline";
    //document.querySelector("#read").style.display = "inline";
    document.querySelector("#btn-disconnect").style.display = "inline";
    await refreshAccountData();
    reader();
  }

  /**
   * Disconnect wallet button pressed.
   */
   async function onDisconnect() {
     console.log("Killing the wallet connection", provider);


     // TODO: Which providers have close method?
     //if(provider.close) {
       provider.on("disconnect", () => {
         console.log("open");
       });

       await web3Modal.clearCachedProvider();
       provider = null;
     //}

     selectedAccount = null;

     // Set the UI back to the initial state
     //document.querySelector("#prepare").style.display = "block";
     //document.querySelector("#connected").style.display = "none";

     document.querySelector("#tdata").innerHTML="";
     document.querySelector("#btn-disconnect").style.display = "none";
     //document.querySelector("#read").style.display = "none";
     document.querySelector("#wa").style.display = "none";
   	document.querySelector("#wa").innerHTML = "";
     document.querySelector("#btn-connect").style.display = "inline";
   }

   var deletetWalletConnection = function(){
       window.localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
   }

   async function onRemove(btn){
     //console.log(btn.id);
     //console.log(document.querySelector("#"+btn.id).dataset.row);
     let row = document.querySelector("#"+btn.id).dataset.row;
     let tcontract = document.querySelector("#t"+row).value;
     let ccontract = document.querySelector("#c"+row).value;
     console.log(tcontract+" "+ccontract);


     const web3 = new Web3(provider);
     let amount = BigInt('0');
   	//let amount = BigInt("2").pow(new BN("256").sub(new BN("1")));
     //console.log(amount);

     try {
        const acontract  = new web3.eth.Contract(contract_abi, tcontract);
        let tx = await acontract.methods.approve(
          ccontract,
          amount
        )
        .send({from:selectedAccount
              })
       .once('transactionHash', function(hash){
          //document.querySelector("#message").innerHTML='<a href="https://bscscan.com/tx/'+hash+'">'+hash+'</a>';
          console.log(hash);
        })
        .once('confirmation', function(confirmationNumber, receipt){
               console.log('confirm',confirmationNumber, receipt)
        })
        ;
      } catch (error) {
       console.log(error.message);
      }
 }

  window.addEventListener('load', async () => {
    init();
    //document.querySelector("#read").addEventListener("click", reader);
    document.querySelector("#btn-connect").addEventListener("click", onConnect);
    document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);

  });
