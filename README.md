# Integration of AWS Secrets Manager in NestJS with TypeOrm

The project integrates AWS Secret Manager in NestJS with TypeORM, allowing for secure and efficient storage and retrieval of secrets and database connection information.

NestJS is a popular Node.js framework for building scalable and maintainable server-side applications, while TypeORM is a flexible Object-Relational Mapping (ORM) tool that supports multiple database systems.

By integrating AWS Secret Manager, the project ensures that sensitive information such as API keys, database passwords, and other secrets are kept secure, and access is tightly controlled. This helps prevent unauthorized access and enhances security.

The project also makes use of the TypeORM integration with NestJS, enabling seamless database connection management and query execution. This ensures efficient and reliable database operations while also improving maintainability.

Overall, the project provides a robust and secure solution for managing secrets and database connections in a NestJS application using TypeORM.

## Versions

| Technology | Versions |
| ---------- | -------- |
| Node       | 19.6.0   |
| NestJS     | 9.2.0    |
| NPM        | 9.4.0    |

## Project Setup

Clone the project

```bash
  git clone git@bitbucket.org:nikhil-simform/secret-manager.git
```

Go to the project directory

```bash
  cd secret-manager
```

Rename the env file

```bash
  mv .env.example .env
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
