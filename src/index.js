const fetchData = require('./fetchData');
const saveData = require('./saveData');

async function main() {
  const data = await fetchData();
  if (data) {
    saveData(data);
  }
}

main();