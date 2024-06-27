const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const splittedData = data.split('\n').slice(1);
    console.log(`Number of students: ${splittedData.length}`);
    const studentsDict = {};
    const specDict = {};
    for (const studentString of splittedData) {
      const studentList = studentString.split(',');
      if (!Object.keys(specDict).includes(studentList[3])) {
        specDict[studentList[3]] = 1;
        studentsDict[`${studentList[3]}_students`] = [];
        studentsDict[`${studentList[3]}_students`].push(studentList[0]);
      } else {
        specDict[studentList[3]] += 1;
        studentsDict[`${studentList[3]}_students`].push(studentList[0]);
      }
    }
    for (const specKey of Object.keys(specDict)) {
      const stringThing = studentsDict[Object.keys(studentsDict).find((key) => key === `${specKey}_students`)].join(', ');
      console.log(`Number of students in ${specKey}: ${specDict[specKey]}. List: ${stringThing}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
