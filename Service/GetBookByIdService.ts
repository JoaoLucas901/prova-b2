import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from '../repository/book.repository';

@Injectable()
export class GetBookByIdService {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(id: string) {
    const book = await this.bookRepository.findById(Number(id));
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return {
      id: book.id?.toString() || "",
      title: book.title,
      author: book.author,
      publicationYear: book.publicationYear,
      isbn: book.isbn,
      createdAt: book.createdAt,
      updatedAt: book.updatedAt