
// let list = [
//     {
//      todo: "Complete Assignment",
//      date: "18 February 2025",
//       },
//     {
//         todo: "Complete Assignment 2",
//        date: "20 February 2025",
//      }
//     ];

// let continueRunning = true; 
  
//     while (continueRunning) {
//         let option = parseInt(prompt("press 1 to show all todos\npress 2 to add a new todo\npress 3 to delete a specific todo\npress 4 to quit application"));

//     if(option == 1){
//         for(let i = 0; i<list.length; i++){
//                 console.log(`todo list ${[1+i]}:\n${list[i].todo}, ${list[i].date}`);
//             }
//         let restartChoice = prompt("Write 'yes' to go to main menu.\nPress any other key to exit");
        
//         if (restartChoice.toLowerCase() !== 'yes') {
//           continueRunning = false; 
//           console.log("Program ended.");
//         }
//         }

//     else if(option == 2){
//         let todoAdd = prompt ("Add your new todo");
//         let dateAdd = prompt ("Add Date to complete your todo");
//         list.push({
//             todo: todoAdd,
//             date: dateAdd,
//         });
//         console.log("New todo successfully added to your list, Thank You");
//         console.log("Your updated todo list are as follows:");
//         for(let i = 0; i<list.length; i++){
//             console.log(`todo list ${[1+i]}:\n${list[i].todo}, ${list[i].date}`);
//         }
//         let restartChoice = prompt("Write 'yes' to go to main menu.\nPress any other key to exit");
        
//         if (restartChoice.toLowerCase() !== 'yes') {
//           continueRunning = false; 
//           console.log("Program ended.");
//         }
//     }

//     else if(option == 3){
//         console.log("Your current todo list are as follows:");
//         for(let i = 0; i<list.length; i++){
//             console.log(`todo list ${[1+i]}:\n${list[i].todo}, ${list[i].date}`);
//         }
//         let todoDel = parseInt(prompt ("Specify, which todo list number you want to delete"));
//         if(todoDel<0 || todoDel>list.length){
//             console.log("Not a Valid Option");
//             let restartChoice = prompt("Write 'yes' to go to main menu.\nPress any other key to exit");
        
//         if (restartChoice.toLowerCase() !== 'yes') {
//           continueRunning = false; 
//           console.log("Program ended.");
//         }
//         }
//         else{
//         list.splice(--todoDel,1);}
//         console.log("Specific todo successfully deleted, Thank You");
//         console.log("Your updated todo list are as follows:");
//         for(let i = 0; i<list.length; i++){
//             console.log(`todo list ${[1+i]}:\n${list[i].todo}, ${list[i].date}`);
//         }
//         let restartChoice = prompt("Write 'yes' to go to main menu.\nPress any other key to exit");
        
//         if (restartChoice.toLowerCase() !== 'yes') {
//           continueRunning = false; 
//           console.log("Program ended.");
//         }
//     }

//     else if(option == 4) {
//         console.log("Thank You..!!");
//         break;
//     }

//     else{
//         console.log("Not a Valid Option");
//         let restartChoice = prompt("Write 'yes' to go to main menu.\nPress any other key to exit");
        
//         if (restartChoice.toLowerCase() !== 'yes') {
//           continueRunning = false; 
//           console.log("Program ended.");
//         }
//     }
// }




let list = [
    {
        todo: "Complete Assignment",
        date: "18 February 2025",
    },
    {
        todo: "Complete Assignment 2",
        date: "20 February 2025",
    }
];

let option = parseInt(prompt("press 1 to show all todos\npress 2 to add a new todo\npress 3 to delete a specific todo\npress 4 to quit application"));

while (option) {

    if(option == 1){
        for(let i = 0; i<list.length; i++){
                console.log(`todo list ${[1+i]}:\n${list[i].todo}, ${list[i].date}`);
            }
        break;
    }

    else if(option == 2){
        let todoAdd = prompt ("Add your new todo");
        let dateAdd = prompt ("Add Date to complete your todo");
        list.push({
            todo: todoAdd,
            date: dateAdd,
        });
        console.log("New todo successfully added to your list, Thank You");
        console.log("Your updated todo list are as follows:");
        for(let i = 0; i<list.length; i++){
            console.log(`todo list ${[1+i]}:\n${list[i].todo}, ${list[i].date}`);
        }
        break;
    }

    else if(option == 3){
        console.log("Your current todo list are as follows:");
        for(let i = 0; i<list.length; i++){
            console.log(`todo list ${[1+i]}:\n${list[i].todo}, ${list[i].date}`);
        }
        let todoDel = parseInt(prompt ("Specify, which todo list number you want to delete"));
        if(todoDel<0 || todoDel>list.length){
            console.log("Not a Valid Option");
            break;
        }
        else{
        list.splice(--todoDel,1);}
        console.log("Specific todo successfully deleted, Thank You");
        console.log("Your updated todo list are as follows:");
        for(let i = 0; i<list.length; i++){
            console.log(`todo list ${[1+i]}:\n${list[i].todo}, ${list[i].date}`);
        }
        break;
    }

    else if(option == 4) {
        console.log("Thank You..!!");
        break;
    }

    else{
        console.log("Not a Valid Option");
        break;
    }
}