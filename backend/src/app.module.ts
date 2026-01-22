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
      host: process.env.MYSQLHOST || process.env.DB_HOST,
      port: Number(process.env.MYSQLPORT || process.env.DB_PORT),
      username: process.env.MYSQLUSER || process.env.DB_USERNAME,
      password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD,
      database: process.env.MYSQLDATABASE || process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
    }),
    TodoModule,
  ],
})
export class AppModule {}
