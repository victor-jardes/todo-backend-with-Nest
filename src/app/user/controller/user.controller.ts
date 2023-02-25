import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private myService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDTO) {
    console.log(body);
    return await this.myService.create(body);
  }

  @Get()
  findAll() {
    return this.myService.findAll();
  }
}
