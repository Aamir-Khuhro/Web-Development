const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(sqaure);
function sqaure(item){
  return item **= 2;
}
console.log(`New Array is ${squaredNumbers}');
