function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getStringLength(str) {
  return str.length;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(string) {
  return string.replace('Hello, ', '')
    .replace('!', '');
}

function getFirstChar(str) {
  return str.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(str) {
  return str.trim();
}

function repeatString(str, count) {
  return str.repeat(count);
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function unbracketTag(str) {
  return str.slice(1, -1);
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function extractEmails(str) {
  return str.split(';');
}

function getRectangleString(width, height) {
  const line = '─';
  let str = `┌${line.repeat(width - 2)}┐\n`;
  if (width < 2) str += `└${line.repeat(width - 2)}┘\n`;
  for (let i = 0; i < height - 2; i += 1) {
    str += `│${' '.repeat(width - 2)}│\n`;
  }
  if (height >= 2) str += `└${line.repeat(width - 2)}┘\n`;
  return str;
}

function encodeToRot13(str) {
  return str.replace(/[A-Za-z]/g, (char) => {
    const charCode = char.charCodeAt(0);
    const baseCharCode = charCode <= 90 ? 65 : 97;
    return String.fromCharCode(((charCode - baseCharCode + 13) % 26) + baseCharCode);
  });
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function getCardId(str) {
  const cards = ['A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'];
  return cards.indexOf(str);
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
