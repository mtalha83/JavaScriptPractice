

function PSDC() {
    console.log("Function without parameters and return statement.");
}

PSDC();

function Addition(a,b) {
    console.log("Function with return statement.");
    return a+b;;
}
let c = Addition(5,5);
console.log(c);




    console.log("Function of 2 parameters with multiple return statements.");
    let operator = parseInt(prompt("Select Operation:\nPress 1: +\nPress 2: -\nPress 3: *\nPress 4: /"));
    if(operator > 0 && operator < 5){
        let a = parseInt(prompt("write 1st number"));
        let b = parseInt(prompt("write 2st number"));
        function multi(a,b) {
        if(operator === 1){
            return a+b;
        }
        else if(operator === 2){
            return a-b;
        }
        else if(operator === 3){
            return a*b;
        }
        else if(operator === 4){
            return a/b;
        }
    }
    let result = multi(a,b);
    console.log(result);
    }
    else{
        alert("not a valid operator");
        }
    