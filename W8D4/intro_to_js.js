function sayHelloNTimes(name, n) {
  function greet() {
    console.log( `Hi ${name}!`);
  }

  for (let i = 0; i < n; i++) {
    greet();
  }
}

sayHelloNTimes("Bob", 6)