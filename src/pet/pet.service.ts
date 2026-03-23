import { Injectable } from '@nestjs/common';
import { Pet } from 'src/pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'

@Injectable()
export class PetService {

    constructor(@InjectRepository(Pet) private readonly petRepo: Repository<Pet>){}

    async getPet(userid:any):Promise<Pet[]>{
        const res:Pet[]=await this.petRepo.find({where:{user_id:userid}, loadRelationIds:true, order:{pet_name:"ASC"}})
        return res
    }

    async getPet1(pet_id:string):Promise<Pet | null>{
        const res:Pet | null=await this.petRepo.findOne({where:{pet_id}})
        return res
    }

    async postFeed(id, foodLevel){
        const res= await this.petRepo.update({pet_id:id},{pet_hunger:foodLevel})
        return res
    }

    async postHappy(id, happyLevel){
        const res= await this.petRepo.update({pet_id:id},{pet_happy:happyLevel})
        return res
    }
    
    async postSleep(id, restLevel){
        const res= await this.petRepo.update({pet_id:id},{pet_hunger:restLevel})
        return res
    }

    async postNewPet(id, name, type){
        const petId=(Math.floor(Math.random()*100)).toString()
        const res= await this.petRepo.insert({pet_id:petId, user_id:{user_id:id}, pet_name:name, pet_type:type, pet_hunger:100, pet_happy:100, pet_energy:100})
        return res
    }

    async deletePet(id){
        const res= await this.petRepo.delete({pet_id:id})
        return res
    }

    async getPetStatus(petId){
        const res= await this.petRepo.find({where:{pet_id:petId},select:{pet_hunger:true, pet_happy:true,pet_energy:true, pet_name:true}})
        return res
    }
}
