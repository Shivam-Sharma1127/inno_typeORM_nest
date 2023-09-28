import { Controller, Post, Body, Get, Put, Delete,Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.entity/books.entity';
import { BookGuard } from './book.guard';

@Controller('books')
@UseGuards(new BookGuard)//this decorater is in root level for this page so it will be aplicable on whole controller of this pages
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