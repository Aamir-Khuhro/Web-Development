// Taking out the even numbers from an array
let arr = [23, 52, 66, 13, 45, 79];
let evenNums = arr.filter(testEven);
function testEven(item){
  if(item % 2 == 0){
    return item;
  }
}
