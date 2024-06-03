export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const strings = [];
  set.forEach((string) => {
    if (string.startsWith(startString)) {
      strings.push(string.substring(startString.length));
    }
  });
  return strings.join('-');
}
