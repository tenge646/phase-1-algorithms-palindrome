function isPalindrome(word) {
  // Write your algorithm here
  
    // Remove spaces and convert to lowercase
    word = word.replace(/\s/g, '').toLowerCase();
    
    // Initialize pointers
    let start = 0;
    let end = word.length - 1;
    
    // Compare characters
    while (start < end) {
        if (word[start] !== word[end]) {
            return false;
        }
        start++;
        end--;
    }
    
    return true;
}

/* 
  Add your pseudocode here
*/
// Function isPalindrome(word):
//     1. Remove spaces and convert the 'word' to lowercase.
//     2. Initialize two pointers, 'start' and 'end', pointing to the first and last characters of the 'word' respectively.

//     3. While 'start' is less than 'end':
//         4. If 'word[start]' is not equal to 'word[end]':
//             5. Return false (it's not a palindrome).
//         6. Increment 'start' by 1.
//         7. Decrement 'end' by 1.

//     8. If the loop completes without returning false:
//         9. Return true (it's a palindrome).
// /*
//   Add written explanation of your solution here
// The first step is to preprocess the input word. This involves removing spaces and converting all characters to lowercase
// Two pointers, start and end, are initialized. start points to the beginning of the word, and end points to the end of the word.
// the algorithm uses a while loop that continues until start is less than end. Inside the loop, it compares the characters at the start and end positions in the word
// If the loop completes without ever returning false, it means that all character pairs in the word matched, and the word is a palindrome. In this case, the function returns true.
// The function is tested with various test cases, including examples of palindromes and non-palindromes, to verify its correctness
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("robot"));   // false
console.log(isPalindrome("A man a plan a canal Panama")); // true (ignoring spaces and capitalization)
console.log(isPalindrome("hello"));   // false

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
