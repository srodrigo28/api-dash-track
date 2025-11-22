// index.js – versão funcionando perfeitamente em 2025
import express from 'express';
import 'dotenv/config.js';
import { CreateUserController } from './src/controllers/create-user.js';

const app = express();
app.use(express.json());

const porta = process.env.PORT_API || 8000; // boa prática adicionar fallback

app.post('/api/users', async (request, response) => {
    const createUserController = new CreateUserController();

    const { statusCode, body } = await createUserController.execute(request);

    return response.status(statusCode).json(body);
});

app.listen(porta, () => console.log(`http://localhost:${porta}`));