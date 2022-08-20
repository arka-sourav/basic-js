function sum() {
  let total = 0;
  console.log("arguments", arguments); //---> Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  for (let val of arguments) total += val;
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); //---> 15
