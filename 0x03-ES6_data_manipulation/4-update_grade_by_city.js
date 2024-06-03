export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentIdGrade = newGrades.filter((newGrade) => newGrade.studentId === student.id)[0];
      return { ...student, grade: studentIdGrade ? studentIdGrade.grade : 'N/A' };
    });
}
