var myNumbers = [1, 4, 9, 16, 25];
myNumbers.forEach(sqRoot);
function sqRoot(item, index, arr){
  arr[index] = Math.sqrt(arr[index]);
}
console.log(myNumbers);
