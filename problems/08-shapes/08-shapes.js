/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  
  switch(shape){
    
    case `Square`:{
      
      //height
      for(let i = 0; i < height; i++){
        let line = ``

        //width
        //square has the same height and width
        for(let j = 0; j < height; j++){
          line += character
        }
        
        console.log(line);
      }
      break
    }

    case `Triangle`:{

      //height
      for(let i = 0; i < height; i++){
        let line = ``

        //each new line add one more character
        for(let j = 0; j < 1 + i; j++){
          line += character
        }

        console.log(line);
      }
      break
    }

    case `Diamond`:{
      //find the middle
      let middle = height / 2
      let charactersArray = []

      //populate array with placeholders
      for (let i = 0; i < height; i++){
        charactersArray[i] = ` `
      }

      for(let i = 0; i < middle; i++){
        charactersArray[Math.trunc(middle)] = character
        charactersArray[Math.trunc(middle) - i] = character
        charactersArray[Math.trunc(middle) + i] = character
        let line = charactersArray.reduce((accum, ele) =>{
          return accum + ele
        })
        console.log(line);
        
      }

      for(let i = Math.trunc(middle); i > 0; i--){
        charactersArray[Math.trunc(middle) - i] = ` `
        charactersArray[Math.trunc(middle) + i] = ` `
        let line = charactersArray.reduce((accum, ele) =>{
          return accum + ele
        })
        console.log(line);
        
      }
      break

    }
    default:
      console.log(`Shape unknown`);
      break
      
  }
}

printShape(`Square`, 4, '#')
printShape(`Triangle`, 6, '&')
printShape(`Diamond`, 5, '%')
printShape('Ellipse', 4, "*")