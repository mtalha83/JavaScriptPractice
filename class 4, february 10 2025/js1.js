

// for ( i = 1; i < 101; i++){
//     if ( i == 100){
//         console.log("You Made It!");}
    
//     else if ( i == 50){
//         console.log("Half Way There!");}

//     else if ( i == 10 || i == 20 || i == 30 || i == 40 || i == 60 || i == 70 || i == 80 || i == 90){
//         console.log("Checkpoint!", i );}  
//     }
// console.log("All, Done!");

let start = 1;
let end = 100;

for ( i = start; i <= end; i++){
    if ( i == end){
        console.log("You Made It!");}
    
    else if ( i == end/2){
        console.log("Half Way There!");}

    else if ( i % 10 == 0 ){
        console.log("Checkpoint!", i );}  
    }
console.log("All, Done!");
