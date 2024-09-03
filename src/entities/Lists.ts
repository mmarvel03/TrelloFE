import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class List{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  order!: string;

  @Column()
  created_at!: number;

  @Column()
  updated_at!: number;

}
