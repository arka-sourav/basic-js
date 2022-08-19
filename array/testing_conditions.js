let nums = [1, 2, 3];

const isAllPositive = nums.every((val) => {
  return val >= 0;
});
console.log(isAllPositive); //--> true

nums = [1, -1, 2, 3];
const isAllPositive1 = nums.every((val) => {
  return val >= 0;
});
console.log(isAllPositive1); //--> false

const atLeastOnePostive = nums.some((val) => {
  return val >= 0;
});
console.log(atLeastOnePostive); //--> true
