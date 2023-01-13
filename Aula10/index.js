let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(typeof num1);

num1 = num1.toString();
console.log(typeof num1);

let num3 = 1778;

console.log(num3.toString(2));

let num4 = 12.8752215;

console.log(num4.toFixed(2));
console.log(Number.isInteger(num4));

let temp = num4 * 'Ola';

console.log(Number.isNaN(temp));

//problema

let num5 = 0.7;
let num6 = 0.1;

num5 += num6;
num5 += num6;
num5 += num6;

//primeira possivel solução

console.log(num5);
console.log(num5.toFixed(2));
console.log(Number.isInteger(num5));

num5 = parseFloat(num5.toFixed(2));
console.log(Number.isInteger(num5));

//segunda possivel solução

num5 = 0.7;
num6 = 0.1;

num5 = ((num5*100)+(num6*100))/100;
num5 = ((num5*100)+(num6*100))/100;
num5 = ((num5*100)+(num6*100))/100;
console.log(num5);