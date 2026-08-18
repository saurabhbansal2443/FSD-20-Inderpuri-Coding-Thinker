// -- map
// let arr = [1, 2, 3, 4, 5];
// function cb(ele) {
//   return ele * 2;
// }
// // let res = arr.map(cb);
// // console.log(res);
// Array.prototype.customMap = function (cb) {
//   let arr = this;
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     let cbRes = cb(arr[i], i, arr);
//     res.push(cbRes);
//   }

//   return res;
// };
// let res = arr.customMap(cb);
// console.log(res);

// Filter

// let arr = [1, 2, 3, 4, 5];
// function cb(ele) {
//   return ele % 2 == 0;
// }
// // let res = arr.filter(cb);
// // console.log(res);
// Array.prototype.customFilter = function (cb) {
//   let arr = this;
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let cbRes = cb(arr[i], i, arr);
//     if (cbRes) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };
// let res = arr.customFilter(cb);
// console.log(res);

// Reduce

let arr = [1, 2, 3, 4, 5];

function cb(acc, currEle) {
  return acc + currEle;
}

let res = arr.reduce(cb,10);

console.log(res);
