// forEach , map , filter , reduce

// let cb = function (ele, index, arr) {
//   console.log(ele, index, arr);
// };

// arr.forEach(cb);

// let ans = arr.forEach(function (ele, index, arr) {
//   console.log(ele, index, arr);
// });

// console.log(ans)

// MAP - Pure function --  Every time for same iinput the function will give same output

let arr = [1, 2, 3, 4, 5];

// let ans = arr.map(function (ele, index, arra) {
//   return ele * 2;
// });

// console.log(ans)

// let ans = arr.filter(function (ele, index, array) {
//   return ele % 2 == 0;
// });

// console.log(ans);

// let ans = arr.reduce(function (acc, ele) {
//   return acc + ele;
// },10);

// console.log(ans);

// Quetsion 1
// const numbers = [2, 3, 4, 5];

// const ans = numbers.map(function (ele) {
//   return ele * ele;
// });

// console.log(ans)

// Question 2

// const integers = [1, 2, 3, 4, 5, 6];

// const ans = integers.filter(function (ele) {
//   return ele % 2 ==0 ;
// });

// console.log(ans);

// Question 3
// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 15 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 17 },
// ];

// const ans = users
//   .filter(function (obj) {
//     return obj.age > 18;
//   })
//   .map(function (obj) {
//     return obj.name;
//   });

// console.log(ans);

// Question 4

// const products = [
//   { name: "Laptop", price: 1000, inStock: true },
//   { name: "Mouse", price: 25, inStock: false },
//   { name: "Monitor", price: 200, inStock: true },
//   { name: "Keyboard", price: 75, inStock: false },
// ];

// const ans = products
//   .filter(function (obj) {
//     return obj.inStock;
//   })
//   .reduce(function (acc, currEle) {
//     return acc + currEle.price;
//   }, 0);

// console.log(ans);

// Question 5

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const ans = fruits.reduce(function (acc, currEle) {
  if (acc[currEle]) {
    acc[currEle] = acc[currEle] + 1;
  } else {
    acc[currEle] = 1;
  }
  return acc;
}, {});

console.log(ans)
