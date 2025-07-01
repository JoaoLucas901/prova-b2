import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from '../repository/book.repository';

interface EditBookServiceRequest {
  id: string;
  title?: string;
  author?: string;
  publicationYear?: number;
  isbn?: string;
  categoryId?: number;
}

@Injectable()
export class EditBookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute({
    id,
    title,
    author,
    publicationYear,
    isbn,
    categoryId
  }: EditBookServiceRequest) {
    const book = await this.bookRepository.findById(Number(id));
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    const updatedBook = await this.bookRepository.update(Number(id), {
      title,
      author,
      publicationYear,
      isbn,
      categoryId
    });

    return {
      id: updatedBook.id?.toString() || "",
      title: updatedBook.title,
      author: updatedBook.author,
      publicationYear: updatedBook.publicationYear,
      isbn: updatedBook.isbn,
      createdAt: updatedBook.createdAt,
      updatedAt: updatedBook.updatedAt
    };
  }