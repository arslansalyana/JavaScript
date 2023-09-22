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