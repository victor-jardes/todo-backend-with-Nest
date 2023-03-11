import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entitie/User';
import { AllUserDTO } from './dto/all-user.dto';
import { UserModel } from './model/User.model';
import { PrismaUserRepositorie } from 'src/database/prisma/repositories/user/prisma-user-repositorie';

export type returnForCreateUser = {
  newUser: CreateUserDTO;
};

@Injectable()
export class UserService implements UserModel {
  constructor(private database: PrismaUserRepositorie) {}

  async findAll(): Promise<AllUserDTO[]> {
    return await this.database.findAll();
  }

  async create(body: CreateUserDTO): Promise<returnForCreateUser> {
    const { email, id, name, password } = new User(body);

    const createNewUser = await this.database.create({
      id,
      email,
      name,
      password,
    });

    return {
      newUser: {
        email: createNewUser.email,
        name: createNewUser.name,
        id: createNewUser.id,
        password: createNewUser.password,
      },
    };
  }
}
