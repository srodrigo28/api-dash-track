import { CreateUserUseCase } from '../use-cases/create-user.js'
import { badrequest, serverError, created } from './helpers.js'
import validator from "validator"

export class CreateUserController {
    async execute(httpRequest) {
        try {
            const params = httpRequest.body
            // validar a requisição (campos obrigatórios, tamanho de senha e e-email)
            const requiredFields = [
                'first_name',
                'last_name',
                'email',
                'password',
            ]

            for (const field of requiredFields) {
                if (!params[field] || params[field].trim().length === 0) {
                    return badrequest({ message: `Missing param: ${field}`})
                }
            }

            // quantidade de caracteres para senha
            const passwordValid = params.password.length < 6;
            if (passwordValid) {
                return badrequest({ message: `Password must be least 6 characters`})
            }
            
            // valida se o email é valido
            const emailIsValid = validator.isEmail(params.email)
            if(!emailIsValid){
                return badrequest('Invalid e-mail. Please provide a vlid one. ')
            }

            // chama o use case
            const createUserUseCase = new CreateUserUseCase()
            const createdUser = await createUserUseCase.execute(params)

            // retorna a resposta para o usuário (status code)
            return created(createdUser)
        } catch (error) {
            console.log('Error: ' + error)
            return serverError()
        }
    }
}
