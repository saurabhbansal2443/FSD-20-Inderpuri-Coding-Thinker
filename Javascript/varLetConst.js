//  Var vs Let vs Const

// Redeclaration -- Var can be redeclared  , let and const cannot be redecalred
// const a = 10;
// const  a = 100;
// console.log(a);

// Reinitialization --> var, let  can be reintialise , const cannot be reintialize
// const a ;
// a = 10 ;
// console.log(a);

// Reassigning --> const cannot be reassign , var and let can be re-assign

// var a = 10 ;
// a = 20 ;
// console.log(a);

// Function is a block of code to do a specific task

// Hoisting -->  The variable and function will get the memory before the actual code execution ;
// greet()

// function greet() {
//   console.log("Good Evening");
// }

// var let and const are hoisted, but let and const cannot be accessed before intialixation

// console.log(a); // undefined
// var a = 10;
// console.log(a); // 10

// console.log(a); // error
// let a ;
// console.log(a); // 10

// one();
// console.log(a);
// var a = 10;
// var b = 100;
// console.log(a);
// one();

// function one() {
//   console.log(a);
//   var a = 100;
//   console.log(a);
//   console.log(b);
//   function two() {
//     var b = 99;
//     console.log(b);
//   }
//   two();
// }

// one();
// console.log(a);
// var a = 10;
// console.log(b);
// var b = 100;
// console.log(a);
// one();

// function one() {
//   console.log(a);
//   var a = 100;
//   console.log(a);
//   b = 100;
//   console.log(b);
//   function two() {
//     var b = 99;
//     console.log(b);
//   }
//   two();
// }


// Scope -- 
//  Function scope -- The variable which can be used in a function only is called function scope 

//  Var is function scope and let and const are block {} scope 

// var let and const are function scope because function is also a block of code 


function abc(){
  let a = 10 ; 
  console.log(a); 
}

abc(); 
console.log(a); 
