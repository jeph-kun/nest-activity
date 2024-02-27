import { IsDefined, IsString } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  @IsDefined()
  animalType: string;

  @IsString()
  @IsDefined()
  name: string;

  @IsString()
  @IsDefined()
  description: string;
}
