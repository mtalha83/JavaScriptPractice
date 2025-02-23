
// function truncateString(){
//     let str = prompt(" write any text..!!");
//     let maxLength = prompt("input maxumum length to truncate the text");
//     let result = [];
//     if (str.length > maxLength) {
//         for (let i = 0; i < maxLength; i++) {
//             result.push(str[i]);  
//         }
//         console.log(`${result.join("")}...`);
//     }
//     else{
//         console.log(str);
//     } 
// }
// truncateString();

let str = prompt(" write any text..!!");
let maxLength = prompt("input maxumum length to truncate the text");
let result = [];
function truncateString(str, maxLength){
    if (str.length > maxLength) {
        for (let i = 0; i < maxLength; i++) {
            result.push(str[i]);  
        }
        console.log(`${result.join("")}...`);
    }
    else{
        console.log(str);
    } 
}
truncateString(str, maxLength);
