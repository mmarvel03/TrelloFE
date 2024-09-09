import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { User } from './user';


@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  activity: boolean;

  @Column()
  content: string;

  @Column()
  visibility: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => User,user=>user.comments)
  user:User
}

