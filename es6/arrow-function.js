const returnNine = () => 9;
// console.log(returnNine());

const returnTwelve = (num) => num * 12;
// console.log(returnTwelve(12));

const result = (first, second) => (first + second) / 4;
// console.log(result(10, 22));

// const finalResult = (num1, num2) => (num1 + 5) * (num2 + 5);
// console.log(finalResult(5, 10));

const getSum = (first, second) => {
  const firstNumber = first + 5;
  const secondNumber = second + 5;
  const result = firstNumber * secondNumber;
  return result;
};

console.log(getSum(10, 5));
