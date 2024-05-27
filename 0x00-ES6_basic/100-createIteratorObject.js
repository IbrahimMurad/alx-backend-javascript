export default function createIteratorObject(report) {
  const array = [];
  for (const property in report.allEmployees) { // eslint-disable-line guard-for-in
    array.push(...report.allEmployees[property]);
  }
  return array;
}
