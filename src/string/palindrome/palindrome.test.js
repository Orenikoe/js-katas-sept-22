const isPalindrome = require("./palindrome");

test("isPalindrome function exists", () => {
  expect(typeof isPalindrome).toBe("function");
});

test("isPalindrome as one parameter", () => {
  expect(isPalindrome.length).toBe(1);
});

// TODO add your tests here

test("word is palindrome", () => {
  expect(isPalindrome('kayak')).toBe(true);
  expect(isPalindrome("")).toBe(true);
  expect(isPalindrome(null)).toBe(true);
});

test("word is not palindrome", () => {
  expect(isPalindrome('toast')).toBe(false);
  expect(isPalindrome('rottot')).toBe(false);
});

