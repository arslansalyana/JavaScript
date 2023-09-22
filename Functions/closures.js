// since the inner function has access to the scope of the outer function, the variables
// and functions defined in the outer function will live longer than the duration of the
// outer function execution, if the inner function manages to survive beyond the life of
// the outer function. A closure is created when the inner function is somehow made 
// available to any scope outside the outer function.

const pet = function(name){
    const getName = function(){
        return name;
    }
    return getName; //only returning the reference,it does not executes immediately,only stores the reference.
}
const myPet = pet("Bashu");
console.log(myPet());

// in the above function the arguments as opposed to this statement: return getName();
// This may not be efficient if you only need to execute the function once and store its
//  result, as it involves unnecessary function calls. If you don't need to execute the 
//  function immediately and want to store its reference for later use, you should use the
//   second approach: return getName;. This way, you can call the function only when you 
//   need its result, minimizing the number of function invocations.


// Another example
// An object containing methods for manipulating the inner variables of the outer function can be returned.

function createPet(name) {
    let sex;

    const pet = {
        setName(newName){
            name = newName;
        },
        getName(){
            return name;
        },
        getSex(){
            return sex;
        },
        setSex(newSex) {
            if (
              typeof newSex === "string" &&
              (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
            ) {
              sex = newSex;
            }
        },

    };
    return pet;
}

console.log(`THE START OF 2ND FUNCTION`);

const myPet1 = createPet("Bashu");
console.log(myPet1.getName());

myPet1.setName("myChotaBashu");
console.log(myPet1.getName());

myPet1.setSex("female");
console.log(myPet1.getSex());