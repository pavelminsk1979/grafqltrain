import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @Column()
  public lastname: string;

  @Column()
  public email: string;

  @Column()
  public age: number;

  @Column()
  public createdDate: string;
}
