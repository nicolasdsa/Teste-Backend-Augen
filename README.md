# Teste-Backend-Augen

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
E, para rodar os testes:
```
npm test
```
