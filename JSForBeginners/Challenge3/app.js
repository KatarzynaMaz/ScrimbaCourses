//Ask a user for a number
//Cast the number to a number (to make sure it's a number)
//Make sure the number is valid
//if the number is bigger than 18, change some text on the page 

let number = prompt("what's your age?")
number = Number(number);
if(number){
            if (number > 18){
           let elem= document.getElementById("elem");
           elem.innerHTML = "You can vote";
        }
    }
