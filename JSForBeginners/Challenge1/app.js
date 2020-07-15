//concatante a string and a variiable together

let myCat = document.getElementById("myCat");
let pusia = myCat.innerText;
//pusia = `${pusia} and Henry`; 
pusia = pusia +" and Henry"
myCat.innerHTML = pusia;
