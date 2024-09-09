import { Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm';
import { Workspace } from './workspace';
import { User } from './user';


@Entity()
export class WorkspaceUsers{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @Column()
  created_at: Date ;

  @Column()
  updated_at: Date;

  @ManyToOne(()=> User,user=>user.workspaceUsers)
  user:User

  @ManyToOne(()=> Workspace,workspace=>workspace.workspaceUsers)
  workspace:Workspace
}

