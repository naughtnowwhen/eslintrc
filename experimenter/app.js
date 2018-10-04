var arrNum = [];
var arrString = [];


console.log(arrNum);

arrNum.push(1,65,73,27,28,34,2,9);
arrString.push('go', 'stop', 'truce', 'follow');

console.log(arrString);

const multy = 5;
const mapNum = arrNum.map(x => x / multy);



const mapString = arrString.map(x => x[1]);

console.log(mapString);
