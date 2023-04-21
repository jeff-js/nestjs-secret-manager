import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';
import { ConfigService } from '@nestjs/config';

export const fetchSecrets = async () => {
  const configService = new ConfigService();

  const client = new SecretsManagerClient({
    region: configService.get('AWS_REGION'),
  });
  try {
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: configService.get('AWS_SECRET_NAME'),
      }),
    );
    return JSON.parse(response.SecretString);
  } catch (error) {
    throw error;
  }
};
