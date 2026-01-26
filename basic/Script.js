console.log('Hello, World!');
// without any keyword
name = 'Ayushi';
console.log('My name is:', name);
y = 25;
console.log('The value of y is:', y);

// let 
let a = 10;
a = 3;
a = 5;
console.log('The value of a is:', a);

// const
const b = 15;
// b = 20; // This will cause an error
console.log('The value of b is:', b);

// var
var x = 5;
var x = 10;
var x = 20;
console.log('The value of x is:', x);

// Object
const Student = {
    name: 'Ayushi',
    age: 25,
    course: 'B.Tech',
    isPass: true,
    cgpa : 8.5
};
console.log('Student Details:', Student);

// operators and conditional statements 
let num1 = 10;
let num2 = 20;  
if (num1 < num2) {
    console.log(num1, 'is less than', num2);
} else {
    console.log(num1, 'is not less than', num2);
}
let sum = num1 + num2;
console.log('The sum of', num1, 'and', num2, 'is:', sum);   
let product = num1 * num2;
console.log('The product of', num1, 'and', num2, 'is:', product);   
let difference = num2 - num1;
console.log('The difference when', num1, 'is subtracted from', num2, 'is:', difference);   
let quotient = num2 / num1;
console.log('The quotient when', num2, 'is divided by', num1, 'is:', quotient);
let remainder = num2 % num1;
console.log('The remainder when', num2, 'is divided by', num1, 'is:', remainder);
let isEqual = (num1 === num2);
console.log('Is', num1, 'equal to', num2, '?', isEqual);
let isGreater = (num2 > num1);
console.log('Is', num2, 'greater than', num1, '?', isGreater);
let isLessOrEqual = (num1 <= num2);
console.log('Is', num1, 'less than or equal to', num2, '?', isLessOrEqual);
let isNotEqual = (num1 !== num2);
console.log('Is', num1, 'not equal to', num2, '?', isNotEqual);
let andCondition = (num1 < num2) && (num1 > 0);
console.log('Is', num1, 'less than', num2, 'AND greater than 0?', andCondition);
let orCondition = (num1 > num2) || (num1 < 15);
console.log('Is', num1, 'greater than', num2, 'OR less than 15?', orCondition);
let notCondition = !(num1 > num2);
console.log('Is it NOT true that', num1, 'is greater than', num2, '?', notCondition);

alert('hello');
let name1 = prompt('enter your name');
console.log('Your name is:', name1);

// loops and strings 
for (let i = 1; i <= 5; i++) {
    console.log('Iteration number:', i);
}
while (a < 15) {
    console.log('Current value of a in while loop:', a);
    a++;
}

do {
    console.log('Current value of a in do-while loop:', a);
    a++;
} while (a < 18);

//for ...of
let str1 = 'Ayushi';
for (let char of str1) {
    console.log('Character:', char);
}
// for ...in
let student ={
    name: 'Ayushi',
    age: 25,
    course: 'B.Tech',
    isPass: true
}
for (let key in student) {
    console.log(key + ':', student[key]);
}

// template literals
let obj = {
    name: 'Ayushi',
    age: 25,
    course: 'B.Tech'
}
let message = `Student Name: ${obj.name} is ${obj.age} years old and is enrolled in the ${obj.course} course.`;
console.log(message);

// String methods
let str = 'Hello, Ayushi!';
console.log('Original String:', str);
console.log('String Length:', str.length);
console.log('Uppercase String:', str.toUpperCase());
console.log('Lowercase String:', str.toLowerCase());
console.log('Character at index 7:', str.charAt(7));
console.log('Index of substring "Ayushi":', str.indexOf('Ayushi'));
console.log('Substring from index 7 to 13:', str.substring(7, 13));
console.log('String after replacing "Ayushi" with "World":', str.replace('Ayushi', 'World'));

// Arrays
let marks = [85, 90, 78, 92, 88];
console.log('Original Array:', marks, marks.length);
marks.push(95);
console.log('Array after pushing 95:', marks);
marks.pop();
console.log('Array after popping last element:', marks);
marks.shift();
console.log('Array after shifting first element:', marks);
marks.unshift(80);
console.log('Array after unshifting 80:', marks);
console.log('Array joined as string:', marks.join(', '));
marks.sort();
console.log('Sorted Array:', marks);
let filteredMarks = marks.filter(mark => mark > 85);
console.log('Filtered Array (marks > 85):', filteredMarks);
let mappedMarks = marks.map(mark => mark + 5);
console.log('Mapped Array (each mark + 5):', mappedMarks);
let totalMarks = marks.reduce((total, mark) => total + mark, 0);
console.log('Total Marks (using reduce):', totalMarks);
let foundMark = marks.find(mark => mark > 90);
console.log('First mark found greater than 90:', foundMark);
let hasHighMark = marks.some(mark => mark > 95);
console.log('Is there any mark greater than 95?:', hasHighMark);
let allAbove70 = marks.every(mark => mark > 70);
console.log('Are all marks above 70?:', allAbove70);
let slicedMarks = marks.slice(1, 4);
console.log('Sliced Array (index 1 to 3):', slicedMarks);
let splicedMarks = marks.splice(2, 2, 100, 105);
console.log('Array after splicing (removing 2 elements at index 2 and adding 100, 105):', marks);
console.log('Spliced Elements:', splicedMarks);

// Functions and methods
function greet() {
    console.log('Hello! Welcome to JavaScript programming.');
}
greet();

function myFunction(name){
    console.log('Hello, ' + name + '! Welcome to JavaScript programming.');
}
myFunction('Ayushi');

function addNumbers(num1, num2){
    return num1 + num2;
    console.log('This line will not be executed');
}
let result = addNumbers(10, 20);
console.log('The sum of 10 and 20 is:', result);

// Arrow function
const multiplyNumbers = (num1, num2) => {
    return num1 * num2;
}
let productResult = multiplyNumbers(5, 4);
console.log('The product of 5 and 4 is:', productResult);

// for each loop
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printval(val)
{
    console.log('Value:', val);
})