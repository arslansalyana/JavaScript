//function definition
function square(number){
    return number * number;
}
//function call
let squaredValue = square(5);
//console.log(squaredValue);




// Parameters are essentially passed to functions by value,so if the code within
// the body of a function assigns a completely new value to a parameter that was
// passed to the function, the change is not reflected globally or in the code which called that function.
let value = 5;
function updateVal(val){
    val = val + 1;
    // console.log(`the value inside the function is ${val}`);
}
updateVal(value);
// console.log(`the value in global scope is ${value}`);



//but when the arrays or objects are passed to the functions as parameter, they are passed by reference
//so changes made inside the function are reflected globally, changes are applied to the original object.
//for example
let array = ["banana", "apple", "mango"]
function updateArray(anyArray){
    anyArray[0] = 'Peanut Butter';
}
//console.log("The value before function call",array[0]);
updateArray(array);
//console.log("The value after function call", array[0]);
//for objects
const profile = {
    myName: "Salyana",
    age: 21
}
function updateObject(anyObject){
    anyObject.myName = "Muhammad Arslan";
}
// console.log(`The Name before function call is ${profile.myName}`);
updateObject(profile);
// console.log(`The Name after function call is ${profile.myName}`);

//So in conclusion, the primitive data types are passed by value and the reference data types
// are passed by reference. 


//function expression: Functions can be defined through function expressions, then they can be
//anonymus functions, it can have name as well:
const greeting = function (name){
    return `Hello ${name}`
}
// console.log(greeting("Arslan"));

//they may have name as well:
let factorial = function fact(n){
    return n < 2 ? 1 : n * fact (n-1);
}
// console.log(factorial(4));


// a function can be defined based on the condition
let num = 0;
let aFunction;
if (num===0){
    aFunction = function (){
        console.log('Hello Arslan based on the condition!')
    }
    aFunction();
}
else{
    console.log("Condition failed!")
}




