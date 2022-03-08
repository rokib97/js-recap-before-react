// check truthy

let myVar = 10;
// check any truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}
// console.log(myVar);

/* let myMoney = 0;
if (!myMoney) {
  console.log("Falsy ");
} else {
  console.log("Truthy");
}
 */

// using ternary operator
let MyMoney = 180;
let sober = true;

let food = MyMoney > 100 ? "Biriyani" : "cha biscuit";
// console.log(food);
// console.log(MyMoney > 100 ? "Biriyani" : "cha biscuit");

// console.log(MyMoney > 100 && sober ? "Vodka" : "coke");

// more shortcut
// number to string
const num1 = 52;
// console.log(num1);
const numString = 52 + "";
const numString2 = num1.toString();
/* console.log(numString);
console.log(numString2); */

// string to number
const input = "560";
const inputNum = +input;
// console.log(inputNum);

let isActive = true;
const showUSer = () => console.log("Show Users");
const hideUSer = () => console.log("Hide Users");
// isActive ? showUSer() : hideUSer();

// use && if the left side is true then the right side will be executed
isActive && showUSer();

// use || if the left side is false then right side will be executed
isActive || hideUSer();

// toggle boolean
isActive = !isActive;
console.log(isActive);
