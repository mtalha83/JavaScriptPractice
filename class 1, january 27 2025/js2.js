
let logIn = prompt ("are you logged in? answer in true or false");
let pro = prompt ("are you a pro user? answer in true or false");

if (logIn == false){
    console.log("please login first");
}

else if (pro == false){
    console.log("please subscribe to see specail features");
}

else if (pro == true){
    console.log("thanks, you are a pro user");
}

