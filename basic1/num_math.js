const Score=400;

const balance =new Number(200) 
// its take number and its type also number one more when you create a object with new keyword its get the memmory in the heap section
console.log(balance);
console.log(balance.toString().length);
console.log(typeof(balance.toString()));

const othernumber=123.9908
console.log(othernumber.toPrecision(4)); 
// its take precision value from the decimal


const h=1000000
console.log(h.toLocaleString('en-IN'))
// its convert your standard of reading the numbers in indian local


//------------------maths------------------------//

console.log(Math);

console.log(Math.abs(-3));
console.log(Math.ceil(4.9));
console.log(Math.round(8.3));

console.log(Math.random()); //its give randome values between 0 to 1
console.log(Math.random()*10);
console.log((Math.random()*10)+1);


const min =10;
const max=20;

console.log(Math.floor(Math.random()*(max-min-1))+min);