/**
 Given two strings s and t, write a function to determine if t is an anagram of s.

 For example,
 s = "anagram", t = "nagaram", return true.
 s = "rat", t = "car", return false.

 Note:
 You may assume the string contains only lowercase alphabets.

 Follow up:
 What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false;
    }

    var hashTable = {};
    for(var i=0; i<s.length; i++) {
        if(hashTable[s.charAt(i)] === undefined) hashTable[s.charAt(i)] = 0;
        hashTable[s.charAt(i)]++;
        if(hashTable[t.charAt(i)] === undefined) hashTable[t.charAt(i)] = 0;
        hashTable[t.charAt(i)]--;
    }
    for(var j in hashTable) {
        if(hashTable[j] !== 0) return false;
    }

    return true;
};