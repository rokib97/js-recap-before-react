const products = [
  { name: "phone", price: 20000, brand: "samsung", color: "white" },
  { name: "laptop", price: 40000, brand: "lenevo", color: "black" },
  { name: "watch", price: 7000, brand: "apple", color: "gray" },
  { name: "bag", price: 5000, brand: "gucci", color: "pink" },
];

// map
const productNames = products.map((product) => product.name);
const productColors = products.map((product) => product.color);
// console.log(productNames);
// console.log(productColors);

// forEach
// products.forEach((product) => console.log(product.price));
// products.forEach((product) => console.log(product.brand));

// filter
const cheap = products.filter((product) => product.price <= 10000);
const specificName = products.filter((product) => product.name.includes("a"));
// console.log(specificName);

// find
const special = products.find((product) => product.name.includes("a"));
const specialItem = products.find((product) => product.color === "white");
console.log(specialItem);
