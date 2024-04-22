export default function createIteratorObject(report) {
  const myEmployeeArray = [];
  for (const obj of Object.values(report)) {
    for (const employees of Object.values(obj)) {
      for (const employee of employees) {
        myEmployeeArray.push(employee);
      }
    }
  }
  return myEmployeeArray;
}
