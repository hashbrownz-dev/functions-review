/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

const maxOfTwoNumbers = (num1, num2) => {
  // ADD YOUR CODE HERE
  if(num2 > num1){
    return num2
  } else {
    return num1
  }
};

console.log(maxOfTwoNumbers(3,8));

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
const maxOfThree = (num1, num2, num3) => {
  // ADD YOUR CODE HERE
  let max = num1;
  if(num2 > max) max = num2;
  if(num3 > max) max = num3;
  return max;
};

console.log(maxOfThree(3,8,5));

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
const isCharacterAVowel = (char) => {
  // ADD YOUR CODE HERE
  return ['a','e','i','o','u'].includes(char);
};

const letters = ['a','b','c','d','e','f'];

for(const letter of letters){
  console.log( isCharacterAVowel(letter) ? `${letter} is a vowel!` : `${letter} is not a vowel!`);
}

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

const sumArray = (arr) => {
  // ADD YOUR CODE HERE
  let sum = 0;
  arr.forEach((num) => sum += num);
  return sum;
};

console.log(sumArray([1,2,3,4]));

const multiplyArray = (arr) => {
  // ADD YOUR CODE HAIR
  let product = 1;
  arr.forEach((num) => product *= num);
  return product;
}

console.log(multiplyArray([1,2,3,4]))

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

function howManyArguments(){
  return arguments.length;
}

console.log(howManyArguments('a','b','c','d'))

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = (str) => {
  // ADD YOUR CODE HERE
  return str.split('').reverse().join('');
};

console.log(reverseString('jag testar'));

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
const findLongestWord = (arr) => {
  // ADD YOUR CODE HERE
  let longest = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i].length > longest.length) longest = arr[i];
  }
  return longest
};

console.log(findLongestWord(['fart','tree','chalk']));

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
const filterLongWords = (arr, i) => {
  // ADD YOUR CODE HERE
  return arr.filter((word) => word.length > i)
};

console.log(filterLongWords(['chalk','board','flat','map','tree'], 3));
