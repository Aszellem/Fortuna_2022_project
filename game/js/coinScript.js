// Coin Flip Simulation

//let coinFlipButton = document.getElementById('coinFlipButton');
let outcome = document.querySelector('.outcome');
let mamu = document.querySelector('.mamuer-beta');
let flipSound = new Audio("audio/coin-flip.wav");


function getRandomNumber() {
    return Math.floor(Math.random() * (2 - 1 + 1)) + 1
}

$("ul li.dropdown").on({
    mouseenter: function (event) {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    },
    mouseleave: function (event) {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    }
});


function formata(number){
  //console.log('asd');
  if(document.querySelector("#amount").value < 0) document.querySelector("#amount").value=Math.abs(document.querySelector("#amount").value);
  if(document.querySelector("#amount").value.length > number) document.querySelector("#amount").value = document.querySelector("#amount").value.slice(0, number);
}

/*
coinFlipButton.addEventListener('click', function() {
    let guess = "Head";
    if(document.getElementById("inlineRadio2").checked){
        guess = "Tail";
    }
    document.getElementById("toss-answer").innerText = "";
    let i = Math.floor(Math.random() * 2);
    start(i);
    if(i){
        answer = "Head";
    } else{
        answer = "Tail";
    }
    setTimeout(() => {
        document.getElementById("toss-answer").innerText = answer;
        if(answer == guess){
            winEffect();
        }
        else{
            //Fail
            setTimeout(() => {
                stop();
            }, 1000);
        }
    }, 5000);
});


function start(head = true){
    mamu.style.display= "block";
    let coin = document.querySelector("#coin");
    coin.style.animation = "none";
    flipSound.currentTime = 0;
    flipSound.play();
    if(head){
        coin.style.animation = "spin-heads 6s forwards";
    }
    else{
        coin.style.animation = "spin-tails 6s forwards";
    }
}*/

function myStart(){
  mamu.style.display= "block";
  let coin = document.querySelector("#coin");
  coin.style.animation = "none";
  flipSound.currentTime = 0;
  flipSound.play();
  coin.style.animation = "spin-start 25s";
}

function myLoop(){
  let coin = document.querySelector("#coin");
  coin.style.animation = "spin-top 20s";
}

function myStop(v){
  let coin = document.querySelector("#coin");
  let coinsHolder = document.querySelector(".coins-holder");
  if (v){
    //document.getElementById("toss-answer").innerText = "Tail"
    coin.style.animation = "spin-stop-head 3s forwards";
  }else{
    coin.style.animation = "spin-stop-tail 3s";
    //document.getElementById("toss-answer").innerText = "Head"
  }
  setTimeout(() => {
    coinsHolder.style.display = "none";
    mamu.style.display = "none";
  },10000);
}

function winEffect(){
    let mamu = document.querySelector('.mamuer-beta');
    let coinsHolder = document.querySelector(".coins-holder");

    coinsHolder.style.display = "block";
    for(let i = 0; i < 50; i++){
        let time = Math.random()*6000;
        setTimeout(()=>{
            let coinsHolder = document.querySelector(".coins-holder");
            let coinFill1 = document.createElement("div");
            let coin = document.createElement("div");
            coinFill1.className = "coin-fill";
            coinFill1.id = "coin-fill-top";
            coin.className = "win-coin";
            coin.style.left = Math.random()*90+"vw";
            coin.onanimationend = ()=>{
                coin.style.display = "none";
            }
            coin.appendChild(coinFill1);
            coinsHolder.appendChild(coin);
        },time);
    }
    setTimeout(() => {
        coinsHolder.style.display = "none";
        coinsHolder.innerHTML = '';
        mamu.style.display = "none";
    }, 8000);
}
/*
function stop(){
    let mamu = document.querySelector('.mamuer-beta');
    let coinsHolder = document.querySelector(".coins-holder");

    coinsHolder.style.display = "none";
    mamu.style.display = "none";
}*/
