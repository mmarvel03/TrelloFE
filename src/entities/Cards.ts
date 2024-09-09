import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany} from 'typeorm';
import { List } from './lists';
import { CardUser } from './cardUser';
import { Comments } from './comments';
import { CardLabel } from './cardLabel';



@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  due_date:Date;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => List,list=>list.card)
  list: List

  @OneToMany(() => CardUser,cardUser=>cardUser.card)
  cardUser: CardUser[]

  @OneToMany(() => Comments,comments=>comments.card)
  comments: Comments[]

  @OneToMany(() => CardLabel,cardLabel=>cardLabel.card)
  cardLabel: CardLabel[]
}

