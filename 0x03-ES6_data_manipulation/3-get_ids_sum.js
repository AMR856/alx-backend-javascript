function getSum(total, obj) {
  return total + parseInt(obj.id, 10);
}

export default function getStudentIdsSum(myArray) {
  if (myArray instanceof Array) {
    return myArray.reduce(getSum, 0);
  }
  return 0;
}
