const prompt = require("prompt-sync")();



// var v = prompt("Enter something");
// console.log("You entered:", v);
// var a=parseInt(prompt("enter first number"));
// var b=parseInt(prompt("enter second number"));
// var sum=a+b;
// console.log("Sum="+sum);

// var p=parseInt(prompt("enter Principal amount (P)"));
// var r=parseFloat(prompt("enter Interest rate (R)"));
// var n=parseInt(prompt("enter Number of years (n)"));
// var si=(p*r*n)/100;
// console.log("Simple Interest:",si);

// var p=parseInt(prompt("enter your mark"));
// if(p>=50){
//     console.log("passed");

// }
// else{
//     console.log("failed");

// }

// var p=parseInt(prompt("enter your mark"));
// if(p>90){
//     console.log("grade:A");

// }
// else if(p>79){
//         console.log("grade:B");

// }
// else if(p>69){
//         console.log("grade:c");

// }
// else if(p>59){
//         console.log("grade:d");

// }
// else if(p>49){
//         console.log("grade:e");

// }
// else{
//     console.log("failed");

// }

// var a=parseInt(prompt("enter first number"));
// switch(a){
//     case 1:
//         console.log("sunday");
//         break;

//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     default:
//         console.log("Enter 1-6");
//         break;
// }

// let num = parseInt(prompt("Enter a number:"));

// if (!isNaN(num)) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i + " x " + num + " = " + (i * num));
//   }
// } else {
//   console.log("Please enter a valid number.");
// }

// let limit = parseInt(prompt("Enter a limit"));
// let sum = 0;
// for (let i = 1; i <= limit; i += 2) {
//   sum += i;
// }
// console.log("Sum of odd numbers:", sum);

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j + " ";
//   }
//   console.log(row.trim());
// }

// var size = parseInt(prompt("Enter the size of arrays"));
// var a1 = [];
// var a2 = [];
// var i;

// for (i = 0; i < size; i++) {
//   a1[i] = prompt("Enter value " + (i + 1) + " for Array 1");
// }

// for (i = 0; i < size; i++) {
//   a2[i] = prompt("Enter value " + (i + 1) + " for Array 2");
// }

// for (i = 0; i < size; i++) {
//   var temp = a1[i];
//   a1[i] = a2[i];
//   a2[i] = temp;
// }

// console.log("Array1: " + a1.join(", "));
// console.log("Array2: " + a2.join(", "));

// var size = parseInt(prompt("Enter the size of an array"));
// var arr = [];
// var i, count = 0;

// for (i = 0; i < size; i++) {
//   arr[i] = parseInt(prompt("Enter value " + (i + 1)));
//   if (arr[i] % 2 === 0) {
//     count++;
//   }
// }

// console.log("Number of even numbers in the given array is " + count);

// var size = parseInt(prompt("Enter the size of an array"));
// var arr = [];
// var i, j;

// for (i = 0; i < size; i++) {
//   arr[i] = parseInt(prompt("Enter value " + (i + 1)));
// }

// for (i = 0; i < size - 1; i++) {
//   for (j = i + 1; j < size; j++) {
//     if (arr[i] < arr[j]) {
//       var temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// console.log("Sorted array: " + arr.join(", "));

// var str = prompt("Enter a string");
// var rev = "";
// var i;

// for (i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
// }

// if (str === rev) {
//   console.log("Entered string is a palindrome");
// } else {
//   console.log("Entered string is not a palindrome");
// }

// var size = parseInt(prompt("Enter the size of arrays"));
// var a1 = [];
// var a2 = [];
// var sum = [];
// var i, j;

// for (i = 0; i < size; i++) {
//   a1[i] = [];
//   for (j = 0; j < size; j++) {
//     a1[i][j] = parseInt(prompt("Enter value for Array 1 at [" + i + "][" + j + "]"));
//   }
// }

// for (i = 0; i < size; i++) {
//   a2[i] = [];
//   for (j = 0; j < size; j++) {
//     a2[i][j] = parseInt(prompt("Enter value for Array 2 at [" + i + "][" + j + "]"));
//   }
// }

// for (i = 0; i < size; i++) {
//   sum[i] = [];
//   for (j = 0; j < size; j++) {
//     sum[i][j] = a1[i][j] + a2[i][j];
//   }
// }

// console.log("Sum of 2 arrays is:");
// for (i = 0; i < size; i++) {
//   console.log(sum[i].join(" "));
// }

// function main() {
//   var size = parseInt(prompt("Enter the size of the array"));
//   var arr = [];
//   getArray(arr, size);
//   displayArray(arr, size);
// }

// function getArray(arr, size) {
//   var i;
//   for (i = 0; i < size; i++) {
//     arr[i] = prompt("Enter value " + (i + 1));
//   }
// }

// function displayArray(arr, size) {
//   var i;
//   var output = "";
//   for (i = 0; i < size; i++) {
//     output += arr[i] + " ";
//   }
//   console.log("Array values: " + output.trim());
// }

