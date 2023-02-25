import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dto/create-user.dto';
import { MemoryDatabase } from '../memory/memory-database';

const usersInMemory = new MemoryDatabase();

@Injectable()
export class UserService {
  create(params: CreateUserDTO) {
    return usersInMemory.create(params);
  }

  findAll() {
    return usersInMemory.findAll();
  }
}
