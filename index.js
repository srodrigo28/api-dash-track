// index.js (versão “mínima viável” que você queria)
import express from 'express';
import 'dotenv/config.js';


import { PostgresHelper } from './src/db/postgres/helper.js';

const app = express();

app.get('/users', async (_, res) => {
  const results = await PostgresHelper.query('SELECT * FROM users;');
  res.send(JSON.stringify(results)); 
});

app.listen(3000, () => console.log('http://localhost:3000'));