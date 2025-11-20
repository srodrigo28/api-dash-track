// src/db/index.js
import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: 'financeapp',
});

export const PostgresHelper = {
  query: async (query, params) => {
    const client = await pool.connect()
    const results = await client.query(query, params)
    await client.release()

    return results.rows
  }
}

console.log('Pool do PostgreSQL criado');