
let str = prompt("write any sentence");

function decodecipher(str) {
    const map = { 
        G: 'A', A: 'G', 
        D: 'E', E: 'D', 
        R: 'Y', Y: 'R', 
        P: 'O', O: 'P', 
        L: 'U', U: 'L', 
        K: 'I', I: 'K', 
    };
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let upper = char.toUpperCase();
        if (map[upper]) {
            result += char === upper ? map[upper] : map[upper].toLowerCase();
        } else {
            result += char;
        }
    }

    return result;
}
console.log(decodecipher(str));



// write a function decodecipher which will take str as a parameter to decode or encode it. the key is written as paired letters, which are in the cipher simple replacement. the most frequent used key is "GA-DE-RY-PO-LU-KI".