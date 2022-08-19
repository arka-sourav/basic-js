const nums = [1, 2, 3, 4, 5];

const joined = nums.join(", ");
console.log(joined); //--> 1, 2, 3, 4, 5

//----------------------------------------------------------------

const message = "This is my message";
const parts = message.split(" ");
console.log(parts); //--> ['This', 'is', 'my', 'message']

const combined = parts.join("-");
console.log(combined); //--> This-is-my-message
