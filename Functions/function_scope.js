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

