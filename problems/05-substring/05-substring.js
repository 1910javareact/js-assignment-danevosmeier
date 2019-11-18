/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    
    if(isNaN(someStr)){
        
        //use substring method to return a substring
        let shortString = someStr.substring(startIndex, endIndex)
    
        return shortString
    }
    else{
        
        throw 'please enter a string'
    }
}

console.log(substring('hello', 0, 3));

console.log(substring(4, 0, 3));
