import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  visibility: string;

  @Column()
  created_at: number;

  @Column()
  updated_at: number;
}