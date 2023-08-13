// Below there are two methods to convert the sentence into Pig LATIN, first approach used the FOR loop, and the 2nd approach utilizes
// the map function in ES6.
// const sentence = prompt("Enter the Sentence!");
// function pigLatinConverter (sentence){
//    const arr = sentence.split(' ');
//    let pigLatinArray = [];
//    for (let i = 0; i < arr.length; i++){
//       const char1 = arr[i].substring(0,1);
//       const restOfTheChars = arr[i].substring(1,arr[i].length);
//       const arrFinal = restOfTheChars+char1+"ay";
//       pigLatinArray.push(arrFinal);
//    }
//    const pigLatinSentence = pigLatinArray.join(" ");
//    console.log(pigLatinSentence);
// }
// pigLatinConverter(sentence);


//The more better and concise way
const sentence = prompt("Enter the Sentence!");
function pigLatinConverter (sentence){
   const arr = sentence.split(' ');
   const pigLatinArray = arr.map((singleWord) => {
      const char1 = singleWord[0];
      const restOfTheChars = singleWord.slice(1,singleWord.length);
      return restOfTheChars + char1 + "ay";
   })
   const pigLatinSentence = pigLatinArray.join(" ");
   console.log(pigLatinSentence);
}
pigLatinConverter(sentence);
