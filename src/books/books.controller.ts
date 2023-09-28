import { Controller, Post, Body, Get, Put, Delete,Param, ParseIntPipe} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.entity/books.entity';

@Controller('books')
export class BooksController {

    constructor(private service: BooksService) { }

    @Get(':id')
    get(@Param("id",ParseIntPipe) id:number) {
        return this.service.getBook(id);
    }

    @Get("")
    findAll() {
        return this.service.getBooks();
    }

    @Post()
    create(@Body() book: Book) {
        return this.service.createBook(book);
    }

    @Put()
    update(@Body() book: Book) {
        return this.service.updateBook(book);
    }

    @Delete(':id')
    deletebook(@Param() params) {
        return this.service.deleteBook(params.id);
    }
}