// index.js – versão funcionando perfeitamente em 2025
import 'dotenv/config.js';
import express from 'express';
import { CreateUserController } from './src/controllers/create-user.js';
import { GetUserByIdController } from './src/controllers/get-user-by-id.js'

const app = express();
app.use(express.json());

const porta = process.env.PORT_API || 8000; // boa prática adicionar fallback

app.post('/api/users', async (request, response) => {
    const createUserController = new CreateUserController();

    const { statusCode, body } = await createUserController.execute(request);

    return response.status(statusCode).json(body);
});

app.get('/api/users/:userId', async (request, response) => {
    const getUserByIdController = new GetUserByIdController()
    const { statusCode, body } = await getUserByIdController.execute(request)
    
    response.status(statusCode).send(body)
})

app.listen(porta, () => console.log(`http://localhost:${porta}`));