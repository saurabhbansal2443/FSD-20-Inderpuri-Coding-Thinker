// console.log("First");
// setTimeout(function () {
//   console.log("Timeout called");
// }, 2000);
// console.log("Last");

// Cut The Bread
// Add Stuffings
// Bake the sandwich

function cutTheBread(cb) {
  setTimeout(function () {
    let bread = "bread";
    console.log(bread);
    cb();
  }, 2000);
}

function addStuffings(cb) {
  setTimeout(function () {
    let sand = "bread + Stuffing";
    console.log(sand);
    cb();
  }, 2000);
}

function bake() {
  setTimeout(function () {
    let sandWich = "bread + Stuffing + heat";
    console.log(sandWich);
  }, 2000);
}

// cutTheBread(addStuffings); // f

cutTheBread(function () {
  addStuffings(function () {
    bake();
  });
});
