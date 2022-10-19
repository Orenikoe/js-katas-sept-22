/*
A palindrome is a word or a phrase that reads the same backwards as forwards, example. madam.

Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true

Add you own tests.

*/

// TODO add your code here

function isPalindrome(word) {
let txt = word;

while ( word !== "" && word !== null && txt.length > 1) {
if (txt.charAt(0) === txt.charAt(txt.length - 1)) {
let sliced = txt.substring(1,txt.length -1)
txt = sliced;

} else {
    return false
}

}
return true;

}



module.exports = isPalindrome;
