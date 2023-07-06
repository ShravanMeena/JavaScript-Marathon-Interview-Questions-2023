#  Difference Between Null & Undefined ?

In all programming languages you see null values but javscript has both "UNDEFINED" and "NULL" values. And Do not be confused in both. Not only you, even experienced developer also confuse in both.

So let's begin with undefined, Most of the languges have data types for variables and Yes javascript also has but at the time of variable declaration, there is no data type decides.When a value assign to a varibale then it decides data types, So before any values is assigned to a variable in javascript, the varibale conatains "undefined".
Let's see below code for more clearity and understanding.

```
    let x;
    let y = 21;

    console.log("value of x is " + x, "and typeof x " + typeof x) // output :  value of x is undefined and typeof undefined
    console.log("value of y is " + y, "and typeof y " + typeof y) // output : value of y is 21 and typeof y number
```

    "undefined" is a datatype in javascript

### What is typeof? 
    - typeof is a kind of operator which gives you the type of variable, that is the data type of a variable

Let's talk about null, So nill is exactoly same as other programming languges. null means nothing.When we have a varibale or object which we want to make empty then we assign "null" to a variable. and typeof null is object. You can see the below snippets


```
    let x = null;

    console.log("value of x is " + x, "and typeof x " + typeof x) // output :  value of x is null and typeof x object
```

It is time to compare both undefined and null. So undefined and null represents nothing-ness but the both contain different datatype

## Relative questions
 