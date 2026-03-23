import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "./user.entity"
import {Pet} from "./pet.entity";

@Injectable()
export class AppService {
  
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, @InjectRepository(Pet) private readonly petRepository: Repository<Pet>) {}

  async getUser():Promise<User[]>{
    const res:User[]= await this.userRepository.find();
    return res;
  }

  userid=''
  async getUser1(id:string):Promise<User | null>{
    const res:User | null= await this.userRepository.findOne({where: {user_id: id}});
    return res;
  }

  async getUserId(username, password):Promise<any>{
    const res= await this.userRepository.findOne({select:['user_id'], where: {user_name: username, password: password}});
    return res;
  }

  async addUser(user:User):Promise<any>{
    const res=await this.userRepository.insert({user_id:user.user_id, user_name: user.user_name, user_mail:user.user_mail, password: user.password});
    return res;
  }

  async deleteUser(userid:string):Promise<any>{
    const res=await this.userRepository.delete({user_id: userid});
  }

}
