const fetchData = require('./fetchData');
const saveData01 = require('./saveData');
const saveData = require('./saveData');

async function main() {
  const data = await fetchData();
  if (data) {
   // saveData(data);
   saveData01();
  }
}

main();