//require the prompt-sync module
// const prompt = require('prompt-sync')();
// //get the user input
// let name = prompt ("What is your name?");
// let age = prompt ('How old are you?');
// //convert the string to integer value
// age = parseInt(age);
// //check for the allowed age factor
// while (age < 18) {
//     console.log("You are not allowed to enter the venue");
//     age = prompt ('How old are you?');
//     age = parseInt(age);
//     if (age >= 18) {
//         console.log("Welcome to the venue");
//     }
// }



// //prompt library is needed to get the user input
// const prompt = require('prompt-sync')();
// //get the user input
// let name = prompt("What is your name?");
// let age = prompt("How old are you?");
// //convert the string to integer value
// // age = Number(age);
// age = parseInt(age);

// function checkNum(){
//   if (typeof(age) === 'number'){
//     console.log("The age is a number");
//   }
//   else {
//     console.log("The age is not a number");
//   }
// }
// checkNum();



// const myCar = { //object literal
//   price: 6457,
//   model: "BMW",
//   designer: "John",
//   year: 2019,
// };

// console.log(myCar.model); //BMW
// //creating a function to change the value of the object
// function funbehaviour(myobj){
//   myobj.price = 1000;
//   myobj.model = "Mercedez Benz";
// }
// //function invoked
// funbehaviour(myCar);
// console.log(myCar.model); //Mercedez Benz
//the above function changes the value of the object property when i invoke the function and pass the object as an argument and have the local variable as the object name




// const array = [23, 34, 45, 56, 67];
// console.log(array[0]);

// function myFun(arr){
//   arr[0] = 100;
// }
// myFun(array);
// console.log(array[0]);
//this means that when a function has a local variable and it takes the argument of another array in function call, the value for the property is changed by the function local variable.



// const square_root = function(number){
//     return Math.sqrt(number);
// }
// // const x = square_root(256);
// // console.log(x);
// //OR
// console.log(square_root(256));




// const factorial = function fact(n) {
//   //apply logic using ternary operator
//    return n < 2 ? 1 : n * fact(n-1);
//    //OR
//     // if (n < 2) {
//     //     return 1;
//     // }
//     // return n * fact(n-1);

//     //OR

//     // while (n < 2) {
//     //     return 1;
//     // }
//     // return n * fact(n-1);
// }
//   console.log(factorial(6));





// const NumArray = [1,2,3,4,5,6];

// function computeCube(x){
//     return x * x * x;
// }
// // console.log(computeCube(2));

// function map(fun,arr){
//     //make a new array equal to the length of required length
//     var result = new Array(arr.length);
//     for (var i = 0; i < arr.length; i++){
//       result[i] = fun(arr[i]); //passin the array in function call to compute the cube for each element
//     }
//     return result;
// }
// let cubed_array = map(computeCube,NumArray);
// console.log(cubed_array);





//function definition based on condition
// const prompt = require('prompt-sync')();
// let userinput = prompt("Enter the number: ");
// userinput = parseInt(userinput);
// myfun = function(){
//     console.log("The number is zero");
// }
// if (userinput === 0){
//     myfun();
// }
// else{
//     console.log("The number is not zero");
// }
// This function shows the example of function invoke based on condition

//Example code for function definition based on condition
// const prompt = require('prompt-sync')();
// let userinput = prompt("Enter the number: ");
// userinput = parseInt(userinput);
// if (userinput === 0){
//     myfun = function(){
//         console.log("The number is zero");
//     }
//     myfun();
// }
// else{
//     console.log("The execution did not even get into the function definition");
// }




// passing an object as an argument to the function
// const obj = {
//     price: 2000,
//     color: "green"
// }
//   myfun = function(obj){
//     console.log(obj.price);
//     console.log(obj.color);
//   }
//     myfun(obj);




// // function can call itself recursively
// // A function that calls itself is called a recursive function.
// let myfun = function(){
//     x = 0;
//     while (x < 10){
//         // console.log(x = x + 1)
//         console.log(x++);
//     }
// }
// myfun();




  //recusion itself uses a stack, function calls are pushed onto the stack, and when the function returns, the call is popped off the stack.
  // function foo(i) {
  //   if (i < 0) {
  //     return;
  //   }
  //   console.log(`begin: ${i}`);
  //   foo(i-1);
  //   console.log(`end: ${i}`);
  // }
  // foo(10);
  


// function factorial(n){
//     if (n < 2){
//         return 1;
//     }
//     else {
//         return n * factorial (n - 1);
//     }
// }
// console.log(factorial(10));




//Function Hoisting
//Hoisting means that the function declaration is moved to the top of the code.
//This means that you can call the function before it is declared.
// square(5);

// function square(x){      //FUNCTION DECLARATION
//     console.log(x*x);
// }

//Function hoisting only works with function declarations — not with function expressions. The code below will not work.
//This gives the reference error that it can not access square before initialization.
// console.log(square(5));
// const square = function(num){
//   return num * num;
// }




// // The following variables are defined in the global scope
// const num1 = 10;
// const num2 = 5;
// const name = 'Arslan';
// // This function is defined in the global scope
// function multiply(){
//     return num1 * num2;
// }
// console.log(multiply()); // Returns 50


// A nested function example and function scope
// const Name = 'Muhammad Arslan';
// function getscore(){
//     const num1 = 44;
//     const num2 = 90;

//     function add(){
//         return `${Name} has scored ${num1 + num2} marks in the exam`;
//     }
//     return add();
// }
// console.log(getscore());


// function recurse(num){
//   if (num > 15){
//     return;
//   }
//   console.log(num);
//   recurse(num +1);
// }
// //function call
// recurse(1);


//DOM Manipulation
// function walkTree(node) {
//   if (node === null) {
//     return;
//   }
//   // do something with node
//   for (let i = 0; i < node.childNodes.length; i++) {
//     walkTree(node.childNodes[i]);
//   }
// }

//This following actually uses a stack function call
// function foo(x){
//   if ( x < 0){
//     return;
//   }
//   console.log(`begin: ${x}`);
//   foo (x -1);
//   console.log(`end: ${x}`);
// }
// foo(5);

//inner function and closure
// function createCounter(){
//   let count = 0;
//   function innerFun(){
//     count++;
//     return count;
//   }
//   return innerFun;
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createAdder(x){
//   function innerFun(y){
//     return x + y;
//   }
//   return innerFun;
// }
// const add = createAdder(5);
// console.log(add(2));
// console.log(add(3));
// console.log(add(4));


// function calculate(op, num1){
//   function innerFunction(num2){
//     if (op === '+'){
//       return num1 + num2;
//     }
//     else if (op === '-'){
//       return num1 - num2;
//     }
//     else if(op === '*'){
//       return num1 * num2;
//     }
//     else if(op === '/'){
//       return num1 / num2;
//     }
//     else {
//       return "Invalid operation";
//     }
//   }
//   return innerFunction;
// }

// const calculations = calculate('/', 5);
// console.log(calculations(2));
// console.log(calculations(3));

// function addSquares(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return square(a) + square(b);
// }
// const a = addSquares(2, 3); // returns 13
// const b = addSquares(3, 4); // returns 25
// const c = addSquares(4, 5); // returns 41


function myconsole(val){
  console.log(val);
  return val;
}
myconsole("Hello");


  




