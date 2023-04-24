/**
 * Returns an array of students for a specific city with their new grade
 * @students: Array of student objects
 * @city: sppeicied city
 * @newGrade: array of grade objects
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsFromCity = students.filter((student) => student.location === city);
  const arrayOfIds = newGrades.map((value) => value.studentId);
  return studentsFromCity.map((item) => {
    const newUpdate = item;
    if (arrayOfIds.includes(item.id)) {
      const obj = newGrades.filter((member) => member.studentId === item.id);
      newUpdate.grade = obj[0].grade;
    } else {
      newUpdate.grade = 'N/A';
    }
    return newUpdate;
  });
}
