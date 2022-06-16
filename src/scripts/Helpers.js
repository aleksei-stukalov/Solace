/**
 * @file Library of functions that to assist in general application function
 */

/**
 * @description Calls passed function immediately and then runs it on loop
 * executing as per the specified delay param
 * @param {Function} fn Function to execute
 * @param {Int} delay Time before executing function again.
 * @returns Value for clearinterval to call when clearing this function
 */
export function callIntervalImmediately(fn, delay) {
  fn();
  return setInterval(fn, delay);
}