const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const dataArray = data.split('\n').slice(1);
    const students = dataArray.map(entry => entry.split(','));

    let studentCounts = {};
    let studentLists = {};

    students.forEach(student => {
      const specialization = student[3];
      const key = `${specialization}_number`;
      const listKey = `${specialization}_array`;

      if (studentCounts[key]) {
        studentCounts[key]++;
        studentLists[listKey].push(student[0]);
      } else {
        studentCounts[key] = 1;
        studentLists[listKey] = [student[0]];
      }
    });
    console.log(`Number of students: ${students.length}`);
    for (const key in studentCounts) {
        const specialization = key.split('_')[0];
        console.log(`Number of students in ${specialization}: ${studentCounts[key]}. List: ${studentLists[specialization + '_array'].join(', ')}`);
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
};

module.exports = countStudents;
