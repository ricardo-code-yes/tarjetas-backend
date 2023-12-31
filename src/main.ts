import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tarjetas API')
    .setDescription('Tarjetas API')
    .setVersion('1.0')
    .addTag('tarjetas')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
