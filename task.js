// Problem 1

var fruits = ['Apple', 'Banana', 'Orange']
// a. Find the index of 'Banana'
var element = fruits[1];
//console.log(element);

// b. Replace 'Banana' with 'Mango'
fruits[1] = 'Mango';
//console.log(fruits);

// Last element remove
fruits.pop();
//console.log(fruits);

// added element
fruits.push('Watermelone');
//console.log(fruits);

// Problem 2
/**
 * You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56and John's total score is 40. The grading chart is

80 or above A grade

60 or above B grade

50 or above C grade

40 or above D grade

39 or less => F grade

Write a program to find your and your friends' grades using if-else.


 */

var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var jhoneScore = 40;

function calculateGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 60) {
        return 'B';
    } else if (score >= 50) {
        return 'C';
    } else if (score >= 40) {
        return 'D';
    } else {
        return 'F';
    }
}

// console.log("Your grade: " + calculateGrade(myScore));
// console.log("Tom's grade: " + calculateGrade(tomScore));
// console.log("Jane's grade: " + calculateGrade(janeScore));
// console.log("Peter's grade: " + calculateGrade(peterScore));
// console.log("John's grade: " + calculateGrade(jhoneScore));


// Problem 3
/**
 * 1. You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.

2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.

Isosceles => two sides are equal
 */

// Given numbers
var num1 = 13;
var num2 = 79;
var num3 = 45;

// Find the largest number
var largestNumber;

if (num1 >= num2 && num1 >= num3) {
    largestNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largestNumber = num2;
} else {
    largestNumber = num3;
}

// Output the result
console.log("The largest number is: " + largestNumber);

// Given sides of the triangle
var side1 = 9;
var side2 = 8;
var side3 = 9;

// Check if it's an Isosceles triangle
if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("The triangle is Isosceles.");
} else {
    console.log("The triangle is not Isosceles.");
}
