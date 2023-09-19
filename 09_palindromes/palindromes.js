const palindromes = function (word) {
// It removes characters that are not lowercase letters from 'a' to 'z' or numbers from '0' to '9'
const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "")
const newWord = word.split('').reverse().join('');
return newWord === word;
};
// Do not edit below this line
module.exports = palindromes;
