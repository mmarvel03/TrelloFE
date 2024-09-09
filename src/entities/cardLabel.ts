import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Card } from './cards';
import { Label } from './labels';


@Entity()
export class CardLabel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order: string;

  @Column()
  content: string;


  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => Label,label=>label.cardLabel)
  label:Label

  @ManyToOne(() => Card,card=>card.cardLabel)
  card:Card
}

