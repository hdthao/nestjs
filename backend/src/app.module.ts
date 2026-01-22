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
      url: process.env.DATABASE_URL, // 🔥 QUAN TRỌNG
      autoLoadEntities: true,
      synchronize: false,
      logging: process.env.NODE_ENV !== 'production',
    }),

    TodoModule,
  ],
})
export class AppModule {}
