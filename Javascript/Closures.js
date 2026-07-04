// A function bundled with its outer lexical Scope is called closures
// A function will always carry its lexical scope

function counter() {
  let count = 0;

  function enter() {
    count++;
    console.log(count);
  }

  function exit() {
    count--;
    console.log(count);
  }

  let obj = {
    enter1: enter,
    exit1: exit,
  };
  return obj ; 
}

let obj = counter();

obj.enter1();
obj.enter1();
obj.exit1();
obj.enter1();
obj.enter1();
obj.exit1();
count = 45;
obj.enter1();
obj.enter1();
