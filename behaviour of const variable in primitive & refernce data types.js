const num = 5;
num = 10; // This will result in an error because you can't change a const 
// With primitive data types, a const variable prevents the value from being changed after it's assigned.

const person = {name:'Arslan', age:21};
person.age = 20;
console.log(person); //// This is allowed because you're modifying a property of the object


const person = { name: "Alice", age: 25 };
person = {name:'Arslan', age: 21};
console.log(person); //// This will result in an error because you can't change the reference
//With objects/arrays, a const variable prevents the reference from being changed (you can't assign a new object/array),
//but you can still modify the properties or elements within the object/array.

