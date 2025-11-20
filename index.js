// index.js (versão “mínima viável” que você queria)
import express from 'express';
import { pool } from './src/db/postgres/client.js';

const app = express();

app.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM users');
  res.send(rows);                    // manda o array direto (o Express já faz JSON.stringify)
});

app.listen(3000, () => console.log('http://localhost:3000'));