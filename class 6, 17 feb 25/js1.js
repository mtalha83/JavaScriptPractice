let library = [
    {
        title: "Harry Potter",
        author: "Talha",
        yearPublished: 2005,
    },
    {
        title: "Alice in Wonderland",
        author: "Zakir",
        yearPublished: 2015,
    },
    {
        title: "Hobbit",
        author: "Usman",
        yearPublished: 2010,
    },
]

library.push({
    title: "System Design",
    author: "Mustafa",
    yearPublished: 2020,});

console.log(library);

    for(let i = 0; i<library.length; i++){
        if(library[i].title == "System Design"){
            console.log(library[i]);
            console.log(`${library[i].title}, ${library[i].author}, ${library[i].yearPublished}`);
        }
            }

    // for(let i = 0; i<library.length; i++){
    //     if(library[i].title == "Hobbit"){
    //         delete library[i];
    //         console.log(library);
    //     }
    //         }

    for(let i = 0; i<library.length; i++){
        if(library[i].title == "Hobbit"){
            library.splice(i,1);
            console.log(library);
        }
            }

library[0].yearPublished = 2023;
library[1].yearPublished = 2024;
library[2].yearPublished = 2025;

console.log(library);
