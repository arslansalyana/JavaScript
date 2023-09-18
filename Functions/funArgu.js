// literally everything can be passed to functions as arguments: 
// functions, objects, arrays, numbers, strings etc

//faunctions call itself
const factorial = function fact(n){
    if (n < 2){
        return 1;
    }
    else {
        return n * fact(n-1);
    }
}
// console.log(factorial(4));


//objects and arrays are passed to the functions:
function updateObj(anyObj, anyArray){
    anyObj.school = "IGIS";
    anyArray[0] = 7;
}
const profile = {
    school: "NUST",
    dept: "SCEE"
}
// const semesters = [8];
// console.log('before function call');
// console.log(profile.school);
// console.log(semesters[0]);
// updateObj(profile, semesters);
// console.log('after function call');
// console.log(profile.school);
// console.log(semesters[0]);


//dynamic function calls, based on some condition in runtime
const add = function (a,b){
    return a+b;
}
const multiply = function(a,b){
    return a*b;
}
let op = "multiply";
if (op==="add"){
    // console.log(add(5,3));
}
else{
    // console.log(multiply(5,3));
}


//let'say we dont know the number of arguments passed to the function on the runtime,
//like we are dealing with shopping cart, we dont know the number of products
// the customer buys, and they are needed to be added so that bill is generated.
function customerBill(){
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total = total + arguments[i]
    }
    return total;
}
// console.log(customerBill(100,200,500));
// console.log(customerBill(100,200,500, 1000, 800, 2000));
// console.log(customerBill(100,200));
//as we can see, we are able to pass any number of arguments and get the added bill in our shopping cart.


//Setting Context Dynamically:
//In JavaScript, you can use the call or apply methods to set the context 
//(the value of this) dynamically when calling a function.

// In JavaScript, functions are objects, and they have methods like call and apply 
// that allow you to explicitly set the value of this when the function is invoked. 

const person1 = {
    name: "Arslan",
    greet: function(){
        console.log(`Hello my name is ${this.name}`);
    }
}
const person2 = {
    name: "Hayat"
}
person1.greet.call(person2); //look we are giving the reference of the function, not calling the function.
// In JavaScript, the call method is designed for explicitly setting the context of a function call,
//  and it's a common pattern when you want to borrow a method from one object and use it in the 
//  context of another object. This allows you to reuse functions in different contexts without 
//  modifying their original definitions.

