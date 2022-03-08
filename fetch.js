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

const studentJSON = JSON.stringify(student);
// console.log(student);
const jsObject = JSON.parse(studentJSON);
// console.log(jsObject);

// fetch structure
/* fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data)); */

//   keys of object  and values of object
const keys = Object.keys(student);
// console.log(keys);
const values = Object.values(student);
// console.log(values);

// loop through array
const numbers = [14, 12, 10, 15, 14, 11];
// numbers.forEach((number) => console.log(number));
const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

// for of using array like object
// for in loop using on object
for (const property in student) {
  //   console.log(property);
  console.log(student[property]);
}
