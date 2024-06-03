export default function getListStudentIds(arrayOfStudents) {
  if (arrayOfStudents instanceof Array) {
    return arrayOfStudents.map((student) => student.id);
  }
  return [];
}
