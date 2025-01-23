import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config({ path: '.development.env' });

  const config = new DocumentBuilder()
    .setTitle('Test Assignment API for Stakeme')
    .setDescription('API for use blockchain EVM and Cosmos')
    .setVersion('1.0')
    .addTag('evm')
    .addTag('cosmos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // app.setGlobalPrefix('api');

  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port);
}

bootstrap();
