const KEY = 101;
exports.KEY = KEY;
exports.encrypt = function encrypt(string) {
  const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                      "!", ".", ",", "@", ":", "#", "$", "%", "^", "&", "*", "(", ")", "{}", "[]", ";", "<", ">", "?", "/", " "];
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let ci;
    for (let j = 0; j < characters.length; j++) {
      if (string[i] === characters[j]) {
        ci = j;
        break;
      }
    }
    newString += (ci + KEY);
  }
  return newString;
};
exports.decrypt = function decrypt(string) {
  const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                      "!", ".", ",", "@", ":", "#", "$", "%", "^", "&", "*", "(", ")", "{}", "[]", ";", "<", ">", "?", "/", " "];
  let decrypted = "";
  for (let i = 0; i < string.length; i += 3) {
    let characterIndex = (string[i] + string[(i + 1)] + string[(i + 2)] - KEY);
    decrypted += characters[characterIndex];
  }
  return decrypted;
};
