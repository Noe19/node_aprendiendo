const fs = require('fs');
const path = require('path');
const db = require('./db');
function saveData(data) {
  const filePath = path.join(__dirname, 'output.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('Datos guardados en', filePath);
   saveData01()


}

async function saveData01(datos){
     await db.query(
              'INSERT INTO productos (id, nombre, precio,description) VALUES (?, ?, ?,?)',
              ["10", "pancito001", "20.85","no nada"]
            );

}

module.exports = saveData;