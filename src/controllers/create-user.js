import { CreateUserUseCase } from '../use-cases/create-user.js'
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
                    return {
                        statusCode: 400,
                        body: {
                            errorMessage: `Missing param: ${field}`,
                        },
                    }
                }
            }
            // chama o use case
            const createUserUseCase = new CreateUserUseCase()

            const createdUser = await createUserUseCase.execute(params)

            // retorna a resposta para o usuário (status code)
            return {
                statusCode: 201,
                body: createdUser,
            }
        } catch (error) {
            console.log('Error: ' + error)
            return {
                statusCode: 500,
                body: {
                    errorMessage: 'Internal server error',
                },
            }
        }
    }
}
