import { CreateUserDTO } from '../dto/create-user.dto';

export abstract class MemoryInDatabase {
  abstract create(body: CreateUserDTO): void;
  abstract findAll(): CreateUserDTO[];
}
