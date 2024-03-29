/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if (sumNum === 0){
        return 1
    }
    //subtract one from the last number and run recursively
    return sumNum * factorial(sumNum - 1)
}

console.log(factorial(6));
