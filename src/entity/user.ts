import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Page } from './page';

@EntityModel('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  account: string;
  @Column()
  password: string;
  @OneToMany(() => Page, page => page.creator)
  pages: Page[];
}
