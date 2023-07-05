import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/modules/app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS using the cors package
  app.use(cors());

  await app.listen(3000);
}

bootstrap();
