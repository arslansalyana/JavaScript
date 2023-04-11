//Strings behave similar to arrays in JavaScript. They have a length property and can be accessed by index. 

var string = "Arslan";
var array = ['Arslan', 'Ali', 'Hayat'];

for(var i = 0; i < string.length; i++){
    console.log(string[i]);
}
console.log('......//////////.........');

array.push("Kashif");

for(var i = 0; i < array.length; i++){
    console.log(array[i]);
}

//But there are some methods of arrays which dont apply to strings
//For example push and pop methods
//string.push("Kashif") This gives the error

//although we can concatenate the strings by two methods
var str1 = "Muhammad";
var str2 = "Arslan";

console.log(str1 +" "+str2);
// console.log(str1.concat(str2));
var string1 = str1.concat(str2);
console.log(string1);

// console.log(str1.toUpperCase());
// console.log(str2.toLowerCase());
// console.log(string1.toUpperCase());

//split method
var string2 = "Hayat-Ullah-Abid";
console.log(string2.split("-"));

