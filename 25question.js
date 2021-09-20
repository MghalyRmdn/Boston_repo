//  Number 1 
/* A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console after some operations have been completed. */

function modifyArray(arr, callback){
    arr.push(100);
    callback();
}

let arr = [1 , 2 , 3, 4 , 5];

modifyArray(arr, function(){
//     console.log('array has been modified' , arr);
})

// Number 2 
// Given a string,reverse each word in the sentence
const string = "Welcome to this Javascript Guide!";

const reverseEntireSentence = reverseBySeparator(string, "");

const reveseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string , separator){
    return string.split(separator).reverse().join(separator);
}

// how to empty array in javascript
let arrayList = ['andi' , 'budi' , 'chika' , 'dana' , 'erwin' , 'falco'];
arrayList=[]; // method 1
arrayList.length = 0; // method 2
arrayList.splice(0, arrayList.length); // method 3

// program to add character forward of the letter
const moveCharForward = (str) => 
str.split('')
.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
.join('');

// console.log(moveCharForward('abcd'))

// program to show current date 
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

// console.log(today.toLocaleDateString("id-ID")); // 9/17/2016

const formatDate  = (date = new Date()) => {
    const days      = date.getDate();
    const months    = date.getMonth() + 1;
    const years     = date.getFullYear(); 
    return `${days}-${months}-${years}`;
}

// console.log(formatDate());

/* Write a Javascript porgram to create a new string adding "!New" in front of given string.
if the given stirng begins with !New already then return the original string.*/

const addNew = (str) => str.indexOf('!New') === 0 ? str : `New ${str}`;

// console.log(addNew('persimpak pakjuang'));

// Write a Javascript program to extract the first half of a string of even length.

const firstHalf = (str) => str.slice(0, str.length  / 2);
