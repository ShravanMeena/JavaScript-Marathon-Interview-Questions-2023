
In all programming languages you see null values but javscript has both "UNDEFINED" and "NULL" values. And Do not be confused in both. Not only you, even experienced developer also confuse in both.

So let's begin with undefined, Most of the languges have data types for variables and Yes javascript also has but at the time of variable declaration, there is no data type decides.When a value assign to a varibale then it decides data types, So before any values is assigned to a variable in javascript, the varibale conatains "undefined".
Let's see below code for more clearity and understanding.

```
    let x;
    let y = 21;

    console.log("value of x is " + x, "and typeof x " + typeof x) // output :  value of x is undefined and typeof undefined
    console.log("value of y is " + y, "and typeof y " + typeof y) // output : value of y is 21 and typeof y number
```