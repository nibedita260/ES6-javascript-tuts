//spread

var array = ['red', 'blue', 'green']
var copyOfArray = [...array]

console.log('Copy of', array, 'is', copyOfArray)
console.log('Are', array, 'and', copyOfArray, 'same?', array === copyOfArray)

//merge arrays
var userDefinedColors = ['yellow', 'orange']

var mergedColors = [...copyOfArray, ...userDefinedColors]
console.log(mergedColors)

//Rest
function printColors(first, second, third, ...others) {
    console.log('Top three colors are ' + first + ', ' + second + ' and ' + third + '. Others are: ' + others)
  }
  printColors('yellow', 'blue', 'orange', 'white', 'black')