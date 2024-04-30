export default function setFromArray(myArray) {
  const mySet = new Set();
  if (myArray instanceof Array) {
    for (const elm of myArray) {
      mySet.add(elm);
    }
  }
  return mySet;
}
