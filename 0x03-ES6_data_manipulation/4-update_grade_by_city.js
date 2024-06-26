export default function updateStudentGradeByCity(myArray, city, newGrades) {
  if (myArray instanceof Array) {
    const myLocationArray = myArray.filter((obj) => obj.location === city);
    const myLastArray = myLocationArray.map((obj) => {
      for (const gradeObj of newGrades) {
        if (gradeObj.studentId === obj.id) {
          return { ...obj, grade: gradeObj.grade };
        }
      }
      return { ...obj, grade: 'N/A' };
    });
    return myLastArray;
  }
  return [];
}
