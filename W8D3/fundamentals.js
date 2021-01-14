function mysteryScoping1() {
  var x = "out of block";
  if (true) {
    var x = "in block";
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping2() {
  const x = "out of block";
  if (true) {
    const x = "in block";
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping3() {
  const x = "out of block";
  if (true) {
    var x = "in block";
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping4() {
  let x = "out of block";
  if (true) {
    let x = "in block";
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping5() {
  let x = "out of block";
  if (true) {
    let x = "in block";
    console.log(x);
  }
  let x = "out of block again";
  console.log(x);
}

function madLib(verb, adjective, noun) {
  console.log(
    `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`
  );
}

function isSubstring(s1, s2) {
  return s1.includes(s2);
}

function fizzBuzz(array) {
  outArr = [];
  for (let i = 0; i < array.length; i++) {
    el = array[i];
    if (!(el % 15 === 0) && (el % 3 === 0 || el % 5 === 0)) {
      outArr.push(el);
    }
  }
  return outArr;
}

function isPrime(n) {
  //primality test using 6k+-1 optimization
  if (n <= 3) {
    return n > 1;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  i = 5;
  while (i ** 2 <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(15485863));
console.log(isPrime(3548563));
