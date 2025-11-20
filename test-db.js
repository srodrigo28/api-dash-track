// test-db.js
import { pool } from './src/db/postgres/client.js';  // caminho curto e com .js

async function testConnection() {
  let client;
  try {
    console.log('Tentando conectar...');
    client = await pool.connect();
    const res = await client.query('SELECT NOW() as agora, version()');
    console.log('Conectado com sucesso!');
    console.log('Horário do banco:', res.rows[0].agora);
    console.log('Versão:', res.rows[0].version.split(',')[0]);
  } catch (err) {
    console.error('Erro na conexão:', err.message);
    process.exit(1);
  } finally {
    client?.release();
  }
}

testConnection();