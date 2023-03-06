import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private serviceForController: UserService) {}

  @Get()
  async findAll() {
    return await this.serviceForController.findAll();
  }

  @Post()
  async create(@Body() body: CreateUserDTO): Promise<CreateUserDTO> {
    const {
      newUser: { email, name, password, id },
    } = await this.serviceForController.create(body);
    return {
      id,
      name,
      email,
      password,
    };
  }
}
