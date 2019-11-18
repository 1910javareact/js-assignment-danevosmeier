/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }

    return fib(n-1) + fib(n-2)
    
}

// console.log(fib('a'));
// console.log(fib(-5));
console.log(fib(7));




//make console interactive

// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.on('line', (input) =>{
//     console.log();
//     fib(input)
// })


