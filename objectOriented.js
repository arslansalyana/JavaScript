//object Literal way
const person = {
   //properties
   name: "Muhammad Arslan",
   age: 20,
   //object inside another object OR nested object
   address : {
      city: "Islamabad",
      country: "Pakistan"
   },
   //method
   Status: function (){
         console.log(`Arslan is the Student at NUST Islamabad!`)
   }
};



//Factory function
function findName(name){
   
   return {
   name,   // name : name,
   Status: function (){
         console.log(`Arslan is the Student at NUST Islamabad!`)
      }
   }
}

const theName = findName("Salyana");
console.log(theName);
// when we create an object using the object literal syntax, internally the JavaScript use this below constructor functions.
// theName.constructor
// ƒ Object() { [native code] }


//constructor function
function Profile (name, age){
   this.name = name,
   this.age = age,
   this.status = function(){
      console.log("Final Year Engineering Student!");
   }
}
const another = new Profile ("Arslan", 21);
//another.constructor
// ƒ Profile (name, age){
//    this.name = name,
//    this.age = age,
//    this.status = function(){
//       console.log("Final Year Engineering Student!");
//    }
// }

//important Takeaway

// Every object has a contructor property that references to the function which was used to create the object.
// In case of JavaScript, the constructor is built in when we use the object literal syntax to create the object.


//there are two value types in JavaScript 
// 1 - Value types
//          Numbers, Strins, Boleans, undefined, null, symbol
// 2 - Reference types
//          Functions, Objects, Arrays

// Imp: Functions & Arrays are also objects, so in a nutshell everything is object other than primitive/value types.


//Another concept

let x = 10;
let y = x;

console.log(x) //10
console.log(y) //10
//if I update the x value
x = 20;
console.log(x) //20
console.log(y) //10
//x value has been changed from 10 to 20, but y value is not changed,its still 10. This is the case with the value/primitive types.

//Now let's look at the reference types/objects
let x = {
   value: 10;
}
let y = x;
console.log(x.value) //10
console.log(y.value) //10
//now if I update the value property of object x
x.value = 20;
console.log(x) //20
console.log(y) //20
// see once the value property of object x is changed, quickly the value of y has also been changed.

// So what's the conclusion! primitives are copied by their value but the
// Reference types are copied by their reference.
// What does it mean? once the y was assigned equal to x in primitive type, the actual value of x at that time was copied to y.
// But in case of objects: instead of teh value of the x, the reference/address of that value was copied, so whatever the value
// is being stored at that address, will be copied to y, becasue address is never gonna be changed.

//another example to support the above concept:
let value = 1;
function increase (value){
   return value++;
}
console.log(increase(value)); // 1
// see the value is not increased, because here we are dealing with two different variables, one inside the increase
// function, and one outside, the outside one is not local to the function, (it's global) the outside variable value is copied to the inside,
// but once it is inside the function, the update is being made to the local value, not to the reference, so technically inside the 
// function value is changed to 2 but , once we are outside the function, calling it, trying to invoke the function by passing the 
// value argument, it again displays the original value becasue change inside did not affect the outside global value, 

//chatGPT Explanation
// Here's what happens:
// You have a global variable value with the value 1.
// You pass the value of the global variable (1) to the increase function.
// Inside the function, the parameter value holds a copy of the value 1.
// You use the post-increment operator (value++) on the parameter value.
// The post-increment operation increments the local parameter value to 2, but this change doesn't affect the global variable.
// The function returns the original value of the parameter (1), which is then logged.
// In this case, you're working with value types, and the concept of passing by value applies.
// The function receives a copy of the value, and changes to the copy don't affect the original variable.

let obj = {
    num: 1
}
function increase (obj){
   return obj.num++;
}
increase(obj);
console.log(obj.num);

// Here's what happens step by step:

// You have an object obj with a property num initialized to 1.
// You pass the object obj to the increase function.
// Inside the function, the parameter obj holds a reference to the same object that was passed in, not a copy of the object.
// You use the post-increment operator (obj.num++) on the property num of the object.
// The post-increment operation increments the property num to 2 within the object that obj references.
// After the function call, you log the value of obj.num, which is now 2 because the object's property was updated.
// The key difference here is that when you passed the object obj to the increase function, you passed a reference to the object. 
// Changes made to the object inside the function are reflected outside the function as well, 
//    since you're working with the same object instance.

// This behavior is in contrast to primitive values (such as numbers or strings), 
//    where changes made to a copy of the value inside a function do not affect the original value outside the function.