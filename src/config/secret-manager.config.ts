import { ConfigService } from '@nestjs/config';
import { fetchSecrets } from '../shared/fetch-secrets';

export default async () => {
  const configService = new ConfigService();
  const secretName = configService.get('AWS_SECRET_NAME');
  const secrets = await fetchSecrets(secretName);
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
