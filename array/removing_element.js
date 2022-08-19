let numbers = [1, 2, 3, 4];

//End
const last = numbers.pop();
console.log(last); //--> 4
console.log(numbers); //-->  [1, 2, 3]

//Beginning
numbers = [1, 2, 3, 4];
const first = numbers.shift();
console.log(first); //--> 1
console.log(numbers); //-->  [2, 3, 4]

//Middle
numbers = [1, 2, 3, 4];
const removedItems = numbers.splice(1, 2);
console.log(numbers); //-->  [1, 4]
console.log("removedItems", removedItems); //--> [2, 3]

//to empty an array
numbers.length = 0;
console.log(numbers); //--> []
