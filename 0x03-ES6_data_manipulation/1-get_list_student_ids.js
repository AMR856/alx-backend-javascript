export default function getListStudentIds(myArray) {
  let myIDArray = [];
  if (typeof myArray !== 'object') {
    return myIDArray;
  }
  myIDArray = myArray.map((val, index, arr) => val.id);
  return myIDArray;
}
