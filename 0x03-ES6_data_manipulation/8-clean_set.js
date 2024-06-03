export default function cleanSet(set, startString) {
  if ((typeof startString !== 'string') || !startString) {
    return '';
  }
  const strings = [];
  set.forEach((string) => {
    if ((typeof string === 'string') && (string.startsWith(startString))) {
      strings.push(string.substring(startString.length));
    }
  });
  return strings.join('-');
}
