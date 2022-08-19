const nums = [1, -1, 2, 3];

const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // this 0 is initial value of accumulator. If not assigned, initial value of accumulator is first element of array

console.log(sum); //--> 5
