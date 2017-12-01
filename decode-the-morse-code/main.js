decodeMorse = function(morseCode){
  const morseWordsArray = morseCode.split('   ')
  const translatedString = []
  for (let i = 0; i < morseWordsArray.length; i++) {
    const morseWord = morseWordsArray[i]
    const morseLettersArray = morseWord.split(' ')
    translatedString.push(morseLettersArray.reduce((word, morseLetter) => {
      if (morseLetter === '') return word
      return word + MORSE_CODE[morseLetter]
    }, ''))
  }
  return translatedString.filter(element => element !== '').join(' ')
}
