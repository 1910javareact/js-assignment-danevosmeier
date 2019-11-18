/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    //remove spaces between words
    splitString = someStr.split(' ').join('')
    
    //split out each character to an array
    let anotherSplitString = splitString.split('')

    //reverse the array
    let reverseString = anotherSplitString.reverse()

    //join the the array back to a string
    let joinedString = reverseString.join("")

    //if orginal string is the same value and type as the reverse string
    //then it is a palindrome
    if (splitString === joinedString){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome('hello'));
console.log(isPalindrome(`go hang a salami im a lasagna hog`));
console.log(isPalindrome(`racecar`));


//to do later:
//remove apostrophes
//force all letters to lowercase
