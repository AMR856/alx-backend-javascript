export default function hasValuesFromArray(mySet, myArray) {
  for (const elm of myArray) {
    if (!mySet.has(elm))
      return false;
  }
  return true;
}
