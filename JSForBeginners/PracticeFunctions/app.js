function doMath(num){
    let newNum = (num + 100)/10;
    return newNum;
}

let numOne = doMath(20);
console.log(numOne);

let numTwo = doMath(40);
console.log(numTwo);

let numThree = doMath(60);
console.log(numThree);

function fToC (num) {
    let celsius = 5/9*(num -32);
    return celsius;
}
let zero = fToC(32);
console.log(zero);
    
let one = fToC(72);
console.log(one);