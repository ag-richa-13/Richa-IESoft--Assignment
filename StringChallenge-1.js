// Que: String Challenge
// Have the function StringChallenge(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Once your function is working, take the final output string and remove any characters (case-insensitive) from it that appear in your ChallengeToken. If the new final string is empty, return the string EMPTY.

// Your ChallengeToken: b5039rk1d
// Examples
// Input: "fun&!! time"
// Output: time
// Final Output: time
// Input: "I love dogs"
// Output: love
// Final Output: love
// Browse Resources
// Search for any help or documentation you might need for this problem. For example: array indexing, Ruby hash tables, etc.




function StringChallenge(sen) {
  // Remove all non-alphanumeric characters and split the string into words
  const words = sen.replace(/[^a-zA-Z0-9\s]/g, '').split(' ');

  let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // If the current word is longer than the previous longest word
    // or there's a tie but the current word comes first in the string
    if (word.length > longestWord.length || (word.length === longestWord.length && sen.indexOf(word) < sen.indexOf(longestWord))) {
      longestWord = word;
    }
  }

  // Remove any characters from the longest word that appear in the ChallengeToken
  const filteredWord = longestWord.replace(new RegExp(`[${ChallengeToken.toLowerCase()}]`, 'gi'), '');
  
  // If the filtered word is empty, return 'EMPTY', otherwise return the filtered word
  return filteredWord.length > 0 ? filteredWord : 'EMPTY';

  return sen;
}

const ChallengeToken = 'b5039rk1d';