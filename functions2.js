const addOne = function(n){
    return n+1;
}
function addIndex(n, i){
    return n + i;
}
function returnConst(n){
    return 42;
}
var map = function(fn, arr) {
    const newArray = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = fn(arr[i],i);
    }
    return newArray;
};

console.log(map(addOne, [1,2,3]));
console.log(map(addIndex, [1,2,3]));
console.log(map(returnConst, [1,2,3]));