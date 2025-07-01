import { Controller, Put, Param, Body, HttpCode, NotFoundException } from '@nestjs/common';
import { EditBookService } from '../Service/EditBookService';

@Controller('/books')
export class EditBookController {
  constructor(private readonly editBookService: EditBookService) {}

  @Put(':id')
  @HttpCode(200)
  async handle(@Param('id') id: string, @Body() body: any) {
    return await this.editBookService.execute({ id, ...body });
    }
  }