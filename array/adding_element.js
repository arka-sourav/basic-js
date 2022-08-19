const numbers = [3, 4];

//End
numbers.push(5, 6); //---> [3,4,5,6]

//Beginning
numbers.unshift(1, 2); //---> [1,2,3,4,5,6]

//Middle
numbers.splice(2, 0, "a", "b"); //-->.splice(startIndx, no of items to be deleted, ...items to be added at that index)

console.log(numbers); //--> [1, 2, 'a', 'b', 3, 4, 5, 6]
