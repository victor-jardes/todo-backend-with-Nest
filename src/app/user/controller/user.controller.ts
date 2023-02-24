import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  // constructor( private myService: Myservice ) {}

  @Post()
  create(@Body() body: CreateUserDTO) {
    return 'your user';
  }

  @Get()
  findAll() {
    return 'all users';
  }
}
