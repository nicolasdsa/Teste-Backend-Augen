# Teste-Backend-Augen

O projeto consiste em cumprir os requisitos pedidos para o teste de back-end da Augen. Link para o teste: https://github.com/AugenEngenharia/Back-end-test-Augen/

## Ambiente de desenvolvimento
Esse projeto foi desenvolvido utilizando windows, utilizando a porta 3306 para o mysql e a porta 3000 para o express.

## Como iniciar o projeto

No terminal, para instalar as dependências:
```
npm install
```
Depois criar dois bancos de dados no ambiente de desenvolvimento de sua escolha, durante o desenvolvimento foi utilizado MySQL Workbench, o primeiro banco com o nome augen e o segundo banco com nome augen_test, depois no terminal, para criação das tabelas no banco de desenvolvimento:
```
npm run migrate:up dev
```
e seguinte, para criação das tabelas no banco de teste:
```
npm run migrate:up test
```
No último passo, trocar para as suas credencias de usuario e de senha do MySQL, nos arquivos .env e test.env, nas variaveis de ambiente DATABASE_USER e DATABASE_PASSWORD e no terminal, para iniciar o servidor:
```
npm start
```
Para rodar os testes:
```
npm test
```

## Dependências instaladas
    -Bcryptjs
    -Body-parser
    -Express
    -Joi
    -Jsonwebtoken
    -@joi/date
    -dotenv
    -Nodemon
    -mysql2
    -mocha
    -chai
    -db-migrate
    -db-migrate-mysql

## Endpoints

### Signup

```
POST /auth/signup/
```

```json
{
  "email": "email@sjahdiuas.ciom",
  "password": "sidhaiudhuiasd(ASud98",
}
```
**Response**

Success (200)

```json
{
  "success": true
}
```

Bad Request (400)

```json
{
  "message": "Este Email já está sendo utilizado."
}
```

### Signin

```
POST /auth/signin/
```

**Body**

```json
{
  "email": "email@sjahdiuas.ciom",
  "password": "sidhaiudhuiasd(ASud98"
}
```

**Response**

