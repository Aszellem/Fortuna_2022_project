
// Coin Flip Simulation

var coinFlipButton = document.getElementById('coinFlipButton');
var outcome = document.querySelector('.outcome');
var mamu = document.querySelector('.mamuer-beta');

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


function format(number){
  //console.log('asd');
  if(document.querySelector("#number").value < 0) document.querySelector("#number").value=Math.abs(document.querySelector("#number").value);
  if(document.querySelector("#number").value.length > number) document.querySelector("#number").value = document.querySelector("#number").value.slice(0, number);
}

/*
coinFlipButton.addEventListener('click', function() {
    mamu.style.display= "block";
    var randomNumber = getRandomNumber();
    outcome.textContent = '';
    outcome.classList.toggle('flip');
    outcome.classList.add('toss');

    // Waits 3sec to display flip result
    setTimeout(function() {
        if (randomNumber == 1) {
            outcome.textContent = 'heads';
        } else if (randomNumber == 2) {
            outcome.textContent = 'tails';
        }
        outcome.classList.remove('toss');
        mamu.style.display= "none";
    }, 3000);

});*/