// main();

// var num = parseInt(prompt("Enter a number"));
// var i, count = 0;

// for (i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     count++;
//   }
// }

// if (count === 2) {
//   console.log("Entered number is a Prime number");
// } else {
//   console.log("Entered number is not a Prime number");
// }

// var wt = parseInt(prompt("Written test ="));
// var lab = parseInt(prompt("Lab exams ="));
// var assign = parseInt(prompt("Assignments ="));
// var grade = (wt * 70) / 100 + (lab * 20) / 100 + (assign * 10) / 100;
// console.log("Grade of the student is " + grade);

// var income = parseFloat(prompt("Enter the annual income"));
// var tax = 0;

// if (income > 250000 && income <= 500000) {
//   tax = (income - 250000) * 0.05;
// } else if (income > 500000 && income <= 1000000) {
//   tax = (250000 * 0.05) + (income - 500000) * 0.20;
// } else if (income > 1000000 && income <= 5000000) {
//   tax = (250000 * 0.05) + (500000 * 0.20) + (income - 1000000) * 0.30;
// }

// console.log("Income tax amount = " + tax.toFixed(2));

// var num = 1;
// var i, j;

// for (i = 1; i <= 4; i++) {
//   var row = "";
//   for (j = 1; j <= i; j++) {
//     row += num + "\t";
//     num++;
//   }
//   console.log(row);
// }

// var size = parseInt(prompt("Enter the array limit"));
// var arr = [];
// var result = [];
// var i;

// for (i = 0; i < size; i++) {
//   arr[i] = parseInt(prompt("Enter value " + (i + 1)));
// }

// for (i = 0; i < size - 1; i++) {
//   result[i] = arr[i] * arr[i + 1];
// }

// for (i = 0; i < result.length; i++) {
//   console.log(result[i]);
// }

// var a1 = [];
// var a2 = [];
// var sum = [];
// var size;

// function g(arr) {
//   var i, j;
//   for (i = 0; i < size; i++) {
//     arr[i] = [];
//     for (j = 0; j < size; j++) {
//       arr[i][j] = parseInt(prompt("Enter value at [" + i + "][" + j + "]"));
//     }
//   }
// }

// function a() {
//   var i, j;
//   for (i = 0; i < size; i++) {
//     sum[i] = [];
//     for (j = 0; j < size; j++) {
//       sum[i][j] = a1[i][j] + a2[i][j];
//     }
//   }
// }

// function d() {
//   var i, j;
//   console.log("Sum of array 1 and array 2:");
//   for (i = 0; i < size; i++) {
//     var row = "";
//     for (j = 0; j < size; j++) {
//       row += sum[i][j] + "\t";
//     }
//     console.log(row);
//   }
// }

// function m() {
//   size = parseInt(prompt("Enter the size of array"));
//   g(a1);
//   g(a2);
//   a();
//   d();
// }

// m();

// var arr = [];
// var size;

// function g() {
//   var i, j;
//   for (i = 0; i < size; i++) {
//     arr[i] = [];
//     for (j = 0; j < size; j++) {
//       arr[i][j] = parseInt(prompt("Enter value at [" + i + "][" + j + "]"));
//     }
//   }
// }

// function displayArray() {
//   var i, j;
//   console.log("Array elements are:");
//   for (i = 0; i < size; i++) {
//     var row = "";
//     for (j = 0; j < size; j++) {
//       row += arr[i][j] + "\t";
//     }
//     console.log(row);
//   }
// }

// function main() {
//   size = parseInt(prompt("Enter the size of array"));
//   g();
//   displayArray();
// }

// main();



// var my_string = prompt("Enter a value");

// try {
//   my_string = my_string.split("").reverse().join("");
//   console.log("Reversed string is : " + my_string);
// } catch (err) {
//   console.log("Error : " + err.message);
// }

// function myFilter(myArray, callback) {
//   var sum = 0;
//   for (var i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
//   }
//   callback(sum);
//   return sum;
// }

// function checkEven(sum) {
//   return sum % 2 === 0;
// }

// var input = prompt("Enter a number");
// var arr = input.split("").map(Number);

// var result = myFilter(arr, checkEven);
// console.log(result);









// var library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     readingStatus: true,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false,
//   },
// ];

// var book = prompt("Enter book name : ");
// for (let i = 0; i <= library.length - 1; i++) {
//   if (library[i].title == book) {
//     if (library[i].readingStatus == true) {
//       console.log("you need to read",book,"by",library[i].author);
//       break;
//     } else {
//       console.log("Already read");
//       break;
//     }
//   } else {
//     console.log("No book found");
//     break;
//   }
// }





// var h= parseInt(prompt("Enter your height :"));
// try{
//     if(isNaN(h)) throw "not a number";
//     if(h>10) throw "over";
//     if(h<10) throw "tiny";
// }
// catch(err){
//     console.log("input is : "+err);
    
// }

