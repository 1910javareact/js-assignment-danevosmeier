/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    if((isNaN(someStr))){

        //split string into an array of single characters
        let stringArr = someStr.split("")

        //reverse the array
        let reverseArr = stringArr.reverse()

        //join the array back to a string
        let reverseString = reverseArr.join("")

        return reverseString
    }
    else{
        throw `please enter a phrase`
    }
}

console.log(reverseStr('hello'));
