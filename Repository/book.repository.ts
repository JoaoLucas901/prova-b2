import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

export class BookRepository {
  constructor(private prisma: PrismaService) {}

    create(data: Prisma.BookUncheckedCreateInput) {
      return this.prisma.book.create({
        data,
      });

      findAll(): Promise<Prisma.BookUncheckedCreateInput[] | null> {
      }

        findById(id: string): Promise<Prisma.BookUncheckedCreateInput | null> {
    const book = this.prisma.book.findUnique({
      where: { id },
    });

    findByTitle(title: string): Promise<Prisma.BookUncheckedCreateInput | null> {
      return this.prisma.book.findUnique({
        where: { title },
      });
    }
    findByISBN(isbn: string): Promise<Prisma.BookUncheckedCreateInput | null> {
      return this.prisma.book.findUnique({
        where: { isbn },
      });
    }
  }
};