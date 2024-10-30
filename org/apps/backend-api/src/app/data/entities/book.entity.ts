import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'books' })
export class BookEntity {
  public constructor({ name, author }) {
    this.name = name;
    this.author = author;
  }

  @PrimaryKey()
  @Property()
  id: number;

  @Property({ nullable: true })
  name: string;

  @Property({ nullable: true })
  author: string;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
