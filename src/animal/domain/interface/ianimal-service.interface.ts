import { DeleteResult } from 'typeorm';
import { CreateAnimalDto } from '../dto/create-animal';
import { AnimalEntity } from '../entities/animal.entity';
import { UpdateAnimalDto } from '../dto/update-animal.dto';

export abstract class IAnimalService {
  abstract addAnimal(data: CreateAnimalDto): Promise<AnimalEntity>;

  abstract getAnimals(): Promise<AnimalEntity[] | []>;

  abstract getAnimal(id: string): Promise<AnimalEntity>;

  abstract updateAnimal(
    id: string,
    data: UpdateAnimalDto,
  ): Promise<AnimalEntity>;

  abstract deleteAnimal(id: string): Promise<DeleteResult>;
}
