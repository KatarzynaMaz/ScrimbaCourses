//getting the value of an input element and displaying it on page
let input = document.querySelector(".input");
let nameElem = document.getElementById("nameChanged");
input.addEventListener("keyup", function(event){
   
    nameElem.innerText = event.target.value;
})