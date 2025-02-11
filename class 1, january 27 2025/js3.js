
let percentage = parseInt(prompt ("Your Percentage?"));

// if (percentage < 0 || percentage > 100 || percentage == "-0"){
//     console.log("invalid Number");}

// else if (percentage >= 90 ){
//     console.log("A Grade");}
    
// else if (percentage >= 80 ){
//     console.log("B Grade");}
    
// else if (percentage >= 70 ){
//     console.log("C Grade");}
    
// else if (percentage >= 60 ){
//     console.log("D Grade");}
    
// else if (percentage < 60 ){
//     console.log("F Grade");}

// switch (percentage) {
//     case "90":
//         case 90: console.log("A Grade")
//         break;

//     default: console.log("Invalid Number")
//         break;
// }

switch(percentage){
    case 90: console.log("A Grade")
    break;
    case 80: console.log("B Grade")
    break;
    case 70: console.log("C Grade")
    break;
    case 60: console.log("D Grade")
    break;
    case 50: console.log("F Grade")
    break;
    default: console.log("Invalid Number")
    break;

}
