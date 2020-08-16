//aks a user for a number
//if a number is equal to the set number, break
//if the number is not correct, keep guessing.

let myNum = 50; 
body = document.querySelector("body");
title = document.querySelector(".title");

while(true){
  let num = Number(prompt("What number am I thinking of?"))

    if (num && num == myNum){
        alert("You Guessed");
       // body.style.backgroundColor = "yellow";
        body.style.color = "green";
        title.innerText = "You Won";
        
        break;
}
}