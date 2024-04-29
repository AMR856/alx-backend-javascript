export default function getListStudentIds(myArray) {
  if (myArray instanceof Array) {
    return myArray.map((student) => student.id);
  }
  return [];
}
