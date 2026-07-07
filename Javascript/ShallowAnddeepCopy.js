let obj = {
  name: "saurabh",
  age: 25,
  adrress: {
    city: "delhi",
    houseNumber: 27,
  },
};

// Shallow copy

// let obj2 = obj;

// obj2.name = "ajay";

// console.log(obj);

// console.log(obj2);

// deep Copy

// let obj2 = JSON.parse(JSON.stringify(obj));

// obj2.age = "ajay";

// console.log(obj);

// console.log(obj2);

// Spread Operator

let obj2 = { ...obj };

obj2.adrress.city = "BHOPAL";
obj2.age = 99;
console.log(obj);

console.log(obj2);
