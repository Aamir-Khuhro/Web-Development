// Doubling the elements in array using forEach
let arr = [2, 3, 5, 6];
arr.forEach(doubler);
function doubler(item, i, arr){
    arr[i] = 2 * arr[i];
}
console.log(arr);
