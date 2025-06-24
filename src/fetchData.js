const db = require('./db');

async function fetchData() {
  try {
    const [rows] = await db.query('SELECT * FROM productos');
    return rows;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}

module.exports = fetchData;