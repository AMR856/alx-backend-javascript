export default function setFromArray(myArray) {
  let mySet = new Set();
  if (myArray instanceof Array) {
    for (const elm of myArray) {
      mySet.add(elm);
    }
  }
  return mySet;
}
