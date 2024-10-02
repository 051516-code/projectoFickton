import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


     // Configuración de Morgan para el registro de solicitudes
     app.use(morgan('combined')); // TODO: Puedes usar otros formatos como 'dev', 'tiny', etc.


  //TODO: Habilita Cors 
  app.enableCors({
    origin: 'http://localhost:3000', // TODO: Cambia esto por la dirección IP de tu Raspberry Pi o cualquier otra dirección que necesites permitir
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // TODO: Si necesitas habilitar cookies o encabezados de autenticación
});
  app.useGlobalPipes(new ValidationPipe()); // TODO: Habilitar validacion  global

  await app.listen(3000);
}
bootstrap();
