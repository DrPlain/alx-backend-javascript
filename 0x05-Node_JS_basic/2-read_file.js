const { readFileSync } = require('fs');

function countStudents(path) {
  if (!path) {
    throw new Error('Cannot load the database');
  }
  try {
    const data = readFileSync(path, 'utf-8');
    const obj = {};
    obj.totalStudents = 0;
    let lineNo = 0;
    for (const line of data.split('\n')) {
      if (lineNo !== 0) {
        const tokens = line.split(',');
        if (tokens[3] in obj) {
          const fieldStudents = `${tokens[3]}Students`;
          obj[tokens[3]] += 1;
          obj.totalStudents += 1;
          obj[fieldStudents].push(tokens[0]);
        } else {
          const fieldStudents = `${tokens[3]}Students`;
          obj[tokens[3]] = 1;
          obj[fieldStudents] = [tokens[0]];
          obj.totalStudents += 1;
        }
      }
      lineNo += 1;
    }
    console.log(`Number of Students: ${obj.totalStudents}`);
    console.log(`Number of students in CS: ${obj.CS}. List: ${obj.CSStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${obj.SWE}. List: ${obj.SWEStudents.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
