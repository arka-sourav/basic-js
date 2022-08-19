//for primitive
let nums = [1, 3, 2];

nums.sort();
console.log(nums); //--> [1, 2, 3]

nums = [1, 3, 2];
nums.reverse();
console.log(nums); //--> [2, 3, 1]

//----------------------------------------------------------------

//for objects

const courses = [
  { id: 1, name: "Maths" },
  { id: 2, name: "Bio" },
];

//sort according to name
courses.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(courses); //--> [{id: 2, name: 'Bio'}, {id: 1, name: 'Maths'}]
