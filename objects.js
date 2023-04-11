var user = {
    userName: "Muhammad Arslan",
    userAge: 21,
    userCity: "Islamabad"
}; 

user.userhomeTown = "Jhang";

// for(key in user){
//     console.log(key + " : " + user[key]);
// }

user.userhomeTown = "Salyana";

// for(key in user){
//     console.log(key + " : " + user[key]);
// }

//object literal notation method
var table = {}; // empty object
//assigning the properties on the fly
table.legs = 4;
table.color = "brown";
table.price = 1000;
table.material = "wood";

// console.log(table.material);

//we can add new item at any point of time

//we can update any key value pair at any point of time as well
table.material = "steel";

// console.log(table.material);

//object literals and the brackets notation
var user = {};
user["username"] = "Muhammad Arslan Salyana";
user["userAge"] = 21;
//we can use the integer value as a key in string format
user["2020"] = "NUST";

// console.log(user);
// console.log(user["2020"]);

//we can use the combination of both methods
var user = {};
user["username"] = "Muhammad Arslan Salyana";
user.userAge = 21;
user["2020"] = "NUST";
user.userHomeTown = "Salyana";  
//we can also give the space in key value in object property
//but we can not output the single value 
// like these console.log(user["no of courses"]); 
//the above code gives the error
user["no of courses"] = 3;

// console.log(user);


//we can evaluate the expression in the brackets notation
var array = ["username", "userAge", "userHomeTown"];
var users = {
    user1 : {
        username: "Arslan",
        userAge: 21,
        userHomeTown: "Salyana"
    },
    user2: {
        username: "Hayat",
        userAge: 23,
        userHomeTown: "Sawat"
    },
    user3: {
        username: "Essa",
        userAge: 22,
        userHomeTown: "Mardan"
    }
}
//output the users and array

// for (var user in users) {
//     console.log(user);
//     // Access the properties of each user using the array expression
//     for (var i = 0; i < array.length; i++) {
//         console.log(array[i] + ": " + users[user][array[i]]);
//     }
//     console.log("----------------");
// }

//we can also add the methods in objects as key-value pairs
var car = {};
car.price = 1234;
car.mileage = 23425;
car.color = "Green";
car.turnTheKey = function myengine(){
    console.log("The engine is running");
}
car.ligthsOn = function mylights(){
    console.log("The lights are On")
}

console.log(car);
car.turnTheKey();
car.ligthsOn();