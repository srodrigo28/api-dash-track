// migrate.js  (ou o nome que você estiver usando)
import 'dotenv/config';                 // ← sem .js no final
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from '../helper.js';        // ← seu pool exportado aqui

// Resolve __dirname no ESM (obrigatório no Node)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const execMigrations = async () => {
    let client;
    try {
        client = await pool.connect();

        const filePath = path.join(__dirname, '01-init.sql');
        const script = fs.readFileSync(filePath, 'utf-8');

        await client.query(script);

        console.log('Migrations executadas com sucesso!');
        
    } catch (error) {
        console.error('Erro ao rodar migration:', error.message);
        process.exit(1); // ← importante: sai com erro se falhar
    } finally {
        client?.release();
    }
};

execMigrations();