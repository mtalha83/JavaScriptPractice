const num = [1,2,3,4,5];

let double = num.map(num=>num*2);
console.log(double);

let students = [
    { firstname: "A", lastName: "B"},
    { firstname: "C", lastName: "D"},
    { firstname: "E", lastName: "F"},
];

let fullName = (students) => students.firstname + "" + students.lastName;

console.log(students.map(fullName));

const numbers = [5,12,13,3,7];

let greater10 = numbers.filter(numm => numm >= 10);
console.log(greater10);

let studentsNew = [
    { firstname: "Alice", score: 52},
    { firstname: "Bob", score: 67},
    { firstname: "Charlie", score: 80},
    { firstname: "David", score: 45},
];

let above60 = studentsNew.filter(studentsNew => studentsNew.score>= 60);
console.log(above60);
let UpperCase = above60.map(above60=>above60.firstname.toUpperCase());
console.log(UpperCase);


let car = {make: "toyota", model: "camry"};
let {make: Makes, model: Models} = car
console.log(Makes, Models);

let data = ["Alice", 30, "New York"];
let [name , age, city] = data;
console.log(name, age, city);


// let Data;

// function fetchData(){
//     setTimeout(() => {
//         Data = { name: "john", age: 30 }
//     }, 2000)
// }
// console.log(Data);
// fetchData();
// console.log("data is being fetched...");


let Data;

function fetchData(callback) {
    setTimeout(() => {
        Data = { name: "john", age: 30 };
        callback(Data);
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

console.log("Data is being fetched...");
fetchData(displayData);






