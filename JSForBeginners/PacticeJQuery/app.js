/*let text = document.querySelector(".someText");
text.value ="Tatry";*/

 /* creting a basic click event
    let clickTotal=0;
    function ClickMe(){
        console.log("You clicked me " + clickTotal + " times");
        clickTotal++;
    }*/
    let number = 100;
    function addHundred(){
               let inputNumber = document.querySelector(".inputNumber");
               let value = Number(inputNumber.value);
               let totalValue = value + number;

               let h1 = document.querySelector("h1");
               let span = h1.querySelector("span");

               span.innerHTML= totalValue;
    }