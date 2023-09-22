//Nested Functions

function outer(num1){
    function inner(num2){
        return `${num1 + num2}`;
    }
    return inner;
}
const accessInner = outer(5);
// console.log(accessInner(10));
// console.log(outer(10)(100));

//another example
 function addSquare(a,b){
    function square(x){
        return x * x;
    }
    return square(a) + square(b);
 }
//  console.log(addSquare(2,3));
//  console.log(addSquare(3,4));
//  console.log(addSquare(4,5))

 //Scope chaining
 function A(x){
    function B(y){
        function C(z){
        return `${x + y + z}`;
        }
        return C(1);
    }
    return B(2);
 }
 console.log(A(3));

// This can be done because:
// B forms a closure including A (i.e., B can access A's arguments and variables).
// C forms a closure including B.
// Because C's closure includes B and B's closure includes A, then C's closure also
// includes A. This means C can access both B and A's arguments and variables. 
// In other words, C chains the scopes of B and A, in that order.



// JavaScript allows for the nesting of functions and grants the inner function full access
// to all the variables and functions defined inside the outer function (and all other 
// variables and functions that the outer function has access to).
let name = "Arslan";

function one(){
    let num1 = 1;

    function two(){
        let num2 = 2;
    }

    function three(){
        let num3 = 3;
        return `${name} scored ${num1+num3} marks in exam`; // works fine
        // return `${num1+num2+num3}`;    this function does not have the access of the variable
        // from the sibling function
        // ReferenceError: num2 is not defined
    }

    return three();

}
// console.log(one());
//In the above function function 'two' and 'three' are sibling functions, they both have access to function 'one'
// variables and arguments, but they cant share the varaibles with each other. they are out of the scope for each other.


//How we can make subling functions share resources with each other in this example:
function myOne() {
    let n1 = 1;
    function myTwo() {
        let n2 = 2;
        return n2;
    }
    function myThree() {
        let n3 = 3;
        return `${name} scored ${n1+myTwo()+ n3} marks in exam`;
    }
    return myThree();
}
//So we had to return the n2 from 'myTwo' and then called this 'myTwo' in the return statement of 'myThree'
// In this way we were able to access the variables of a sibling function, otherwise variables are not 
// accessible without scope chain (only accessible in a hierarchical way)
// console.log(myOne());
