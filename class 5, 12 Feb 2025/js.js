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



// // // const loggedIn = false;
// // // const proSub = false;
// // // if (loggedIn == false){
// // //     console.log("please login first to see the data");
// // // }
// // // else if (proSub == false){
// // //     console.log("here is your data, consider subscribe to get access too pro features");
// // // }
// // // else if(proSub == true){
// // //     console.log("thanks, you are a pro subscriber");
// // // }

// // // console.log("you are done");


// // // const percentage = prompt("enter your percentage");

// // // if (percentage > 100 || percentage < 0){
// // //     console.log("invalid value");
// // // }
// // // else if (percentage >= 90){
// // //     console.log("A Grade");
// // // }
// // // else if(percentage >= 80){
// // //     console.log("B Grade");
// // // }

// // // else if (percentage >= 70){
// // //     console.log("C Grade");
// // // }
// // // else if(percentage >= 60){
// // //     console.log("D Grade");
// // // }
// // // else if(percentage < 60){
// // //     console.log("D Grade");
// // // }

// // console.log("Meerut Famous Kabab\nDay-Wise Online Menu Deals!!");
// // let day = prompt("Day Name?").toLowerCase();
// // let budget = prompt("what is your Minimum Budget in PKR?");

// // if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday"){
// //     if (budget >= 1000){
// //         console.log("Live Deals!!");
// //         console.log("Deal 3:\n3 Beef Chutney Roll, 1 Chicken Tikka, 1 Puri Paratha and 4 Soft Drink 500ml\nPKR=1000");
// //     }
// //     else if (budget >= 500){
// //         console.log("Live Deals!!");
// //         console.log("Deal 1:\n1 Chicken Tikka, 1 Puri Paratha and 1 Soft Drink 500ml\nPKR=500");
// //         console.log("Deal 2:\n3 Beef Chutney Roll and 3 Soft Drink 500ml\nPKR=800");       
// //     }
// //     else {
// //         console.log("Sorry we don't have any deal in this price tag, our deals starting price is PKR=500 only");
// //     }
// // }

// // else if (day == "friday" || day == "saturday"){
    
// //     if (budget >= 1000){
// //     console.log("Live Deals!!");
// //     console.log("Buffet:\n25+ dishes\nPKR=1000");
// //     }
// //     else {
// //         console.log("Sorry we don't have any deal in this price tag, our deals starting price is PKR=1000 only");
// //     }
// // }

// // else if (day == "sunday"){
    
// //     if (budget >= 500){
// //     let desserts = prompt("Do you want deals with desserts? Yes or No").toLowerCase();
// //         if (desserts == "no"){
// //         console.log("Live Deals without Desserts!!");
// //         console.log("Deal 1:\n1 Chicken Tikka, 1 Puri Paratha and 1 Soft Drink 500ml\nPKR=500");
// //         console.log("Deal 2:\n3 Beef Chutney Roll and 3 Soft Drink 500ml\nPKR=800");
// //         console.log("Deal 3:\n3 Beef Chutney Roll, 1 Chicken Tikka, 1 Puri Paratha and 4 Soft Drink 500ml\nPKR=1300");       
// //         }
// //         else if (desserts == "yes"){
// //         console.log("Live Deals with Desserts!!");
// //         console.log("Deal 1:\n1 Chicken Tikka, 1 Puri Paratha, 1 Soft Drink 500ml and 1 Lava Cake\nPKR=500");
// //         console.log("Deal 2:\n3 Beef Chutney Roll, 3 Soft Drink 500ml and 3 Lava Cake\nPKR=1000");
// //         console.log("Deal 3:\n3 Beef Chutney Roll, 1 Chicken Tikka, 1 Puri Paratha, 4 Soft Drink 500ml and 4 Lava Cake\nPKR=1600");
// //         }
// //         else {
// //         console.log("Kindly write either yes or no");
// //         }
// //     }
// //     else {
// //         console.log("Sorry we don't have any deal in this price tag, our deals starting price is PKR=500 only");
// //     }
// // }
// // else {
// //     console.log("Invalid Day Name");
// // }

// // let start=20;
// // let end=1;

// // for (let i = start; i >= end; i = i - 1){
// //     console.log(i);
// // }


