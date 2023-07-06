#  Difference between Rest and Spread operator?

The Rest operator and the Spread operator are both introduced in ES6 (ECMAScript 2015) and are used in JavaScript for different purposes.

The Rest operator, represented by the ellipsis (...) syntax, is used to gather the remaining arguments or elements into an array. It allows a function to accept any number of arguments as an array. For example:

```
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15




Handle named parameters?
function exampleFunction(a, b, ...rest) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("rest:", rest);
}

exampleFunction(1, 2, 3, 4, 5);

```

In this example, the Rest operator (...numbers) gathers all the arguments passed to the `sum` function and stores them as an array in the `numbers` parameter.


On the other hand, the Spread operator, also represented by the ellipsis (...) syntax, is used to spread the elements of an array or object into individual elements. It allows us to expand an iterable (like an array) into multiple elements. For example:

```
const numbers = [1, 2, 3, 4, 5];
console.log(...numbers); // Output: 1 2 3 4 5

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
console.log(array2); // Output: [1, 2, 3, 4, 5]
```

In the first example, the Spread operator is used to spread the elements of the numbers array into individual elements when logging them.

In the second example, the Spread operator is used to spread the elements of array1 into individual elements and then combine them with additional elements to create a new array array2.

So, to summarize, the Rest operator is used for gathering function arguments into an array, while the Spread operator is used for spreading the elements of an array or object into individual elements.