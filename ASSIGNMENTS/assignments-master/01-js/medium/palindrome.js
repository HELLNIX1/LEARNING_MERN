/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // let a = 0;
  str = str.toLowerCase();
  let str2 = "";
  for(let i of str)
  {
    if(i >= 'a' && i<= 'z')
    {
      str2 += i;
    }
  }
  str = str2;
  console.log(str);
    for(let i = 0;i<(str.length)/2;i++)
    {
      console.log(str[i],str[str.length-i-1]);
      if(str[i] != str[str.length-i-1])
      return false;
    }
    
  return true;
}
console.log(isPalindrome("hello"));
module.exports = isPalindrome;
