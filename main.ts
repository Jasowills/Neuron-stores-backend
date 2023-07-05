import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/modules/app.module';
import { CorsOptions } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure CORS options
  const corsOptions: CorsOptions = {
    origin: '*', // Set your desired origin or multiple origins here
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  };

  app.enableCors(corsOptions);

  await app.listen(3000);
}

bootstrap();
