let bgColor = document.querySelector(".bgColor");
let textColor = document.querySelector(".textColor");
let fontSize = document.querySelector(".fontSize");
let body = document.querySelector("body");

bgColor.addEventListener("keyup", function(event){
    body.style.backgroundColor = event.target.value;
})

textColor.addEventListener("keyup", function(event){
    body.style.color = event.target.value;
})

fontSize.addEventListener("keyup", function(event){
    body.style.fontSize = `${event.target.value}px`;
})