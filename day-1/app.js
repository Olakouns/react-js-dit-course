import { sumNumber } from "./utils";
// map
let tab = [2, 4, 6, 8];
console.log(tab.map( i => i * 2));
console.log(tab.map( i => {
    //...
    return i * 2;
}));

// filter
let tab2 = [3, 5, 6, 8];
console.log(tab2.filter(a => {
    //...
    return a % 2 === 0;
}));

// findIndex
let tab3 = [3, 5, 3, 6, 8];
console.log(tab3.findIndex( a => a % 2 === 0));

// some et every
let tab4 = [3, 5, 3, 6, 8];
console.log(tab4.some(b => b > 3));
console.log(tab4.every(b => b > 4));

// merge
let first = [3, 5, 3, 6, 8];
let second = [12, 5, 0];
let third = [12, 5, 0];
// ... ; a = [1, 3, 5]; b = [...a]
let c = [...first, 10, ...second, 1000, ...second, 10918];
console.log(c);

// function
// 1
function getMyName(name) {
    return name;
}
// 2
const getCustomName = (name) => {
    return name;
}
// 3
// const sumNumber = (a, b) => a + b;

let somme = sumNumber(12, 13);