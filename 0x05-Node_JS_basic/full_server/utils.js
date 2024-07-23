import fs from 'fs';

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFile(path);
      const lines = data.split('\n').filter((line) => line.length > 1).map((line) => line.split(','));
      const headers = lines[0];
      const rowData = lines.slice(1);
      const students = [];
      for (const line of rowData) {
        const student = {};
        for (let i = 0; i < headers.length; i += 1) {
          student[headers[i]] = line[i];
        }
        students.push(student);
      }
      const fields = [...new Set(students.map((student) => student.field))];
      const studentsOfField = {};
      for (const FIELD of fields) {
        const list = students.filter((student) => student.field === FIELD);
        const LIST_OF_FIRSTNAMES = list.map((student) => student.firstname);
        studentsOfField[FIELD] = LIST_OF_FIRSTNAMES;
      }
      resolve(studentsOfField);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = readDatabase;
