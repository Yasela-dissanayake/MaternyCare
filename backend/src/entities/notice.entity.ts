import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Notice {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  sub_title!: string;

  @Column()
  message!: string;

  @Column()
  image_url!: string;
}
