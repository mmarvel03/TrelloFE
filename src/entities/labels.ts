import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,OneToMany } from 'typeorm';
import { Workspace } from './workspace';
import { CardLabel } from './cardLabel';

@Entity()
export class Label {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

 
  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => CardLabel,cardLabel=>cardLabel.label)
  cardLabel: CardLabel[]

  @ManyToOne(()=> Workspace,workspace=>workspace.label)
  workspace:Workspace

}
