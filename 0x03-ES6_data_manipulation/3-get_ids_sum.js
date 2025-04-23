export default function getStudentIdsSum(student) {
  if (student instanceof Array) {
    return student.reduce((total, student) => total + student.id, 0);
  }
  return [];
}
