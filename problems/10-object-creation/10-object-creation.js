/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal
let literalUser = {
    name: `Bubba Smith`,
    age: 105
}

//function
function functionUser(name, age){
    this.name = name
    this.age = age
}

let newFunctionUser = new functionUser('Bubba Smith', 105)

//class
class classUser {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let newClassUser = new classUser(`Bubba Smith`, 105)

console.log(literalUser);
console.log(newFunctionUser);
console.log(newClassUser);


