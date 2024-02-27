import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto } from './domain/dto/create-animal';
import { AnimalEntity } from './domain/entities/animal.entity';
import { UpdateAnimalDto } from './domain/dto/update-animal.dto';
import { DeleteResult } from 'typeorm';
import { IAnimalService } from './domain/interface/ianimal-service.interface';
import { IAnimalRepository } from './domain/interface/ianimal-repository.interface';

@Injectable()
export class AnimalService implements IAnimalService {
  constructor(private animalRepository: IAnimalRepository) {}

  async addAnimal(data: CreateAnimalDto): Promise<AnimalEntity> {
    return this.animalRepository.create(data);
  }

  async updateAnimal(id: string, data: UpdateAnimalDto): Promise<AnimalEntity> {
    const animalData = await this.animalRepository.findById(id);

    if (!animalData) {
      throw new NotFoundException('Animal Not Found');
    }

    return await this.animalRepository.update(id, data);
  }

  async getAnimals(): Promise<AnimalEntity[] | []> {
    return this.animalRepository.findAll();
  }

  async getAnimal(id: string): Promise<AnimalEntity> {
    const animalData = await this.animalRepository.findById(id);

    if (!animalData) {
      throw new NotFoundException('Animal Not Found');
    }

    return animalData;
  }

  async deleteAnimal(id: string): Promise<DeleteResult> {
    const animalData = await this.animalRepository.findById(id);

    if (!animalData) {
      throw new NotFoundException('Animal Not Found');
    }

    return this.animalRepository.delete(id);
  }
}
