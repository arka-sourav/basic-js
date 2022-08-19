const nums = [1, 2, 3];

//double every element
const mapped = nums.map((n) => {
  return 2 * n;
});

console.log(mapped); //--> [2, 4, 6]
console.log(nums); //--> [1, 2, 3]
