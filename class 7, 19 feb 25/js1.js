let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
]

for (let index = 0; index < grid.length; index++) {
    for(let i = 0; i < grid[index].length; i++){
        console.log(`Item at row ${index} and column ${i} is ${grid[index][i]}`);
    }
    }

// for (let index = 0; index < grid.length; index++) {
//     for(let i in grid[index]){
//         console.log(`Item at row ${index} and column ${i} is ${grid[index][i]}`);
//     }
//     }
