//Arrays are objects in javascript

// var array = [];
// array[0] = "Arslan";
// array[1] = "Essa";
// array[2] = "Hayat";
// array[3] = "Ali";
// array[4] = "Kashif";


// array.push("Ibrahim");
// array.push("Hassan");
// array.push("Junaid");

// array.pop();

// console.log(array);
// array.pop();

// console.log(array);

var array = ["Arslan", "Essa", "Hayat", "Ali", "Kashif"];
//adding a new element at the end of the array
array.push("Ibrahim");
// console.log(array);
//removing the last element of the array
array.pop();
// console.log(array);

function arrayBuilder(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

// arrayBuilder("JavaScript", "Leaflet", "NodeJs");

var myArray = arrayBuilder("JavaScript", "Leaflet", "NodeJs");
// console.log(myArray);

console.log(Math.E);
console.log(Math.PI);
