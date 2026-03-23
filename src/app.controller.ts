import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  getUser(){
    return this.appService.getUser()
  }

  @Get('user/:id')
  getUser1(@Param('id') id:string){
    return this.appService.getUser1(id)
  }
}
