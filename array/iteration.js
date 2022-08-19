const nums = [1, 2, 3, 4, 5];

for (let num of nums) {
  console.log(num);
}

for (let index in nums) {
  console.log(index, nums[index]);
}

nums.forEach((num) => console.log(num));
nums.forEach((num, index) => console.log(num, index));
