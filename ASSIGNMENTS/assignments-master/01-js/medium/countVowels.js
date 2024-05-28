/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    let count = 0;
    for(let i of str)
    {
      if(arr.includes(i))
      {
        count += 1;
      }
      
    }
    return count;
}
// console.log(countVowels('Hello, world!'));
module.exports = countVowels;
