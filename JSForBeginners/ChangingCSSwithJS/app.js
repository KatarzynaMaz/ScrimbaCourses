let bgColor = document.querySelector(".inputBackground");
let textColor = document.querySelector(".inputText");
let body = document.querySelector("body");
    bgColor.addEventListener('keyup', function(event){
        
        console.log(event.target.value);
   body.style.backgroundColor = event.target.value;
    })

    textColor.addEventListener('keyup', function(event){
       body.style.color = event.target.value;
        })