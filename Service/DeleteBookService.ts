import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from '../repository/book.repository';

@Injectable()
export class DeleteBookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(id: string): Promise<void> {
    const book = await this.bookRepository.findById(Number(id));
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    await this.bookRepository.delete(Number(id));
  }