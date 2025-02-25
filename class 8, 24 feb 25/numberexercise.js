
let number = +prompt("write any number");

function reverseInteger(number) {
    
    const reversedStr = Math.abs(number).toString().split("").reverse().join("");
    
    const reversedNum = +(reversedStr);
    console.log(number);
    console.log(reversedStr);
    console.log(reversedNum);  
  }

  reverseInteger(number);

