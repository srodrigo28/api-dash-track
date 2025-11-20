// index.js
import express from 'express';
import { pool } from './src/db/postgres/client.js'; // ou ./src/db/index.js

const app = express();

// Rota raiz
app.get('/', async (req, res) => {
  let client;
  try {
    client = await pool.connect();                    // ← aqui era "clientect"
    const result = await client.query('SELECT * FROM users');
    
    res.json({
      total: result.rowCount,
      users: result.rows
    });

  } catch (err) {
    console.error('Erro na query:', err);
    res.status(500).json({ 
      error: 'Erro ao buscar usuários', 
      details: err.message 
    });
  } finally {
    client?.release();  // ← muito importante liberar a conexão!
  }
});

app.listen(3000, () => {
  console.log('API rodando → http://localhost:3000');
});