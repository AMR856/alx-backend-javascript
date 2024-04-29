export default function getStudentsByLocation(myArray, city) {
  let mylocationArray = [];
  if (typeof myArray === 'object' || myArray === undefined) {
    for (const obj of myArray) {
      if (typeof Object.values(obj)[0] !== 'number' && typeof Object.values(obj)[1] !== 'string' && typeof Object.values(obj)[2] !== 'string') {
        return mylocationArray;
      }
    }
  } else {
    return mylocationArray;
  }

  mylocationArray = myArray.filter((obj) => obj.location === city);
  return mylocationArray;
}
