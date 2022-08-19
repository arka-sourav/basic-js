//for primitive type array
const numbers = [1, 2, 3, 1, 4, 1];

console.log(numbers.indexOf(1, 2)); //--> 3 ...(search for element 1, starting from index 2)
console.log(numbers.lastIndexOf(1)); //---> 5
console.log(numbers.indexOf(9)); //---> -1

console.log(numbers.includes(5)); //--> false
console.log(numbers.includes(4)); //--> true

//-----------------------//

//for object type array
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course1 = courses.find((course) => {
  return course.name === "a";
});

const course1Index = courses.findIndex((course) => {
  return course.name === "a";
});

console.log(course1); //---> {id: 1, name: 'a'}
console.log(course1Index); //---> 0

const course2 = courses.find((course) => {
  return course.name === "xyz";
});

console.log(course2); //---> undefined
