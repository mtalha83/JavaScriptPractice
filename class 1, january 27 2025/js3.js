
let percentage = prompt ("Your Percentage?");

if (percentage < 0 || percentage > 100 || percentage == "-0"){
    console.log("invalid Number");
}

else if (percentage >= 90 ){
    console.log("A Grade");}
    
else if (percentage >= 80 ){
    console.log("B Grade");}
    
else if (percentage >= 70 ){
    console.log("C Grade");}
    
else if (percentage >= 60 ){
    console.log("D Grade");}
    
else if (percentage < 60 ){
    console.log("F Grade");}