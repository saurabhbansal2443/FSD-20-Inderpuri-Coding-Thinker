// -- map
let arr = [1, 2, 3, 4, 5];
function cb(ele) {
  return ele * 2;
}
// let res = arr.map(cb);
// console.log(res);
Array.prototype.customMap = function (cb) {
  let arr = this;
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let cbRes = cb(arr[i], i, arr);
    res.push(cbRes);
  }

  return res;
};
let res = arr.customMap(cb);
console.log(res);
