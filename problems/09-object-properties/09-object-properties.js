/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    //loop through the keys
    for (let key in someObj){
        
        //use the keys to find the value
        console.log(`key = ${key}, value = ${someObj[key]}`);
    }
}

