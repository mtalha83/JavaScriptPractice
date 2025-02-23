

function countVowels () {
    let string = prompt("Write any text..!!");
    let stringLower = string.toLowerCase();
    let vowels = 0;
    if(isNaN(stringLower)){
        for(let i = 0; i < stringLower.length; i++){
            if(stringLower[i] === "a" || stringLower[i] === "e" || stringLower[i] === "i" || stringLower[i] === "o" || stringLower[i] === "u"){
                vowels = vowels + 1;
            }
        }
    }
    else{
        console.log("Please enter only string values.");
    }
    console.log("Your Input Text:",string);   
    console.log("Number of Vowels presents in the input string:",vowels);
}
countVowels();