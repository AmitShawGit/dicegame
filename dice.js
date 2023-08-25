let random = Math.floor(Math.random() * 7);
console.log(random);
let answer = document.getElementById("answer")
if(random === 1){
    document.querySelector(".img1").src = "./images/dice1.png";
    document.querySelector(".img2").src= "./images/dice3.png";
answer.innerHTML = "Player 2"
}
else if(random === 2){
    document.querySelector(".img1").src = "./images/dice2.png";
    document.querySelector(".img2").src= "./images/dice6.png";
    answer.innerHTML = "Player 2"
}
else if(random === 3){
    document.querySelector(".img1").src = "./images/dice3.png";
    document.querySelector(".img2").src= "./images/dice5.png";
    answer.innerHTML = "Player 2"
}
else if(random === 4){
    document.querySelector(".img1").src = "./images/dice4.png";
    document.querySelector(".img2").src= "./images/dice1.png";
    answer.innerHTML = "Player 1"
}
else if(random === 5){
    document.querySelector(".img1").src = "./images/dice5.png";
    document.querySelector(".img2").src= "./images/dice2.png";
    answer.innerHTML = "Player 1"
}
else if(random === 6){
    document.querySelector(".img1").src = "./images/dice6.png";
    document.querySelector(".img2").src= "./images/dice4.png";
    answer.innerHTML = "Player 1"
}
else if(random === 0){
    document.location.reload();
}