import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Workspace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  background_img_url: string;

  @Column()
  visibility: string;

  @Column()
  created_at: number;

  @Column()
  updated_at: number;
}