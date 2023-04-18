// Que: Have the function StringChallenge(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
// Once your function is working, take the final output string and remove any characters (case-insensitive) from it that appear in your ChallengeToken. If the new final string is empty, return the string EMPTY.

// Your ChallengeToken: b5039rk1d
// Examples
// Input: "aabbcde"
// Output: 2a2b1c1d1e
// Final Output: 2a2ce
// Input: "wwwbbbw"
// Output: 3w3b1w
// Final Output: ww
// Browse Resources
// Search for any help or documentation you might need for this problem. For example: array indexing, Ruby hash tables, etc.

function StringChallenge(str) {
    // Run-length encoding
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        result += count + str[i];
        count = 1;
      }
    }
  
    // Remove characters from ChallengeToken
    const ChallengeToken = 'b5039rk1d';
    for (let i = 0; i < ChallengeToken.length; i++) {
      const char = ChallengeToken[i];
      result = result.replace(new RegExp(char, 'gi'), '');
    }
  
    // Return final output or 'EMPTY'
    return result ? result : 'EMPTY';
  }