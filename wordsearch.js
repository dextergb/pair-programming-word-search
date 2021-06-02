// For this challenge, you'll be implementing a word search solver,
// as a function that receives a 2D array of letters and a word. The function must:
// 1. Check to find the word horizontally and vertically
// 2. Return true if the word is found, and return false if the word is not found

const wordSearch = (letters, word) => {
  if (letters.lenght === 0) {
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const transposedArray = transpose(letters);
  const verticalJoin = transposedArray.map((ls) => ls.join(""));
  for (let w of verticalJoin) {
    if (w.includes(word)) {
      return true;
    }
  }
  return false;
};

const transpose = function (matrix) {
  let array = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let array1 = [];
    for (let j = 0; j < matrix.length; j++) {
      array1.push(matrix[j][i]);
    }
    array.push(array1);
  }
  return array;
};

module.exports = wordSearch;
