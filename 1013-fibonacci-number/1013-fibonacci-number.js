/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};