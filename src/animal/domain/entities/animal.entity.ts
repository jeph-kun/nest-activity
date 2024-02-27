import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('animals')
export class AnimalEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  animalType: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
