// Problem 1:

console.log("begins"); // 1

setTimeout(() => {
  console.log("set timeout 1"); 	// 3
  Promise.resolve().then(() => {
    console.log("promise 1"); 	// 4
  })
}, 0)

new Promise(function(resolve, reject) {
  console.log("promise 2");  // 2
  setTimeout(function() {
    console.log("set timeout 2");  	// 5
    resolve("resolve 1")
  }, 0)
}).then((res) => {
  console.log("dot then 1");  	// 6 
  setTimeout(() => {
    console.log(res);  	// 7
  }, 0)
})

// Problem 2
async function async1() {
  console.log("async1 start"); // 2
  await async2();
  console.log("async1 end"); // 6
}

async function async2() {
  console.log("async2"); // 3
}

console.log("script start"); // 1

setTimeout(() => {
  console.log("set timeout"); // 8
}, 0)

async1();

new Promise(function(resolve, reject) {
  console.log("promise"); // 4
  resolve();
}).then(() => {
  console.log("resolved promise"); // 7
})

console.log("script end"); // 5


// Problem 3:
async function async1() {
  console.log("async1 start"); // 2
  await async2();
  console.log("async1 end"); // 6
}

async function async2() {
  console.log("async2"); // 3
}

console.log("script start"); // 1

setTimeout(() => {
  console.log("set timeout"); // 7
}, 0)

async1();

new Promise(function(resolve, reject) {
  console.log("promise"); // 4
  resolve();
}).then(() => {
  setTimeout(() => {
    console.log("resolved promise"); // 8
  }, 0)
})

console.log("script end"); // 5


// Problem 4:
var obj = {
  name: "Sush",
  sing: function() {
    this.age = 20;
    console.log("a", this.age); // 20
    var anotherFn = function() {
      this.age = 30;
      console.log("b", this.age); // 30
    }

    anotherFn();
    console.log("c", this.age); // 20
  }

}

obj.sing();


// Problem 5:
var obj = {
  name: "Sush",
  sing: function() {
    this.age = 20;
    console.log("a", this); // refers to the scope of obj object
    var anotherFn = function() {
      this.age = 30;
      console.log("b", this); 
      // it is a function expression and there is no context assigned to it by default as there is no specific object associated with it. 
      // So, JavaScript assigns the default 'this' value, which is the global window object.
    }

    anotherFn();
    console.log("c", this); // refers to the scope of obj object
  }

}

obj.sing();

// Problem 6:
console.log([1,2]+[3,4])   // "1,23,4"
// [1,2] + [3,4]  ==> "1,2" + "3,4"  ==>  "1,23,4"

// Problem 7:
console.log({} == {})  // false
console.log({} === {}) // false

// Objects are stored by their references. In the above case, their reference is not the same Hence false output.

// Problem 8
let [a, b] = [1, 2, 3];

console.log(a)   // 1
console.log(b)   // 2


// Problem 9
let [a, ...b] = [1, 2, 3];

console.log(a)   // 1
console.log(b)   // [2, 3]



