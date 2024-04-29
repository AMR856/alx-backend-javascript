export default function getListStudentIds(myArray) {
  let myIDArray = [];
  if (typeof myArray === 'object' || myArray === undefined) {
    for (const obj of myArray) {
      if (typeof Object.values(obj)[0] !== 'number' && typeof Object.values(obj)[1] !== 'string' && typeof Object.values(obj)[2] !== 'string') {
        return myIDArray;
      }
    }
  } else {
    return myIDArray;
  }
  myIDArray = myArray.map((val) => val.id);
  return myIDArray;
}
