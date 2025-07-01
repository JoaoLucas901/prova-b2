import { Controller, Get, Param, HttpCode, NotFoundException } from '@nestjs/common';
import { GetBookByIdService } from '../Service/GetBookByIdService';

@Controller('/books')
export class GetBookByIdController {
  constructor(private readonly getBookByIdService: GetBookByIdService) {}

  @Get(':id')
  @HttpCode(200)
  async handle(@Param('id') id: string) {
    return await this.getBookByIdService.execute(id);
  }
}

GetBookByIdController.prototype.handle = async function (id: string) {
    return await this.getBookByIdService.execute(id);
}