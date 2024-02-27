import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './domain/dto/create-animal';
import { AnimalEntity } from './domain/entities/animal.entity';
import { UpdateAnimalDto } from './domain/dto/update-animal.dto';
import { DeleteResult } from 'typeorm';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  async createNewAnimal(@Body() data: CreateAnimalDto): Promise<AnimalEntity> {
    return await this.animalService.addAnimal(data);
  }

  @Put('/:id')
  async updateAnimal(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() data: UpdateAnimalDto,
  ): Promise<AnimalEntity> {
    return await this.animalService.updateAnimal(id, data);
  }

  @Get()
  async listAnimals(): Promise<AnimalEntity[] | []> {
    return await this.animalService.getAnimals();
  }

  @Get('/:id')
  async getAnimalDetails(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<AnimalEntity> {
    return await this.animalService.getAnimal(id);
  }

  @Delete('/:id')
  async deleteAnimal(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<DeleteResult> {
    return await this.animalService.deleteAnimal(id);
  }
}
