import { Controller, Get, Param, Body, Post, Delete } from '@nestjs/common';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {

    constructor(private readonly petService: PetService){}

    @Get('pet/:userid')
    getPet(@Param('userid') userid:string){
        return this.petService.getPet(userid)
    }

    @Get('pet/:id')
    getPet1(@Param('id') id){
        return this.petService.getPet1(id)
    }

    @Post('pet/happy/:id')
    cuddlePet(@Param('id') id, @Body('happyLevel') happyLevel:number){
        return this.petService.postHappy(id, happyLevel)
    }

    @Post('pet/feed/:id')
    feedThePet(@Param('id') id, @Body('foodLevel') foodLevel:number){
        return this.petService.postFeed(id, foodLevel)
    }

    @Post('pet/sleep/:id')
    restThePet(@Param('id') id, @Body('restLevel') restLevel){
        return this.petService.postSleep(id, restLevel)
    }

    @Post('pet/new/:id')
    postNewPet(@Param('id') id, @Body('name') name, @Body('type') type){
        return this.petService.postNewPet(id, name, type)
    }

    @Delete('pet/delete/:id')
    deletePet(@Param('id') id: string){
        return this.petService.deletePet(id)
    }

    @Get('pet/status/:id')
    getPetStatus(@Param('id') id:string){
        return this.petService.getPetStatus(id)
    }
}

