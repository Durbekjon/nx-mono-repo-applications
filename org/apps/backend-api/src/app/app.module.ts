import { BooksModule } from './api/books/books.module';
import { ApiModule } from './api/api.module';
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { dbConfiguration } from './data/mikro-orm.config';
@Module({
  imports: [MikroOrmModule.forRoot(dbConfiguration), BooksModule, ApiModule],
  exports: [ApiModule],
})
export class AppModule {}
