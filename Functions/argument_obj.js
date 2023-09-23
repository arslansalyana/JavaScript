// the arguments of the function are stored in an array like object, it not an actual array, but it has some
// of the array properties like index property & length property

//Index property: arguments[0] = first argument, arguments[1] = second argument
//Length property: arguments.length = shows the number os arguments passed to any function

//Examples
function concat(separator) {
    let result = "";
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}
// console.log(concat(", ", "red", "orange", "blue"));

function add(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
// console.log(add(1,2,3,4));

//But in modern JS, we mostly use rest operator for this type of requirements when we 
// dont know exactly the  number of arguments passed to the function
function addition(...args) {
    let bill = 0;
    for (let i = 0; i < args.length; i++) {
        bill += args[i];
    }
    return bill;
}
console.log(addition(100, 200));
console.log(addition(100, 200, 300));
console.log(addition(100, 200, 300, 400));