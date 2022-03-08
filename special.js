const products = [
  { name: "phone", price: 20000, brand: "samsung", color: "white" },
  { name: "laptop", price: 40000, brand: "lenevo", color: "black" },
  { name: "watch", price: 7000, brand: "apple", color: "gray" },
  { name: "bag", price: 5000, brand: "gucci", color: "pink" },
];

const newProduct = {
  name: "webcame",
  price: 7000,
  brand: "xiaomi",
  color: "white",
};
// create new array and add a new products
const newProducts = [...products, newProduct];
// console.log(newProducts);

const remaining = products.filter((product) => product.name !== "phone");
console.log(remaining);