Success (200)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjM2MzA0NTF9.1hFTFN_J5OzQ_tYq6PrVsefwFJqKE_GuR6rHcFyUs8Y"
}
```

Not Found (404)

```json
{
  "message": "Senha Incorreta."
}
```

Not Found (404)

```json
{
  "message": "O funcionario não existe."
}
```

### Create City
Authenticated
```
POST /city/
```
**Body**

```json
{
   "name": "NameCity",
   "state": "UF"
}
```

**Response**

Success (200)

```json
{
  "success": true
}
```

Unauthorized (401)

```json
{
    "message": "Unauthorized"
}
```

## List Cities
```
GET /city/
```
**Response**

Success (200)

```json
{
    "list": [
        {
            "id": 1,
            "name": "Pelotas",
            "state": "RS"
        },
        {
            "id": 2,
            "name": "Canoas",
            "state": "RS"
        },
        {
            "id": 3,
            "name": "São Paulo",
            "state": "SP"
        }
    ]
}
```

## List City by Id
```
GET /city/:id
```

**Response**

Success (200)

```json
{
    "id": 2,
    "name": "Canoas",
    "state": "RS"
}
```

Not Found (404)

```json
{
    "message": "Esta cidade não existe."
}
```
## Update City
Authenticated
```
PUT /city/:id
```
**Body**
```json
{
   "name": "NameCity",
   "state": "UF"
}
```

**Response**

Success(200)
```json
{
  "success": true
}
```

Unauthorized (401)

```json
{
    "message": "Unauthorized"
}
```

Not Found (404)

```json
{
    "message": "Esta cidade não existe."
}
```

## Delete City
Authenticated
```
DELETE /city/:id
```
**Response**

Success(200)
```json
{
  "success": true
}
```

Bad Request (400)

```json
{
    "message": "Esta cidade está vinculada com algum equipamento e por isso não pode ser deletada."
}
```

Unauthorized (401)

```json
{
    "message": "Unauthorized"
}
```

Not Found (404)

```json
{
    "message": "Esta cidade não existe."
}
```

## Create equipment
Authenticated
```
POST /equipment/
```

**Body**
```json
{
   "name": "NameEquipment",
   "city_id": 1
}
```

**Response**

Success(200)
```json
{
  "success": true
}
```

Unauthorized (401)

```json
{
    "message": "Unauthorized"
}
```

Not Found (404)

```json
{
    "message": "Esta cidade não existe."
}
```

## List Equipments
```
GET /equipment/
```
**Response**

Success (200)

```json
{
    "list": [
        {
            "id": 1,
            "name": "equipment 1",
            "city_id": 1,
            "created_at": "2022-09-19T23:54:59.000Z",
            "deleted_at": null
        },
        {
            "id": 2,
            "name": "equipment 2",
            "city_id": 2,
            "created_at": "2022-09-19T23:55:06.000Z",
            "deleted_at": null
        },
        {
            "id": 3,
            "name": "equipment 2",
            "city_id": 2,
            "created_at": "2022-09-19T23:55:32.000Z",
            "deleted_at": null
        }
      ]
}
```

## List by Id Equipment
```
GET /equipment/:id
```
**Response**

Success (200)
```json
{
    "id": 2,
    "name": "equipment 2",
    "city_id": 2,
    "created_at": "2022-09-19T23:55:06.000Z",
    "deleted_at": null
}
```

Not Found(404)
```json
{
    "message": "Este equipamento não existe."
}
```

## Update Equipment
```
PUT /equipment/:id
```
Authenticated

**Body**

```json
{
   "name": "NameEquipment",
   "city_id": 1
}
```
**Response**

Success(200)
```json
{
  "success": true
}
```

Unauthorized (401)

```json
{
    "message": "Unauthorized"
}
```

Not Found (404)

```json
{
    "message": "Esta cidade não existe."
}
```

Not Found (404)

```json
{
    "message": "Este equipamento não existe."
}
```

## Delete Equipment
```
DELETE /equipment/:id
```
Authenticated

Success(200)
```json
{
  "success": true
}
```

Bad Request (400)

```json
{
    "message": "Este equipamento está vinculado com alguma analise e por isso não pode ser deletado."
}
```

Unauthorized (401)

```json
{
    "message": "Unauthorized"
}
```

Not Found (404)

```json
{
    "message": "Este equipamento não existe."
}
```

## Create Analysis
Authenticated
```
POST /analysis/
```

**Body**
```json
{
    "ph": 14,
    "chlorine": 66,
    "fluorine": 33,
    "output": 15,
    "equipment_id": 5
}
```

**Response**

Success (200)
```json
{
  "success": true
}
```

Unauthorized (401)

```json
{
    "message": "Unauthorized"
}
```

Not Found (404)
```json
{
    "message": "Este equipamento não existe."
}
```

## List Analysis
```
GET /analysis/
```
**Response**

Success (200)

```json
{
    "list": [
        {
            "id": 1,
            "ph": 14,
            "chlorine": 66,
            "fluorine": 33,
            "output": 15,
            "equipment_id": 1,
            "created_at": "2022-09-20T00:09:11.000Z"
        },
        {
            "id": 2,
            "ph": 1,
            "chlorine": 77,
            "fluorine": 88,
            "output": 22,
            "equipment_id": 2,
            "created_at": "2022-09-20T00:10:24.000Z"
        },
        {
            "id": 3,
            "ph": 6,
            "chlorine": 33,
            "fluorine": 15,
            "output": 45,
            "equipment_id": 3,
            "created_at": "2022-09-20T00:10:39.000Z"
        }
    ]
}
```

## List by Date Analysis
```
GET /analysis/date/YYYY:MM:DD
```

**Response**

Success (200)

```json
{
    "list": [
        {
            "id": 1,
            "ph": 14,
            "chlorine": 66,
            "fluorine": 33,
            "output": 15,
            "equipment_id": 1,
            "created_at": "2022-09-20T00:09:11.000Z"
        },
        {
            "id": 2,
            "ph": 1,
            "chlorine": 77,
            "fluorine": 88,
            "output": 22,
            "equipment_id": 2,
            "created_at": "2022-09-20T00:10:24.000Z"
        }
    ]
}
```

## List by Id Analysis
```
GET /analysis/:id
```

**Response**

Success (200)

```json
{
    "id": 2,
    "ph": 1,
    "chlorine": 77,
    "fluorine": 88,
    "output": 22,
    "equipment_id": 2,
    "created_at": "2022-09-20T00:10:24.000Z"
}
```

Not Found (404)

```json
{
    "message": "Esta analise não existe."
}
```

## Update Analysis
Authenticated
```
PUT /analysis/:id
```

**Body**
```json
{
    "ph": 14,
    "chlorine": 66,
    "fluorine": 33,
    "output": 15,
    "equipment_id": 5
}
```

**Response**

Success (200)

```json
{
    "success": true
}
```

Unauthorized (401)

```json
{
    "message": "Unauthorized"
}
```

Not Found (404)
```json
{
    "message": "Esta analise não existe."
}
```

Not Found (404)
```json
{
    "message": "Este equipamento não existe."
}
```

## Delete Analysis
Authenticated
```
DELETE /analysis/:id
```

Success (200)

```json
{
    "success": true
}
```

Unauthorized (401)

```json
{
    "message": "Unauthorized"
}
```

Not Found (404)
```json
{
    "message": "Esta analise não existe."
}
```
