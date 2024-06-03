export default function getListStudentIds(arrayOfStudents) {
  if (!arrayOfStudents.isArray()) {
    return [];
  }
  return arrayOfStudents.map((student) => student.id);
}
