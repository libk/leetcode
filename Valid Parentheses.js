/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = [];
    for(var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if(c == "(") arr.push(")");
        else if(c == "[") arr.push("]");
        else if(c == "{") arr.push("}");
        else if(!arr.length || arr.pop() != c) return false;
    }
    if(arr.length) return false;
    else return true;
};