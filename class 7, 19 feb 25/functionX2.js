
// let price = +prompt("Original price of the product");
// let discountPercentage;
// function calculateDiscount(price, discountPercentage) {
//     if(!isNaN(price)){
//         discountPercentage = +prompt("Discount Percentage");
//         if(!isNaN(discountPercentage)){
//         let discountAmount = price * discountPercentage / 100;
//         alert(`Original Price: ${price}, Discounted Price: ${Math.round(price-discountAmount)}`)
//         }
//         else{
//             alert("Please enter valid discount percentage."); 
//         }
//     }
//     else{
//         alert("Please enter valid price.");
//     }
// }
// calculateDiscount(price, discountPercentage);


let min = +prompt("minimum number");
let max = +prompt("maximum number");

function getrandominteger (min, max){
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    console.log(randomNumber);
}

getrandominteger(min, max);