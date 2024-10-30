/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller({ path: 'books' })
export class BooksController {
  constructor(private readonly service: BooksService) {}
  @Get()
  getData() {
    return this.service.getBooks();
  }
}
