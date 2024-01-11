# Projeto POC NestJS com MongoDB

Este é um projeto POC (Proof of Concept) desenvolvido em NestJS. O projeto utiliza o MongoDB como banco de dados NoSQL para armazenamento de dados.

## Objetivo

O objetivo deste projeto é demonstrar a integração básica entre o NestJS e o MongoDB, fornecendo uma estrutura de aplicativo simples que pode ser usada como ponto de partida para projetos mais complexos.

## Recursos

- **NestJS**: O framework Node.js para construção de aplicativos escaláveis.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **TypeScript**: Linguagem de programação tipada para JavaScript.
- **Docker**: Contêiner de aplicativos para facilitar a implantação.

## Requisitos

Certifique-se de ter o seguinte instalado em sua máquina antes de executar o projeto:

- Node.js
- npm (Node Package Manager)
- Docker (opcional, mas recomendado para facilitar a configuração do MongoDB)

## Instalação

1. Clone este repositório
2. User o docker-compose para disponibilizar o banco de dados
```bash
docker compose up -d
```
3. Inicie o projeto
```bash
npm run start:dev
```

# API Endpoints

A seguir estão os endpoints disponíveis nesta API:

| Método | Rota                   | Descrição                         |
|--------|------------------------|-----------------------------------|
| GET    | `/person`           | Obter todos os registros          |
| GET    | `/person/:id`       | Obter detalhes por ID|
| POST   | `/person`           | Criar um novo registro             |
| PATCH    | `/person/:id`       | Atualizar por ID       |
| DELETE | `/person/:id`       | Excluir por ID         |
| ...    | ...                    | ...                               |
