import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user';

@EntityModel('page')
export class Page {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column('text')
  page: string;
  @Column()
  is_delete: boolean;
  @Column()
  creatorId: number;
  @ManyToOne(() => User, creator => creator.pages)
  creator: User;
}
