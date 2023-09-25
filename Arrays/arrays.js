//Arrays: In JavaScript, arrays aren't primitives but are instead Array objects.
// Arrays are resizeable, mix of different data types.
// Arrays are zero-indexed. First element is at index 0, array[0];
//last element of the array, (array.length-1)


//Very Imp: JavaScript array-copy operations create shallow copies. 
//(All standard built-in copy operations with any JavaScript objects 
//create shallow copies, rather than deep copies).

//Shallow Copy: A shallow copy of an object is a copy whose properties share the same references
// (point to the same underlying values) as those of the source object from which the copy was made.
//  As a result, when you change either the source or the copy, you may also cause the other object to change too.


// A deep copy of an object is a copy whose properties do not share the same references 
// (point to the same underlying values) as those of the source object from which the copy 
// was made. As a result, when you change either the source or the copy, you can be assured
//  you're not causing the other object to change too. That behavior contrasts with the 
//  behavior of a shallow copy, in which changes to nested properties in the source or the
//   copy may cause the other object to change too.


const bands = ["B1", "B2", "B3", "B4", "B5", "B6", "B7"];
function listarrayitems(arr){
    for (i = 0; i < arr.length; i++){
        if(arr[i] === "B3"){
            console.log("B3 is the best band ever!");
        }
        else if(arr[i] === "B4"){
            console.log("This is my favourite NIR band");
        }
        else{
            console.log("The band", i + 1 ,"is", arr[i]);
        }
    }
}
// listarrayitems(bands);


//Task 1: Write a function named letterFinder that accepts two parameters: word and match.

function letterFinder(word, match){
    for (var i = 0; i < word.length; i++){
        if(word[i] === match){
            console.log(`The letter ${match} is Found at position ${i} in word ${word}`);
            return;
        }
    }

    console.log("Not Found");
}
// letterFinder("Arslan", "s");
// letterFinder("Salyana", "y");
// letterFinder("Ali", "g");