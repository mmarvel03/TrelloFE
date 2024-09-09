import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { User } from './user';
import { Card } from './cards';


@Entity()
export class CardUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => User,user=>user.cardUser)
  user:User

  @ManyToOne(() => Card,card=>card.cardUser)
  card:Card
}

