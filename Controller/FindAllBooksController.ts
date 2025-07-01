import { Controller, Get, HttpCode } from '@nestjs/common';
import { FindAllBooksService } from '../Service/FindAllBooksService';

@Controller('/books')
export class FindAllBooksController {
  constructor(private readonly findAllBooksService: FindAllBooksService) {}

  @Get()
  @HttpCode(200)
  async handle() {
    return await this.findAllBooksService.execute();
  }
}