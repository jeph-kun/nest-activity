import { DeleteResult, Repository } from 'typeorm';
import { IAnimalRepository } from '../interface/ianimal-repository.interface';
import { AnimalEntity } from '../entities/animal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@nestjs/common';
import { CreateAnimalDto } from '../dto/create-animal';
import { UpdateAnimalDto } from '../dto/update-animal.dto';

export class AnimalRepository implements IAnimalRepository {
  constructor(
    @InjectRepository(AnimalEntity)
    private animalEntity: Repository<AnimalEntity>,
  ) {}

  async create(data: CreateAnimalDto): Promise<AnimalEntity> {
    try {
      const createAnimal = this.animalEntity.create(data);
      return await this.animalEntity.save(createAnimal);
    } catch (error) {
      Logger.error('Creation of animal failed: ' + error);
    }
  }

  async findAll(): Promise<AnimalEntity[] | []> {
    return await this.animalEntity.find();
  }

  async findById(id: string): Promise<AnimalEntity> {
    return this.animalEntity.findOne({ where: { id: id } });
  }

  async update(id: string, data: UpdateAnimalDto): Promise<AnimalEntity> {
    try {
      await this.animalEntity.update({ id }, { ...data });
      return this.findById(id);
    } catch (error) {
      Logger.error('Update of animal failed: ' + error);
    }
  }

  async delete(id: string): Promise<DeleteResult> {
    try {
      return await this.animalEntity.delete(id);
    } catch (error) {
      Logger.error('Deletion of animal failed: ' + error);
    }
  }
}
