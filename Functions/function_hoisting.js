// Functions Hoisting

console.log(square(5));

function square(num){
    return num * num;
}

//the above code works exactly fine like this:
// function square(num){
//     return num * num;
// }
// console.log(square(5));
// because JavaScript interpreter hoists the entire function declaration to the top of the current scope.

//but functions hoisting only works with function declaration not with function epxression.
console.log(add(5,3));
const add = function (a,b){
    return a + b;
}
//gives error:  ReferenceError: Cannot access 'add' before initialization
