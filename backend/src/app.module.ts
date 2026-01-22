import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLHOST || process.env.DB_HOST || 'localhost',
      port: Number(process.env.MYSQLPORT || process.env.DB_PORT || 3306),
      username: process.env.MYSQLUSER || process.env.DB_USERNAME || 'root',
      password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || '',
      database: process.env.MYSQLDATABASE || process.env.DB_DATABASE || 'todolist',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
      logging: process.env.NODE_ENV !== 'production',
      ssl: process.env.MYSQLHOST ? { rejectUnauthorized: false } : false,
      extra: {
        connectionLimit: 10,
        connectTimeout: 60000,
        acquireTimeout: 60000,
        timeout: 60000,
      },
    }),
    TodoModule,
  ],
})
export class AppModule {}
