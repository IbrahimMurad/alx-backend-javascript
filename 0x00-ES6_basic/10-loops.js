export default function appendToEachArrayValue(array, appendString) {
  for (const element of array) {
    array[array.indexOf(element)] = appendString + element; // eslint-disable-line no-param-reassign
  }

  return array;
}
