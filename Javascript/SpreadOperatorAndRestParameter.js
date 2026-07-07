// Spread Operator

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// res = [1,2,3,4,5,6]

// let res = [...arr1, ...arr2, ...arr1];

//

// let obj1 = {
//   name: "saurabh",
//   age: 25,
// };
// let obj2 = {
//   city: "delhi",
//   name: "ajay",
// };

// let res = {
//   ...obj2,
//   ...obj1,
// };
// console.log(res);

// Rest Paramter

function sum(a, b) {
  return a + b;
}

function sum2(a, b, c) {
  return a + b + c;
}

function sumAll(...params) {
  const arr = params;
  console.log("params", params);
  const sum = arr.reduce(function (acc, currEle) {
    return currEle + acc;
  });

  return sum;
}

console.log(sumAll(2,3,4,5,6,7,0,10,11))
