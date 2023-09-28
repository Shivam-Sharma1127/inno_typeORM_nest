import { Module, NestModule,MiddlewareConsumer } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.entity/books.entity';
import { BookMiddleWare } from './book.middleware';

@Module({
  imports:[TypeOrmModule.forFeature([Book])],
  providers: [BooksService],
  controllers: [BooksController],
  exports:[]
})

export class BooksModule implements NestModule{ 
  configure(consumer:MiddlewareConsumer){
    consumer.apply(BookMiddleWare).forRoutes("books")
  }
}