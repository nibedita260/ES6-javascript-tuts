//foreach
var colors = ['red', 'green', 'blue']

function print(val) {
  console.log(val)
}

colors.forEach(print)

//map --> It just converts each array element to something else.
var colors = ['red', 'green', 'blue']

function capitalize(val) {
    return val.toUpperCase()
}

var capitalizedColors = colors.map(capitalize)

console.log(capitalizedColors)

//filter
var values = [1, 60, 34, 30, 20, 5]

function lessThan20(val) {
    return val < 20
}

var valuesLessThan20 = values.filter(lessThan20)

console.log(valuesLessThan20)

//find
var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]
  
  function teenager(person) {
      return person.age > 10 && person.age < 20
  }
  
  var firstTeenager = people.find(teenager)
  
  console.log('First found teenager:', firstTeenager.name)

  //every
  var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]
  
  function teenager(person) {
      return person.age > 0 && person.age <=50
  }
  
  var everyoneIsTeenager = people.every(teenager)
  
  console.log('Everyone is teenager: ', everyoneIsTeenager)

  //reduce--> each element in the array (from left to right), thus reducing it to a single value.
  var array = [1, 2, 3, 4]

function sum(acc, value) {
  return acc + value
}

function product(acc, value) {
  return acc * value
}

var sumOfArrayElements = array.reduce(sum, 5)
var productOfArrayElements = array.reduce(product, 2)

console.log('Sum of', array, 'is', sumOfArrayElements)
console.log('Product of', array, 'is', productOfArrayElements)
  