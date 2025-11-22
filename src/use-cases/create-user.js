import bcrypt from 'bcrypt'
import { v4 as uuidv4} from 'uuid'
import { PostgressCreateUserRepository } from '../repositories/postgres/create-user.js'

export class CreateUserUseCase{
    async execute(crateUserParams)
    {
        // verificar se o e-mail já está em uso
        
        // gerar id
        const userId = uuidv4()

        // criptografar a senha
        const hashedPassword = await bcrypt.hash(crateUserParams.password, 10)

        // chamar o repositori
        const user = {
            ...crateUserParams,
            id: userId,
            password: hashedPassword,
        }

        // chama o repositório
        const postgressCreateUserRepository = new PostgressCreateUserRepository();
        const createdUser = await postgressCreateUserRepository.execute(user)
        
        return createdUser;
    }
}