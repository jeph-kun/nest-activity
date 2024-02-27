import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { AnimalRepository } from './domain/repository/animal.repository';
import { AnimalEntity } from './domain/entities/animal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IAnimalRepository } from './domain/interface/ianimal-repository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalEntity])],
  controllers: [AnimalController],
  providers: [
    AnimalService,
    {
      provide: IAnimalRepository,
      useClass: AnimalRepository,
    },
  ],
})
export class AnimalModule {}
