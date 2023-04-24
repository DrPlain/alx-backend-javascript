export default function getStudentsIdsSum(students) {
  return students.reduce((total, obj) => total + obj.id, 0);
}
