/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  
  //bitwise operator to switch between 0 and 1
  //0 will return falsey, 1 will return truthy
  if(someNum & 1){
      return false
  }
  else{
      return true
  }
}

console.log(isEven(7));
console.log(isEven(8));
