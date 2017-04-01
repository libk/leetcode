/**
 Implement strStr().

 Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var len1 = haystack.length;
    var len2 = needle.length;
    for(var i=0; ; i++) {
        for(var j=0; ; j++) {
            if(j == len2) return i;
            if(len2 > len1-i+1) return -1;
            if(haystack.charAt(i+j) != needle.charAt(j)) break;
        }
    }
};