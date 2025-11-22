// index.js (versão “mínima viável” que você queria)
import express from 'express';
import 'dotenv/config.js';


import { PostgresHelper } from './src/db/postgres/helper.js';

const app = express();

app.use(express.json())

const porta = process.env.PORT_API

app.get('/api/users', async (req, res) => {
  const results = await PostgresHelper.query('SELECT * FROM users;');
  if(results.length <= 0){
    res.send("sem dados")
    return
  }
  res.send(JSON.stringify(results)); 
});

app.post('/api/users', async (req, res) => {
  console.log(req.body.name)
  console.log(req.body.header)
  
  const resposta = req.body;

  if(resposta === undefined){
    res.send("sem informações")
    return
  }
  res.status(201).send(': User created')
  return
})

app.listen(porta, () => console.log(`http://localhost:${porta}`));