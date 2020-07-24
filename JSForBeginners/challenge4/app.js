//Create a simple tip calculator
//It needs to accept two parameters
//Make tip parameter optional
//Return a total amount and save it to a variable

/*function caclulateTip(chargeAmount, tip = 0.10){
    let tipAmount = chargeAmount * tip;
    totalAmount = chargeAmount + tipAmount;
    return totalAmount;
}

let totalBill =caclulateTip(75);
    
    console.log(" You need to pay " + "$" + totalBill);*/

function calculateTotalBill (){
    let tip = document.getElementById("tip").value;
    //tip = tip*0.1;
   

    let billAmount = document.getElementById("billAmount").value;
    billAmount = Number(billAmount);

    let tipAmount = billAmount*(tip/100);
    tipAmount = Number(tipAmount);

    let amountToPay = document.getElementById("amountToPay");
  
    totalBill = billAmount + tipAmount;
    amountToPay.innerText = totalBill;
}