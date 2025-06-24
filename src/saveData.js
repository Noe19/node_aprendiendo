const fs = require('fs');
const path = require('path');

function saveData(data) {
  const filePath = path.join(__dirname, 'output.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('Datos guardados en', filePath);
}

module.exports = saveData;