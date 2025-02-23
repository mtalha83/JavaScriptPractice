let n = [10, 2, 3, 43, 5, 6, 77, 8, 98, 10];
let sum = 0;

console.log(n);

for (let i = 0; i<n.length; i++){
    sum = sum + n[i];
}

console.log("sum of 1 to 10 numbers in array=",sum);

let numberArr = [43, 98, 25, 0, 10, 99, 105, 77, 17, 81];
let largestNumber = 0

console.log(numberArr);

for (let i = 0; i<numberArr.length; i++){
    if(numberArr[i] > largestNumber) {
        largestNumber = numberArr[i];
    }
}
console.log("Largest number in Array=",largestNumber);

let n1 = [10, 2, 3, 43, 5, 6, 77, 8, 98, 1];
let n2 = [43, 98, 25, 0, 10, 99, 105, 77, 17, 81];
let n3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let result= n1.concat(n2, n3);
console.log(result);
let nFinal = [];
for (let i = 0; i < result.length; i++){
    if (!nFinal.includes(result[i])){
        nFinal.push(result[i]);
    }
}
console.log(nFinal);

let Alpha = ["talha", "zakir", "mustafa", "qasim", "usman"];
console.log(Alpha);
Alpha.sort();
console.log(Alpha);
Alpha.reverse();
console.log(Alpha);
Alpha.sort().reverse();
console.log(Alpha);


n1.sort(function (a,b) { return a-b});
console.log(n1);
