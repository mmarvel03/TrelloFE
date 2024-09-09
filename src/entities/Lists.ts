import { Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm';
import { Workspace } from './workspace';


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
}

