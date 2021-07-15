function caesar(plaintext, key) {
  if (key == 0) {
    return plaintext;
  }

  const textArray = plaintext.toLowerCase().split('');

  const cipher = textArray.map(char => {
    const charCode = char.charCodeAt(0);
    
    if (charCode >= 97 && charCode <= 122) {
      const newChar = String.fromCharCode(((charCode - 97 + key) % 26) + 97);
      
      return newChar;
    }

    return char;
  });

  return cipher.join('');
}

module.exports = caesar;