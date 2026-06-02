// Print Statements

console.log("Hello World");

// Data Types
// Primitive / non-primitive(Objects)

//   Primitive Data Type  - String , boolean , number , null , undefined
// Non primitive Data types -- objects ---(Hashmap(obejct) , Array )

//  Var let and const

// let a = 's'
// console.log(typeof(a)); DataType is String

// let n = 10.6
// console.log(typeof(n)) DataType is number

// let x = false;

// console.log(typeof x);DataType is boolean

// Undefined and null both states absence of value/data

// Null signifies absence of value intentionally
// undefine absence of value

let x = null;

console.log(x);

//  Non primitive data type

// object

let obj = {
  name: "saurabh",
  age: 25,
  hobbies: ["Driving", "Reading", "coding"],
  adrress: {
    city: "Bhopal",
    state: "MP",
    pincode: 1234567890,
  },
  isStudent: false,
};
console.log(obj['isStudent']);

let arr = ["saurabh" , 1 , true , {name : "Yash"} , [1,2,3]]
console.log(arr[3].name)
