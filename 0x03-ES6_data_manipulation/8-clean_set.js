export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const strings = [];
  for (const string of set) {
    if (string.startsWith(startString)) {
      strings.push(string.substring(startString.length));
    }
  }
  return strings.join('-');
}
