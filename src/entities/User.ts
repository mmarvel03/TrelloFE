import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm';
import{WorkspaceUsers} from './workspaceUsers'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  date_of_birth: Date;

  @Column()
  email: string;

  @Column()
  password: number;

  @Column()
  avatar_url: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => WorkspaceUsers,workspaceUsers=>workspaceUsers.workspace)
  workspaceUsers: WorkspaceUsers[]
}
