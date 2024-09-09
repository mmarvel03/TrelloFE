import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';



@Entity()
export class List{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  order: string;

  @Column()
  created_at: Date ;

  @Column()
  updated_at: Date;

  @Column()
  workspace_id: number;

}

