function findElement(arr, value) {
  return arr.indexOf(value);
}

function generateOdds(len) {
  return Array.from({ length: len }, (x, index) => 2 * index + 1);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function getArrayOfPositives(arr) {
  return arr.filter((x) => x > 0);
}

function getArrayOfStrings(arr) {
  return arr.filter((x) => typeof x === 'string');
}

function removeFalsyValues(arr) {
  return arr.filter((x) => x);
}

function getUpperCaseStrings(arr) {
  return arr.map((x) => x.toUpperCase());
}

function getStringsLength(arr) {
  return arr.map((x) => x.length);
}

function insertItem(arr, item, index) {
  return arr.splice(index, 0, item);
}

function getHead(arr, n) {
  return arr.splice(0, n);
}

function getTail(arr, n) {
  return arr.splice(-n);
}

function toCsvText(arr) {
  return arr.map((x, i) => `${x.join(',')}${i !== arr.length - 1 ? '\n' : ''}`)
    .join('');
}

function toArrayOfSquares(arr) {
  return arr.map((x) => x * x);
}


function getMovingSum(arr) {
  return arr.map((x, i) => arr.slice(0, i + 1)
    .reduce((prev, curr) => prev + curr, 0));
}

function getSecondItems(arr) {
  return arr.filter((x, i) => i % 2 === 1);
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((x, i) => Array(i + 1)
    .fill(x));
}

function get3TopItems(arr) {
  return arr.slice()
    .sort((a, b) => b - a)
    .slice(0, 3);
}


function getPositivesCount(arr) {
  return arr.filter((x) => typeof x === 'number' && x > 0).length;
}

function sortDigitNamesByNumericOrder(arr) {
  const digitOrder = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return arr.sort((a, b) => digitOrder.indexOf(a) - digitOrder.indexOf(b));
}

function getItemsSum(arr) {
  return arr.reduce((x, y) => x + y, 0);
}

function getFalsyValuesCount(arr) {
  return arr.filter((value) => !value).length;
}

function findAllOccurrences(arr, item) {
  return arr.filter((value) => value === item).length;
}

function toStringList(arr) {
  return arr.join(',', '');
}

function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country === b.country) return a.city.localeCompare(b.city);
    return a.country.localeCompare(b.country);
  });
}

const getIdentityMatrix = (n) => Array(n)
  .fill(0)
  .map((x, rowIndex) => Array(n)
    .fill(0)
    .map((y, cellIndex) => (cellIndex === rowIndex ? 1 : 0)));


function getIntervalArray(start, end) {
  return Array(end - start + 1)
    .fill(start)
    .map((value, index) => value + index);
}


function distinct(arr) {
  return [...new Set(arr)];
}

function group(array, keySelector, valueSelector) {
  return array.reduce((map, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);

    return map.set(key, [...(map.get(key) || []), value]);
  }, new Map());
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function getElementByIndexes(arr, indexes) {
  if (indexes.length === 1) {
    return arr[indexes[0]];
  }

  const [currentIndex, ...restIndexes] = indexes;
  return getElementByIndexes(arr[currentIndex], restIndexes);
}

function swapHeadAndTail(arr) {
  if (arr.length <= 1) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  return [...arr.slice(-middleIndex),
    ...arr.slice(middleIndex, -middleIndex),
    ...arr.slice(0, middleIndex)];
}


module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
