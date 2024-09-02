import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  created_at!: number;

  @Column()
  updated_at!: number;
}