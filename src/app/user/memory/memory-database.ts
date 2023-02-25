import { CreateUserDTO } from '../dto/create-user.dto';
import { MemoryInDatabase } from './index';

const memoryInfos: CreateUserDTO[] = [];

export class MemoryDatabase implements MemoryInDatabase {
  findAll(): CreateUserDTO[] {
    return memoryInfos;
  }

  create(body: CreateUserDTO): void {
    memoryInfos.push(body);
  }
}
