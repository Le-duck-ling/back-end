import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from 'src/pet.entity';

@Module({
  controllers: [PetController],
  providers: [PetService],
  imports:[TypeOrmModule.forFeature([Pet])]
})
export class PetModule {}
