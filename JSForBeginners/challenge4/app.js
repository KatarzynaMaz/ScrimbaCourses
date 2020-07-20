//Create a simple tip calculator
//It needs to accept two parameters
//Make tip parameter optional
//Return a total amount and save it to a variable

function caclulateTip(chargeAmount, tip = 0.10){
    let tipAmount = chargeAmount * tip;
    totalAmount = chargeAmount + tipAmount;
    return totalAmount;
}

let firstBill =caclulateTip(150);
    
    console.log(" You need to pay " + "$" + firstBill);

