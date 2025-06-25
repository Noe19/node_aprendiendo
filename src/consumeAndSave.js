const axios = require('axios');
const db = require('./db');

async function consumeAndSave() {
  try {
    // 1. Consumir API externa
    const response = await axios.get('https://api.ejemplo.com/productos');
    const productos = response.data;

    for (const item of productos) {
      // 2. Validar campos necesarios
      if (item.id && item.nombre && item.precio) {
        // 3. Insertar en base de datos
        await db.query(
          'INSERT INTO productos (id, nombre, precio) VALUES (?, ?, ?)',
          [item.id, item.nombre, item.precio]
        );
        // para tener datos guardaos extra
        await db.query(
          'INSERT INTO usuarios (nombre, apellido, extras) VALUES (?, ?, ?)',
          [nombre, apellido, JSON.stringify(extras)]
        );
      } else {
        console.log('❌ Producto inválido omitido:', item);
      }
    }

    //antes de guardar verificar 
    for (const usuario of usuarios) {
  const [rows] = await db.query(
    'SELECT * FROM usuarios WHERE nombre = ? AND apellido = ?',
    [usuario.nombre, usuario.apellido]
  );

  if (rows.length === 0) {
    // No existe, insertamos
    await db.query(
      'INSERT INTO usuarios (nombre, apellido) VALUES (?, ?)',
      [usuario.nombre, usuario.apellido]
    );
    console.log(`Usuario ${usuario.nombre} agregado`);
  } else {
    console.log(`Usuario ${usuario.nombre} ya existe`);
  }
}

    console.log('✅ Productos guardados en la base de datos');
  } catch (error) {
    console.error('❌ Error al consumir o guardar:', error.message);
  }
}

consumeAndSave();