// scope

function sayHelloNTimes(name, n) {
  function greet() {
    console.log(`Hi ${name}!`);
  }

  for (let i = 0; i < n; i++) {
    greet();
  }
}

// sayHelloNTimes("Bob", 6)

// closures
function sum(nums) {
  let count = 0;

  function addNum(num) {
    count += num;
  }

  for (let i = 0; i < nums.length; i++) {
    addNum(nums[i]);
  }

  return count;
}

// console.log(sum([1,3,5])) // => 9

//Parsing Arguments Implicitly

function isPalindrome(string) {
  function reverse() {
    return string.split('').reverse().join('');
  }

  return string === reverse();
}

//Private State
function createCounter() {
  let count = 0;

  return () => ++count;
}

/*let counter = createCounter();
console.log(counter());
console.log(counter());

let counter2 = createCounter();
console.log(counter2());
*/

// Object-oriented JavaScript

function Kitten(name, age) {
  this.name = name;
  this.age = age;
}

Kitten.prototype.meow = function() {
  console.log(this.name + ' says "meow!"');
};

k1 = new Kitten("Earl", 2);
k2 = new Kitten("Houdini", 1);


Kitten.prototype.purr = function() {
  console.log("Purr on, kitten!");
}

Kitten.caboodle = [k1, k2, new Kitten('Flying Merkel', 3)];

Kitten.parade = function() {
  Kitten.caboodle.forEach(kitten => {
    kitten.meow();
  });
};

// Kitten.parade()

// Arguments

function argumentsWay(firstArg){
  console.log(`The first arg is ${firstArg}!`);

  let otherArgs = Array.prototype.slice.call(arguments,1);

  console.log(`The other args are: `)

  otherArgs.forEach((arg) => {
    console.log(arg);
  });
}

// argumentsWay("1", "2", "3", "hi")

function restWay(firstArg, ...otherArgs){
  console.log(`The first arg is ${firstArg}`);
  console.log(`The other args are: `);
  otherArgs.forEach((arg) => {
    console.log(arg);
  });
}
// restWay("one", "two", "three", "Roger")

function titleize(nameArr, cb) {
 
 let newArr = nameArr.map(x => `Mx. ${x} Jingleheimer Schmidt`);
 newArr.forEach(x => cb(x));
}
// titleize(["Mary", "Brian", "Leo"], console.log)

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function(){
  console.log(`${this.name} the elephant goes "phrRRRRRR!!"`)
};

Elephant.prototype.grow = function(){
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick){
  this.tricks.push(trick);
}

Elephant.prototype.play = function() {
  let trick = this.tricks[Math.floor(Math.random() * this.tricks.length)]
  console.log(`${this.name} is ${trick}`);
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);
let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant) {
  console.log(`${elephant.name} is trotting by!`)
}

herd.forEach(ele => Elephant.paradeHelper(ele))

