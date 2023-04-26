let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach(adder);
function adder(item){
  sum += item;
}
console.log(`The sum of numbers is ${sum}`);
