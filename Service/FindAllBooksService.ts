import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repository/book.repository';

@Injectable()
export class FindAllBooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute() {
    const books = await this.bookRepository.findAll();
    return books.map(book => ({
      id: book.id?.toString() || "",
      title: book.title,
      author: book.author,
      publicationYear: book.publicationYear,
      isbn: book.isbn,
      createdAt: book.createdAt,
      updatedAt: book.updatedAt
    }));
  }