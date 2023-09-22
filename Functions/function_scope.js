// Variables defined inside a function cannot be accessed from anywhere outside the function,
// because the variable is defined only in the scope of the function. 

function testScopeOfVar(){
    let num = 3;
    return "The num defined inside the function scope"+ " "+ num;
}
// console.log(testScopeOfVar());
// console.log("Outside "+num); this gives the error that num is not defined

// However, a function can access all variables and functions defined inside the scope in which it is defined.
function outer(){
    let outVar = 10;
    // console.log(`access inVar ${inVar}`);
    function inner(){
        let inVar = 25;
        return `the value of outVAR IS ${outVar}`;
    }
    return inner();
}
// console.log(outer());
//inner functions can access the variables defined in outer function, but outer cant.


// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Arslan";

function multiply() {
    return num1 * num2;
}
//so function defined inside the global scope can access the variables defined inside the global scope.
// console.log(multiply());

const myName = "Salyana"

function getScore(){
    const num1 = 10;
    const num2 = 3;

    function add(){
        return `${myName} scored ${num1 + num2}`;
    }
    return add();
}
// console.log(getScore());
// A function defined inside another function can also access all variables defined in 
// its parent function, and any other variables to which the parent function has access.

function fun1(){
    const n1 = 1;
    const firstName = "Muhammad";

    function fun2(){
        const n2 = 2;
        const middleName = "Arslan";

        function fun3(){
            const n3 = 3;
            const lastName = "Salyana";
            function fun4(){
                const n4 = 4;
                const cast = "sial";
                return `${firstName +" "+middleName +" "+lastName + " " + cast} scored ${n1 + n2 + n3 + n4}`
            }
            return fun4();
        }
        return fun3();
    }
    return fun2();
}
//this example illustrates that, any nested function can access all the varibales defied above it, like its
// parent function variables and then parents of those and so on.
// console.log(fun1());


// Recursion itself uses a stack: Function stack
function foo(num){
    if (num < 0){
        return;
    }
    console.log(`Begin: ${num}`);
    foo(num-1);
    console.log(`End: ${num}`);
}
// https://www.jsv9000.app/?code=ZnVuY3Rpb24gZm9vKG51bSl7DQogICAgaWYgKG51bSA8IDApew0KICAgI
// CAgICByZXR1cm47DQogICAgfQ0KICAgIGNvbnNvbGUubG9nKGBCZWdpbjogJHtudW19YCk7DQogICAgZm9vKG51b
// S0xKTsNCiAgICBjb25zb2xlLmxvZyhgRW5kOiAke251bX1gKTsNCn0NCmZvbygzKTs%3D

// This function uses a recursive call that in fact makes use of the call stack, the function stack
// In the call stack , the functions are pushed into it and gets executed one by one, once a function
// is executed , it is popped off of the stack.
// foo(3);