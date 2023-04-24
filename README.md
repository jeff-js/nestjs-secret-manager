# NestJS with AWS Secret Manager and TypeORM Integration

This project demonstrates how to integrate AWS Secret Manager in NestJS with TypeORM, allowing for secure storage and retrieval of secrets and database connection information. NestJS is a Node.js framework for building scalable and maintainable server-side applications, while TypeORM is a flexible Object-Relational Mapping (ORM) tool that supports multiple database systems.

## Versions

| Technology | Versions |
| ---------- | -------- |
| Node       | 19.6.0   |
| NestJS     | 9.2.0    |
| NPM        | 9.4.0    |
| TypeORM    | 0.3.15   |

## Installation

1. Clone the repository:

```bash
git clone git@bitbucket.org:nikhil-simform/secret-manager.git
```

2. Install dependencies:

```bash
cd secret-manager
npm install
```

3. Set up your AWS credentials [Optional]:

Create a `~/.aws/credentials` file with your AWS access key and secret access key if you don't have already (You can even skip this step and provide credentials directly while initialising aws-sdk method in codebase):

```bash
[default]
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY
```

4. Create a `.env` file:

```bash
mv .env.example .env
```

Replace the values with your own credentials.

5. Start the application:

```bash
npm run dev
```

The application should now be running on port specified in secret manager. To check whether the datasource is initialised or not visit the application url.

## Usage

1. Create a new secret in AWS Secret Manager:

Navigate to the AWS Secret Manager console and create a new secret with the following JSON format:

```
{
  "PORT":"your PORT",
  "DB_HOST":"your DB_HOST",
  "DB_PORT":"your DB_PORT",
  "DB_NAME":"your DB_NAME",
  "DB_PASSWORD":"your DB_PASSWORD",
  "DB_TYPE":"your DB_TYPE",
  "DB_USER":"your DB_USER"
}
```

2. Retrieve the secret in your NestJS application:

Use the `fetchSecrets()` to retrieve the secret from AWS Secret Manager and store it in a variable:

```
const secret = await fetchSecrets(secretName);
```

3. Use the database connection information in your TypeORM configuration:

Use the database connection information from the secret to configure your TypeORM connection:

```
{
  "type": secrets.type,
  "host": secrets.host,
  "port": secrets.port,
  "username": secrets.user,
  "password": secrets.password,
  "database": secrets.name,
  "entities": [],
  "synchronize": false,
  "logging": true,
}
```

## Contributing

Contributions are welcome! Please create a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
