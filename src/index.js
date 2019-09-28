const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
let expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
function decode(expr) {
  var letters = expr.match(/.{1,10}/g);
  var symbols = [];
  var readyMorzeLetter = [];
  letters.forEach(function(letter) {
    var symbolsArray = Array.from(letter);
    for (var i = 0; i < symbolsArray.length; i++) {
      if(symbolsArray[i] === "0" ) {
        delete symbolsArray[i];
      } else {
        break;
      }
    }
    var readyLetter = symbolsArray.join('');
    symbols.push(readyLetter);
  })
  symbols.forEach(function(symbol) {
    var morzeSymbols= symbol.match(/.{1,2}/g);
    for (var j = 0; j < morzeSymbols.length; j++) {
      if (morzeSymbols[j] === "10") {
        morzeSymbols[j] = ".";
      } else if (morzeSymbols[j] === "11") {
        morzeSymbols[j] = "-";
      }
    }
    var morzeLetter = morzeSymbols.join('');
    if (morzeLetter !== "**********") {
    morzeLetter = MORSE_TABLE[morzeLetter];
    } else {
      morzeLetter = " ";
    }
    readyMorzeLetter.push(morzeLetter);
  })
  return readyMorzeLetter.join('');
}

module.exports = {
    decode
}
