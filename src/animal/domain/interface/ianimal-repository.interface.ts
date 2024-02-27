import { DeleteResult } from 'typeorm';
import { CreateAnimalDto } from '../dto/create-animal';
import { AnimalEntity } from '../entities/animal.entity';
import { UpdateAnimalDto } from '../dto/update-animal.dto';

export abstract class IAnimalRepository {
  abstract create(data: CreateAnimalDto): Promise<AnimalEntity>;

  abstract findAll(): Promise<AnimalEntity[] | []>;

  abstract findById(id: string): Promise<AnimalEntity>;

  abstract update(id: string, data: UpdateAnimalDto): Promise<AnimalEntity>;

  abstract delete(id: string): Promise<DeleteResult>;
}
