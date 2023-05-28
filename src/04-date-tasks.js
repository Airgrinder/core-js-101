function parseDataFromRfc2822(value) {
  return new Date(Date.parse(value));
}

function parseDataFromIso8601(value) {
  return new Date(Date.parse(value));
}


function isLeapYear(date) {
  const year = date.getFullYear();

  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  return year % 400 === 0;
}

function timeSpanToString(startDate, endDate) {
  return new Date(endDate - startDate).toISOString()
    .substr(11, 12);
}

function angleBetweenClockHands(date) {
  const angle = Math.abs(0.5 * ((60 * (date.getUTCHours() % 12))
    - (11 * date.getUTCMinutes()))) * (Math.PI / 180);
  return Math.min(angle, 2 * Math.PI - angle);
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
