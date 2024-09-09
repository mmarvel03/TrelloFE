import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,OneToMany} from 'typeorm';
import { Workspace } from './workspace';
import { Card } from './cards';


@Entity()
export class List{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  order: string;

  @Column()
  created_at: Date ;

  @Column()
  updated_at: Date;


  @ManyToOne(()=> Workspace,workspace=>workspace.list)
  workspace:Workspace

  @OneToMany(() => Card,card=>card.list)
  card: Card[]
}

