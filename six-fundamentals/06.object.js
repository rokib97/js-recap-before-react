const student = {
  name: "rokib",
  age: 24,
  isPositive: true,
  hobby: ["fishing", "football", "cricket", "coding"],
  friend: {
    name: "Moin",
    job: "student",
    age: 25,
  },
};
// const positiveness = "isPositive";
// console.log(student.name);
// console.log(student["age"]);
// console.log(student[positiveness]);
// const hobby = "hobby";
// console.log(student.hobby[1]);
// console.log(student["hobby"][0]);
// console.log(student[hobby][0]);

const friend = "friend";
// console.log(student.friend.name);
// console.log(student["friend"].name);
console.log(student[friend].job);
