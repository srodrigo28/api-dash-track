// src/db/index.js
import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
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