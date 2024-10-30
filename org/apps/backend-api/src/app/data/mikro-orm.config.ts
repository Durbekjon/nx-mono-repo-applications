// apps/my-app/src/data/mikro-orm.config.ts
import { defineConfig } from '@mikro-orm/postgresql'; // Foydalanayotganingizga mos drayverni import qiling
import { BookEntity } from './entities/book.entity';

export const dbConfiguration = defineConfig({
  entities: [BookEntity], // Entity'lar
  dbName: 'fuel',
  user: 'postgres',
  password: 'Saydaliyev0512',
  debug: true,
});
