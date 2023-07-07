// RESR OPERATOR
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  
  
//   Handle named parameters?
  function exampleFunction(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
  }
  exampleFunction(1, 2, 3, 4, 5);

// SPREAD OPERATOR
// const numbers = [1, 2, 3, 4, 5];
// console.log(...numbers); // Output: 1 2 3 4 5

// const array1 = [1, 2, 3];
// const array2 = [...array1, 4, 5];
// console.log(array2); // Output: [1, 2, 3, 4, 5]