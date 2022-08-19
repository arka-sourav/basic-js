let nums = [1, -1, 2, 3];

//get all positives
const filtered = nums.filter((n) => {
  return n >= 0;
});

console.log(filtered); //--> [1, 2, 3]
