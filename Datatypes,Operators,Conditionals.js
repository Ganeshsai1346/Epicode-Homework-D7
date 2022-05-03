/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 
Data types basically specify what kind of data can be stored and manipulated within a program.
Main data types in Java script
      1.Numbers
      2.Strings
      3.Boolean
      4.undefined and null
1.Numbers: It can be any number. The number data type is used to represent positive or negative numbers with or without decimal place, or numbers written using exponential notation
We can represent number like below in JS
let integer = 10000000000000
let floatingPoint = 55.324556489
let negative = -13002568944

console.log(integer)
console/log(floatingPoint)
console.log(negative)

2.Strings: The string data type is used to represent text. Strings are created using single or double quotes
let javascript = "Most popular language in the world"

3.Boolean: The Boolean data type can hold only two values: true or false.
It is typically used to store values like yes (true) or no (false).
let boolean = true
let secondBoolean = false

4. undefined and null: 
undefined:
The undefined data type can only have one value-the special value undefined. If a variable has been declared, but has not been assigned a value, has the value undefined.

let b
console.log(b) \\ Output will be undefined

null: 
This is another special data type that can have only one value-the null value. A null value means that there is no value. 

let a = null
console.log(a) \\ output will be null
 */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/*  
Variable: Variables are used to store data, like string of text, numbers, etc. The data or value stored in the variables can be set, updated, and retrieved when we need.
 let name = "Ganesh"
 let age ="24"

 console.log(name) \\output will be Ganesh */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* 
let numberOne = 12
let  numberTwo= 20
console.log(numberOne + numberTwo) \\ putput will be 32

*/

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* 
 let x = 12
*/

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* 
let name = "John Doe"
*/

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* 
console.log(numberOne-x) \\ output will be 0
*/

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* 
let name1 = "john"
let name2 = "John"

console.log("is name1 is different than name 2" , name1 === name2) \\ output will be false

console.log("is john = John", name1.toLowerCase() === name2.toLowerCase() )

console.log()
*/

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/



let x = 5

if (x === 1 )

{
    console.log("Five")
}
else 
{
    console.log("None")
}



/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* 
*/

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/