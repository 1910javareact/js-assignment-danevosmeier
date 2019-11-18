/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    //double loop to compare each element to one another
    for (let i = 0; i < numArray.length; i++){
        for (let j = 0; j < numArray.length; j++){

            //if the element is larger than the next, move it
            if (numArray[j] > numArray[j + 1]){
                let temp = numArray[i]
                numArray[i] = [i + 1]
                numArray[i + 1] = temp
            }
        }
    }
    return numArray
}

let myArray = [5, 3, 8, 2, 6, 0]
console.log(bubbleSort(myArray));


//to do later:
//remove side effects