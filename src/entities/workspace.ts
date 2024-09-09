import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm';
import { Label } from './labels';
import { List } from './lists';


@Entity()
export class Workspace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  background_img_url: string;

  @Column()
  visibility: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Label,label=>label.workspace)
  label: Label[]

  @OneToMany(() => List,list=>list.workspace)
  list: List[]
}