const fs = require('fs/promises');

module.exports = async function countStudents(path) {
  try {
    // read the file asynchronously
    const data = await fs.readFile(path, { encoding: 'utf8' });

    // split the data into lines, remove empty lines, and split each line into columns
    const lines = data.split('\n').filter((line) => line.length > 1).map((line) => line.split(','));

    // extract the headers and the rows
    const headers = lines[0];
    const rowData = lines.slice(1);

    // create an array of students from the rows
    const students = [];
    for (const line of rowData) {
      const student = {};
      for (let i = 0; i < headers.length; i += 1) {
        student[headers[i]] = line[i];
      }
      students.push(student);
    }

    // print the number of students
    console.log(`Number of students: ${students.length}`);

    // create a list of fileds
    const fields = [...new Set(students.map((student) => student.field))];

    // for each field, print the number of students and a list of their first names
    for (const FIELD of fields) {
      const list = students.filter((student) => student.field === FIELD);
      const LIST_OF_FIRSTNAMES = list.map((student) => student.firstname);
      console.log(`Number of students in ${FIELD}: ${list.length}. List: ${LIST_OF_FIRSTNAMES.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
