import { IsOptional, IsString } from 'class-validator';

export class UpdateAnimalDto {
  @IsString()
  @IsOptional()
  animalType: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}
