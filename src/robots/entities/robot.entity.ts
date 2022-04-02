import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Robot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guid: string;

  @Column()
  name: string;

  @Column()
  purpose: string;

  @Column()
  avatarUrl: string;
}
