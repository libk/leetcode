/**Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows > 0) {
        var result = [[1]];

        for(var i = 1; i < numRows; i++) {
            result[i] = [];
            for(var j = 0; j < i + 1;j++) {
                result[i][j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0);
            }
        }
        return result;
    }
    else {
        return [];
    }
};