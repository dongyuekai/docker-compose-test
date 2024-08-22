import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aaa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 30,
  })
  username: string;

  @Column({
    length: 30,
  })
  password: string;
}
