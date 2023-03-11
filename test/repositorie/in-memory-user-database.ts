import { User as UserModel } from '@prisma/client';
import { UserConstants } from '../../src/app/constants/user/userConstants';
import { CreateUserDTO } from '../../src/app/user/dto/create-user.dto';
import { Injectable } from '@nestjs/common';

const { userCreatedSucessFully } = UserConstants;

@Injectable()
export class MemoryDatabase {
  public memoryInfos: CreateUserDTO[] = [];

  async create(body: UserModel): Promise<string> {
    this.memoryInfos.push(body);
    return userCreatedSucessFully;
  }

  async findAll(): Promise<CreateUserDTO[]> {
    return this.memoryInfos;
  }
}
