const first = [1, 2, 3];
const second = [4, 5];

const combined = first.concat(second);
console.log(combined); //--> [1, 2, 3, 4, 5]

const slice = combined.slice(2, 4); //(take from index 2(including index 2) to index 4(excluding index 4))
console.log(slice); //--> [3, 4]

//----OR--------------------------------
const combined1 = [...first, ...second];
console.log(combined1); //--> [1, 2, 3, 4, 5]

const combined2 = [...first, "x", ...second, "y"];
console.log(combined2); //--> [1, 2, 3, 'x', 4, 5, 'y']
