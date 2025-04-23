export default function getStudentsByLocation(student, loc) {
  if (student instanceof Array) {
    return student.filter((student) => student.location === loc);
  }
  return [];
}
