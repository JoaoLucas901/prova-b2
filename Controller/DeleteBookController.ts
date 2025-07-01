import { Controller, Delete, Param, HttpCode, NotFoundException } from '@nestjs/common';
import { DeleteBookService } from '../Service/DeleteBookService';

@Controller('/books')
export class DeleteBookController {
  constructor(private readonly deleteBookService: DeleteBookService) {}

  @Delete(':id')
  @HttpCode(204)
  async handle(@Param('id') id: string): Promise<void> {
    await this.deleteBookService.execute(id);
  }
}