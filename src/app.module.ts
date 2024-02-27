import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [DatabaseModule, AnimalModule],
  controllers: [AppController],
})
export class AppModule {}
