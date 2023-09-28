import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './books.entity/books.entity';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book) private booksRepository: Repository<Book>) { }

    async getBooks(): Promise<Book[]> {
        return await this.booksRepository.find();
    }

    async getBook(_id: number): Promise<Book[]> {
        return await this.booksRepository.find({
            select: ["bookName", "bookTitle", "isAviable"],
            where: [{ "id": _id }]
        });
    }

    async updateBook(book: Book) {
        this.booksRepository.save(book)
    }

    async createBook(book: Book) {
        this.booksRepository.save(book)
    }

    async deleteBook(_id: number) {
        this.booksRepository.delete(_id);
    }
}