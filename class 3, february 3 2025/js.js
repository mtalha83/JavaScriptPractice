console.log("Meerut Famous Kabab\nDay-Wise Online Menu Deals!!");
let day = prompt("Day Name?").toLowerCase();
let budget = prompt("what is your Minimum Budget in PKR?");

if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday"){
    if (budget >= 1000){
        console.log("Live Deals!!");
        console.log("Deal 3:\n3 Beef Chutney Roll, 1 Chicken Tikka, 1 Puri Paratha and 4 Soft Drink 500ml\nPKR=1000");
    }
    else if (budget >= 500){
        console.log("Live Deals!!");
        console.log("Deal 1:\n1 Chicken Tikka, 1 Puri Paratha and 1 Soft Drink 500ml\nPKR=500");
        console.log("Deal 2:\n3 Beef Chutney Roll and 3 Soft Drink 500ml\nPKR=800");       
    }
    else {
        console.log("Sorry we don't have any deal in this price tag, our deals starting price is PKR=500 only");
    }
}

else if (day == "friday" || day == "saturday"){
    if (budget >= 1000){
    console.log("Live Deals!!");
    console.log("Buffet:\n25+ dishes\nPKR=1000");
    }
    else {
        console.log("Sorry we don't have any deal in this price tag, our deals starting price is PKR=1000 only");
    }
}

else if (day == "sunday"){
    if (budget >= 500){
    let desserts = prompt("Do you want deals with desserts? Yes or No");
        if (desserts == "no" || desserts == "No"){
        console.log("Live Deals without Desserts!!");
        console.log("Deal 1:\n1 Chicken Tikka, 1 Puri Paratha and 1 Soft Drink 500ml\nPKR=500");
        console.log("Deal 2:\n3 Beef Chutney Roll and 3 Soft Drink 500ml\nPKR=800");
        console.log("Deal 3:\n3 Beef Chutney Roll, 1 Chicken Tikka, 1 Puri Paratha and 4 Soft Drink 500ml\nPKR=1300");       
        }
        else if (desserts == "yes" || desserts == "Yes"){
        console.log("Live Deals with Desserts!!");
        console.log("Deal 1:\n1 Chicken Tikka, 1 Puri Paratha, 1 Soft Drink 500ml and 1 Lava Cake\nPKR=500");
        console.log("Deal 2:\n3 Beef Chutney Roll, 3 Soft Drink 500ml and 3 Lava Cake\nPKR=1000");
        console.log("Deal 3:\n3 Beef Chutney Roll, 1 Chicken Tikka, 1 Puri Paratha, 4 Soft Drink 500ml and 4 Lava Cake\nPKR=1600");
        }
        else {
        console.log("Kindly write either yes or no");
        }
    }
    else {
        console.log("Sorry we don't have any deal in this price tag, our deals starting price is PKR=500 only");
    }
}
else {
    console.log("Invalid Day Name");
}
