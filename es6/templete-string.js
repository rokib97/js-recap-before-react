const numbers = [15, 16, 14, 69];
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

const output = `Student name is ${student.name}, He is ${student.age} years old, His hobby is ${student.hobby[1]}, his frind name is ${student.friend.name} and his fav number is ${numbers[3]}`;
console.log(output);
