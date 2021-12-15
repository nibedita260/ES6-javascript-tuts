//template Literals

let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

//object literals
const color = 'red'
const point = {
  x: 5,
  y: 10,
  color,
  toString() {
    return 'X=' + this.x + ', Y=' + this.y + ', color=' + this.color
  },
  [ 'prop_' + 42 ]: 42
}

console.log('The point is ' + point)
console.log('The dynamic property is ' + point.prop_42)