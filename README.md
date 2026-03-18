Answer of question 1:

var, let , const are used to declare the variable in Javascript
By declare a variable with let , reassignment can be possible in these variable. Thus any variable need to update, we prefer to use let
In case of const , the variable declared by const are not possible to reassign . Thus to hold any constant data we have to use const 
In var, the variable can be reassign , but it behaves differently in various cases , so it a preferable in modern Javascript to use let and const .



Answer of the question 2:

The spread operator is used to expand elements of any array or object . In case of copy , marge array or the element of object passing individually we have to spread operator . 
This spread operator features of javascript make the code cleaner and developer use it for cleaner data manipulation 




Answer to the question of 3:

map() creats a  newArray by transforming each element based on give function.
filter() returns the new Array by of those element which passes the condition. 
forEach() passes the array as it is , it many use to do passes element of array one by one.
Thus in case of taking any manipulation of array’s element we have to use map() and filter(), but if we need to just pass the array’s items as it is we use forEach().



Answer to the question of  4 :

A shorter way to writing function use in javascript by developer by using this => syntax. The main idea of using this is to make the code cleaner and readable .
For example     const add = (a , b) => a + b ;
There is function name add , which take two parameter name a, b and after getting those values it just sum them up and return the values of there sum.
Because of the easy way , this function syntax is widely used 



Ans to the question no 5 :

Template literals is the modern way of creating the JavaScript string by using backticks (``).
Instead of using double and single quotes we use backticks as it give the opportunity to change any part of string to change dynamically. As it also support the multiline string, it the best choice for developer to create the string 
