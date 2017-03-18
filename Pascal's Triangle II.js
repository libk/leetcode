/**
 Given an index k, return the kth row of the Pascal's triangle.

 For example, given k = 3,
 Return [1,3,3,1].
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var arr = [1];
    for(var i=1; i<=rowIndex; i++) {
        arr[i] = 0;
        for(var j=i; j>0; j--) {
            arr[j] += arr[j-1];
        }
    }
    return arr;
};