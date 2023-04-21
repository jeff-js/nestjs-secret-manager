import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomConfigModule } from './config/custom-config.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.select(CustomConfigModule).get(ConfigService);
  app.listen(configService.get('port'), () => {
    console.log('Application started on port: ', configService.get('port'));
  });
}
bootstrap();
