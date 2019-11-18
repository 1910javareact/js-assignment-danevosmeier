/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    
    //make a new array to avoid side effects
    let splicedArray = [...someArr]
    
    //move all elements after index down one spot
    for (let i = index; i < splicedArray.length; i++){
        splicedArray[i] = newArray[i + 1]
    }

    //remove the empty spot at the end
    splicedArray.pop()

    return splicedArray
}

let newArray = [5, 8, 1, 6, 2, 7]

console.log(spliceElement(newArray, 3));
