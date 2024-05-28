/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let dic = {};
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for(const i of str1)
    {
      if(!(i in dic))
      {
        dic[i] = 0;
      }
      dic[i] += 1;
    }
    for(const i of str2)
    {
      if(!(i in dic))
      {
        return false;
      }
      dic[i] -= 1;
    }
    for(const i in dic)
    {
      if(dic[i] != 0)
      return false;
    }
    return true;
}

module.exports = isAnagram;
