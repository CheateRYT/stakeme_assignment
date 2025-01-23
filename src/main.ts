import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
  await app.listen(3000);
}

bootstrap();
