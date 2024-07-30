// function findProductPrice(products, name) {
// Your code here
//   let result;
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].name === name) {
//       result = products[i].price;
//       return result;
//     }
//   }
//   result = -1;
//   return "Output: ", result;
// }

function findProductPrice(prod, name) {
  let index = -1;
  let left = 0;
  let right = prod.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (prod[mid].name === name) {
      index = mid;
      return prod[index].price;
      // break;
    } else if (prod[mid].name < name) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];
// console.log(products[0].name);
console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
// console.log (findCat(products, "Apple"))
// console.log (findCat(products, "Durian"))
