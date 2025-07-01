import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repository/book.repository';

interface Book {
    id: string,
    title: string,
    author: string,
    publicationYear: Date,
    isbn: string,
    createdAt: string | Date | undefined;
    updatedAt: string | Date | undefined | null;
}

interface CreateBookServiceRequest{
    id: string,
    title: string,
      author: string,
      publicationYear: Date,
      isbn: string,
        createdAt: string | Date | undefined;
    updatedAt: string | Date | undefined | null;
}

type CreateBookServiceResponse = {
    book: Book;

}

@Injectable()
export class CreateBookService {
    bookRepository: any;
    constructor (){}

        async execute({
            id,
            title,
            author,
            publicationYear,
            isbn,
            createdAt,
            updatedAt
        }:CreateBookServiceRequest):Promise<CreateBookServiceResponse>{
            const bookWithSameTitle = await this.bookRepository.findByTitle(title);

            if (bookWithSameTitle) {
                throw new Error("Book")
            }

        }:CreateBookServiceRequest):Promise<CreateBookServiceResponse>{
            const bookWithSameIsbn = await this.bookRepository.findByIsbn(isbn);

            if (bookWithSameIsbn) {
                throw new Error("Book with same ISBN already exists")
            }

            const newBook = await this.bookRepository.create();

            return {
                product: {
                    id: newBook.id?.toString() || "",
                    title,
                    author,
                    publicationYear,
                    isbn,
                    createdAt: newBook.createdAt,
                    updatedAt: newBook.updatedAt
                }
            }
    }
}