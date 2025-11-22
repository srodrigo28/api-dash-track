#### API FinanTrak
* Express
* Jest v30
* ESLint --> Regras e qualidade de código
* Pritter --> Formatação do código
* Type: Module --> Padrões de Importes
* Swagger --> Documentação da API
* Zod --> Validação do recebimento
* Postgres --> banco de dados

#### Rodar o projeto
node index.js

#### rodar a migration
npm run migrations
node index.js

#### onde esta configurado a migration
src/db/postgres/migrations/exec.js

src/db/postgres/migrations/01-init.sql
src/db/postgres/migrations/02-init.sql

#### Post users
```
{
  "first_name": "Janaina",
  "last_name": "Silva",
  "email": "janaina@outlook.com",
  "password": "123123"
}
```

#### Rotas do projeto

http://localhost:3000/

* Post
http://localhost:8000/api/users