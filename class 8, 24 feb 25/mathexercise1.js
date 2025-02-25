

let min = +prompt("minimum number");
let max = +prompt("maximum number");

function getrandominteger (min, max){
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    console.log(randomNumber);
}

getrandominteger(min, max);


























