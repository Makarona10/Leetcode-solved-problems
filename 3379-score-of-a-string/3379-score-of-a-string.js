/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let r = 0;
    for (let x = 0; x < s.length - 1; x++) { 
        r += Math.abs(s[x].charCodeAt() - s[x + 1].charCodeAt());
    }
    return r;
};