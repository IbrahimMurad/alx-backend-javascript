import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    let response = 'This is the list of our students\n';
    readDatabase(process.argv[2])
      .then((studentsOfField) => {
        const fields = Object.keys(studentsOfField);
        for (const field of fields) {
          response = `${response}Number of students in ${field}: ${studentsOfField[field].length}.`;
          response = `${response} List: ${studentsOfField[field].join(', ')}\n`;
        }
        response = response.slice(0, -1);
        res.status(200).send(response);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => res.status(500).send(`${response}Cannot load the database`));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major === 'CS' || major === 'SWE') {
      readDatabase(process.argv[2])
        .then((studentsOfField) => {
          res.status(200).send(`List: ${studentsOfField[major].join(', ')}`);
        })
        .catch(() => res.status(500).send('Cannot load the database'));
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
