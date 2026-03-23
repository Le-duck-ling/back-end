import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import {Pet} from './pet.entity';
import {PetService } from './pet/pet.service';
import {PetController} from './pet/pet.controller';
import {PetModule} from './pet/pet.module';

@Module({
  imports: [PetModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host:'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'Tamagochi',
    entities: [User, Pet],
    synchronize: false
  }), TypeOrmModule.forFeature([User, Pet])],
  controllers: [AppController, PetController],
  providers: [AppService, PetService],
})
export class AppModule {}