// // let guess = 0;
// // let target = Math.floor(Math.random() * 10) + 1;

// // for (attempts = 1; attempts < 6; attempts++) {
// //     guess = parseInt(prompt("Guess a number between 1 to 10:"));

// //     if (guess === target) {
// //         console.log(`You guessed it in ${attempts} attempts!`)
// //         break;
// //     } else if(attempts==5){
// //         console.log("Sorry, you've reached the maximum number of attempts. The target was",target);
// //     } else if (guess > target) {
// //         console.log("high! Guess again.");
// //     } else {
// //         console.log("low! Guess again.");
// //     }
// // }

// let guess = 0;
// let target = Math.floor(Math.random() * 10) + 1;
// let attempts = 0;

// while (guess !== target){
//     guess = parseInt(prompt("Guess a number between 1 to 10:  You have 5 Attempts:"));
//     attempts++;

//     if (guess === target) {
//         console.log(`You guessed it in ${attempts} attempts!`);
//     } else if(attempts==5){
//         console.log("Sorry, you've reached the maximum number of attempts. The target was",target)
//         break;
//     } else if (guess > target) {
//         console.log("high! Guess again.");
//     } else {
//         console.log("low! Guess again.");
//     }
// }


// // let number = prompt ("Choose Number To Print Table");

// // for (i = 1; i < 11; i++){
// //     console.log(number, "*", i, "=", number * i);
// // }


// let start = 1;
// let end = 100;

// for ( i = start; i <= end; i++){
//     if ( i == end){
//         console.log("You Made It!");}
    
//     else if ( i == end/2){
//         console.log("Half Way There!");}

//     else if ( i % 10 == 0 ){
//         console.log("Checkpoint!", i );}  
//     }
// console.log("All, Done!");


// let n = [10, 2, 3, 43, 5, 6, 77, 8, 98, 10];
// let sum = 0;

// console.log(n);

// for (let i = 0; i<n.length; i++){
//     sum = sum + n[i];
// }

// console.log("sum of 1 to 10 numbers in array=",sum);

// let numberArr = [43, 98, 25, 0, 10, 99, 105, 77, 17, 81];
// let largestNumber = 0

// console.log(numberArr);

// for (let i = 0; i<numberArr.length; i++){
//     if(numberArr[i] > largestNumber) {
//         largestNumber = numberArr[i];
//     }
// }
// console.log("Largest number in Array=",largestNumber);

// let n1 = [10, 2, 3, 43, 5, 6, 77, 8, 98, 1];
// let n2 = [43, 98, 25, 0, 10, 99, 105, 77, 17, 81];
// let n3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let result= n1.concat(n2, n3);
// console.log(result);
// let nFinal = [];
// for (let i = 0; i < result.length; i++){
//     if (!nFinal.includes(result[i])){
//         nFinal.push(result[i]);
//     }
// }
// console.log(nFinal);

// let object = { 
//     name: "HP Elitebook Sleeve",
//     instock: true,
//     price: 1000,
//     totalunits: 7, 
//     Colors: ["black", "white", "gray"],
//     specs {}
// };
// console.log(object);

// console.log(object.name);

// console.log(object["name"]);

// console.log(object.Colors[1]);

// console.log(object["Colors"][1]);

// const restuarant = {
//     name: "Ichiran Ramen",
//     address: `${Math.floor(Math.random()*100) +1} Johnson Ave`,
//     city: "Brooklyn",
//     state: "NY",
//     zipcode: "11206",
// }

// restuarant.menu = "Karahi";
// console.log(restuarant);
// delete restuarant.city;
// console.log(restuarant);

// restuarant["favouritemenu"] = "Karahi";
// console.log(restuarant);
// delete restuarant["state"];
// console.log(restuarant);


// let fullAddress = `${restuarant.address}, ${restuarant.city}, ${restuarant.state} ${restuarant.zipcode}`;

// console.log(fullAddress);

let student = {
    name: "talha",
    age : 40,
    subjects : ["maths", "science", "urdu"],
    isEnrolled : true,
}

console.log(student);
student.grade = "A";
student.isEnrolled = false;

console.log(`$ {student.name}, ${student.age}, ${student.subjects}`);
