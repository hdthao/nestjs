import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  console.log('🚀 Starting application...');
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Database Config:', {
    host: process.env.MYSQLHOST || process.env.DB_HOST || 'localhost',
    port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
    username: process.env.MYSQLUSER || process.env.DB_USERNAME || 'root',
    database: process.env.MYSQLDATABASE || process.env.DB_DATABASE || 'todolist',
  });

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CLIENT_URL || true,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`✅ Application running on port ${port}`);
}
bootstrap();
