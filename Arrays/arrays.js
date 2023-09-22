
// var bands = ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11"]

// function listarrayitems(arr){
//     for (i = 0; i < arr.length; i++){
//         if(arr[i] == "B3"){
//             console.log("B3 is the best band ever!");
//         }
//         else if(arr[i] == "B4"){
//             console.log("This is the my favourite NIR band");
//         }
//         else{
//             console.log("The band", i + 1 ,"is", arr[i]);
//         }
//     }
// }

// listarrayitems(bands);

//Task 1: Write a function named letterFinder that accepts two parameters: word and match.

function letterFinder(word, match){
    for (var i = 0; i < word.length; i++){
        if(word[i]==match){
            console.log("The letter", match, "is Found at position", i);
        }
        else {
            console.log("Not Found");
        }
    }
}

letterFinder("hello", "l");