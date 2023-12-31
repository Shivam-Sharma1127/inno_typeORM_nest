import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity/user.entity';
import { BooksModule } from './books/books.module';
import { Book } from './books/books.entity/books.entity';

@Module({
  imports: [
    UsersModule,
    BooksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'my_nestjs_project',
      entities: [User,Book],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
