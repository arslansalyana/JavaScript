// Arrow Functions
//syntax: () => {}

// Arrow functions are always anonymous.
const name = "Arslan";
const arrowFun = () => {
    return `Hello ${name}`
}
// console.log(arrowFun());

// Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.

const array = [1,2,3,4,5];
// const mappedArray = array.map((x) => {
//     return x + 1;
// })
const mappedArray = array.map(x => x + 1)
// console.log(mappedArray);

// const anotherArray = array.reduce((sum, x)=>{
//     sum += x;
//     return sum;
// },0)
const anotherArray = array.reduce((sum, x) => sum += x , 0);
// console.log(anotherArray);
// this shows that arrow functions could be very shorter.

//Non Binding of 'this'
// console.log(this);
// function testThis(){
//     const myName = "Salyana";
//     const myAge = 21;
//     console.log(this);
// }
// testThis();


const profile = {
    name: "Salyana",
    age: 21,
    greet: function(){
        console.log(this);
        return `Hello ${this.name}`
    },
    displayAge: () => {
        console.log(this);
        return `My age is ${this.age}`;
    }
}
// console.log(profile.greet());
// profile.name = "Arslan";
// console.log(profile.greet());
// console.log(profile.displayAge());


function Person() {
    this.age = 0;
    setInterval(function growUp() { this.age++; }, 1000);
}
  
  const p = new Person();
  console.log(p);
  


