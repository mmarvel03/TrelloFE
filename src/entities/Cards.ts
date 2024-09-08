import { Entity, PrimaryGeneratedColumn, Column,JoinColumn, ManyToOne} from 'typeorm';
import { List } from './lists';


@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;


  @ManyToOne(() => List)
  @JoinColumn()
  list: List
}

