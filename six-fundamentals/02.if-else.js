const name = "Taliba";
const age = 15;

if (age > 18 && name === "Talib") {
  console.log("You are a voter officially");
} else if (age < 18 && name !== "Talib") {
  console.log("You are not aged for giving vote");
} else {
  console.log("You are under age");
}
