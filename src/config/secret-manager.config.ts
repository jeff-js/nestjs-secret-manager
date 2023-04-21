import { fetchSecrets } from '../shared/secret-manager.service';

export default async () => {
  const secrets = await fetchSecrets();
  return {
    port: +secrets.PORT,
    database: {
      host: secrets.DB_HOST,
      port: +secrets.DB_PORT,
      name: secrets.DB_NAME,
      password: secrets.DB_PASSWORD,
      type: secrets.DB_TYPE,
      user: secrets.DB_USER,
    },
  };
};
