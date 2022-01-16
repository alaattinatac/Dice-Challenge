let player1 = prompt("Please enter the name of the first player:");
if (player1 === null) {
    alert("You did not write a name.");
    player1 = "Player1";
}
let player2 = prompt("Please enter the name of the second player:");
if (player2 === null) {
    alert("You did not write a name.");
    player2 = "Player2";
}


let p1 = document.getElementById("player_1");
let p2 = document.getElementById("player_2");

p1.innerHTML = player1;
p2.innerHTML = player2;

function randomNumber() {
    let random = Math.ceil(Math.random() * 6);
    return random;
}

let startButton = document.getElementById("start");

let dice1 = document.getElementById("dice_A");
let dice2 = document.getElementById("dice_B");

startButton.addEventListener("click", handle);

function handle() {
    let randomNumber1 = randomNumber();
    let randomNumber2 = randomNumber();
    dice1.src = `images/dice${randomNumber1}.png`;
    dice2.src = `images/dice${randomNumber2}.png`;
    let res = document.getElementById("result");

    p1.removeAttribute("style");
    p2.removeAttribute("style");

    if (randomNumber1 > randomNumber2) {
        res.innerHTML = `Winner: ${player1}`
        p1.setAttribute("style", "color:yellow; font-weight:bold");
    } else if (randomNumber2 > randomNumber1) {
        res.innerHTML = `Winner: ${player2}`
        p2.setAttribute("style", "color:yellow; font-weight:bold");
    } else {
        res.innerHTML = `Draw`
    }
}