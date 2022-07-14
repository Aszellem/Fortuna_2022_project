let canRoll = true, diceAngleX = 0, diceAngleY = 0;
let dice = document.querySelector(".dice");
let gotResult = new Event("got-result");
let diceResult = null;

function rotateDice(){
  //console.log(diceResult);
    if(canRoll){
        diceResult = null;
        canRoll = false;
        continueLoop = true;
        window.requestAnimationFrame((currTime)=>{
            diceLoop(currTime,currTime);
        });
    }
}
let continueLoop = false;
function diceLoop(prevTime,currTime){
    let elapsedTime = currTime - prevTime;
    if(elapsedTime > 14){
        diceAngleX += 6;
        diceAngleY += 1;
        prevTime = currTime;
        dice.style.transform = "rotateX("+diceAngleX+"deg) rotateY("+diceAngleY+"deg)";
        if(diceResult != null){
            let currFace;
            let x = diceAngleX % 360;
            let y = diceAngleY % 360;
            if(x === 0 || x === 180){
                switch((x + y) % 360){
                    default:break;
                    case   0:currFace = 1;break;
                    case  90:currFace = 5;break
                    case 180:currFace = 6;break;
                    case 270:currFace = 2;break;
                }
            }
            else if(x === 90)  currFace = 4;
            else if(x === 270) currFace = 3;
            if(currFace === diceResult){
                continueLoop = false;
                canRoll = true;
            }
        }
    }
    if(continueLoop){
        window.requestAnimationFrame((currTime)=>{
            diceLoop(prevTime,currTime);
        });
    }
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


function formata(number){
  //console.log('asd');
  if(document.querySelector("#amount").value < 0) document.querySelector("#amount").value=Math.abs(document.querySelector("#amount").value);
  if(document.querySelector("#amount").value.length > number) document.querySelector("#amount").value = document.querySelector("#amount").value.slice(0, number);
}
