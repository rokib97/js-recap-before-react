// array
const numbers = [15, 16, 14, 24];

/* const [first, second, , fourth] = numbers;
console.log(first, second, fourth); */

const boxify = (first, second) => {
  const nums = [first, second];
  return nums;
};

const [first, second] = boxify(15, 24);
// console.log(first, second);

// object
const student = {
  name: "rokib",
  age: 24,
  isPositive: true,
  hobby: ["fishing", "football", "cricket", "coding"],
  friend: {
    name: "Moin",
    job: "student",
    age: 25,
    work: {
      description: "teaching",
      time: "4 pm",
      salary: 10000,
    },
  },
};

const [firstHobby, secondHobby] = student.hobby;
// console.log(firstHobby);
// console.log(secondHobby);

// const { name, age } = student;
// console.log(name, age);

const { name, job } = student.friend;
// console.log(name, job);
const { salary } = student?.friend?.work;
console.log(salary);
