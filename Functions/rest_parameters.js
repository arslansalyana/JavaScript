// rest parameters are used to collect the indefinite number of arguments in the form of an array
function multiply(multiplier, ...args){
    return args.map((x) => {
        return multiplier * x;
    })
}
console.log(multiply(2, 1,2,3,4,5));

// see we are able to collect the indefinite no of arguments by using the rest parameter, 
// it uses a map function, takes a multiplier arguments with which we are going to multiply every element of the array.
