// let guess = 0;
// let target = Math.floor(Math.random() * 10) + 1;

// while(guess !== target){
//     guess = parseInt(prompt("Guess a number between 1 to 10:"));
//     if(guess === target){
//         console.log("You guessed it!");
//     }
//     else if(guess > target){
//         console.log("Too high! Guess again.");
//     }
//     else{
//         console.log("Too low! Guess again.");
//     }
// }

let guess = 0;
let target = Math.floor(Math.random() * 10) + 1;

for (attempts = 1; attempts < 6; attempts++) {
    guess = parseInt(prompt("Guess a number between 1 to 10:"));

    if (guess === target) {
        console.log(`You guessed it in ${attempts} attempts!`)
        break;
    } else if(attempts==5){
        console.log("Sorry, you've reached the maximum number of attempts. The target was",target);
    } else if (guess > target) {
        console.log("high! Guess again.");
    } else {
        console.log("low! Guess again.");
    }
}

// let guess = 0;
// let target = Math.floor(Math.random() * 10) + 1;
// let attempts = 0;

// while (guess !== target){
//     guess = parseInt(prompt("Guess a number between 1 to 10:  You have 5 Attempts:"));
//     attempts++;

//     if (guess === target) {
//         console.log(`You guessed it in ${attempts} attempts!`)
//         break;
//     } else if(attempts==5){
//         console.log("Sorry, you've reached the maximum number of attempts. The target was",target)
//         break;
//     } else if (guess > target) {
//         console.log("high! Guess again.");
//     } else {
//         console.log("low! Guess again.");
//     }
// }