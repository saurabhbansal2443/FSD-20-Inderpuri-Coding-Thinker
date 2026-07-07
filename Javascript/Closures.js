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
  return obj;
}

let { enter1, exit1 } = counter();

// let obj = counter();

enter1();
enter1();
exit1();
enter1();
enter1();
exit1();
count = 45;
enter1();
enter1();
