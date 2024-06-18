const fs = require('node:fs');


const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    myDataArray = data.split('\n').slice(1);
    const myDataOfLists = myDataArray.map(entry => entry.split(','));
    console.log(`Number of students: ${myDataArray.length}`);
    myDictionay  = {};
    let spec = '';
    let theStudentsListKey = [];
    for (const student of myDataOfLists) {
      spec = student[3];
      theKey = spec + '_number';
      if (theKey in myDictionay) {
        myDictionay[theKey] = myDictionay[theKey] + 1;
        theStudentsListKey = spec + '_array';
        myDictionay[theStudentsListKey].push(student[0]);
      } else {
        myDictionay[theKey] = 1;
        theStudentsListKey = spec + '_array';
        myDictionay[theStudentsListKey] = Array();
        myDictionay[theStudentsListKey].push(student[0]);
      }
    }
    let finalDict = {};
    for (const [key, value] of Object.entries(myDictionay)) {
      spec1 = key.split('_');
      let counter = 0;
      if (spec1[1] === 'number') {
        finalDict[spec1[0]] = myDictionay[spec1[0] + '_array'];
        process.stdout.write(`Number of students in ${spec1[0]}: ${finalDict[spec1[0]].length}. List: `);
        for (const [key1, value1] of Object.entries(finalDict[spec1[0]])) {
          if (counter === finalDict[spec1[0]].length - 1) {
            process.stdout.write(`${value1}`);
          } else {
            process.stdout.write(`${value1}, `);
          }
          counter = counter + 1;
        }
        counter = 0;
        console.log();
      }
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
