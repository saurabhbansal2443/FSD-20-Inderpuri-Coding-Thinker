// A function when passed to another function as a argumnet is called callback function

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
  2;
}
function div(a, b) {
  return a / b;
}

function calc(a, b, cb1, cb2) {
  return cb1(a, b) + cb2(a, b);
}
console.log(calc(2, 3, mult, sum));
