// index.js (versão “mínima viável” que você queria)
import express from 'express';
import { pool } from './src/db/postgres/client.js';

const app = express();

app.get('/users', async (req, res) => {
  const client = await pool.connect()
  const results = await client.query('SELECT * FROM users');
  // manda o array direto (o Express já faz JSON.stringify)
  res.send(JSON.stringify(results.rows)); 
});

app.listen(3000, () => console.log('http://localhost:3000'));