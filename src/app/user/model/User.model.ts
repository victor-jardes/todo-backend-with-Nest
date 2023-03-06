import { AllUserDTO } from '../dto/all-user.dto';
import { CreateUserDTO } from '../dto/create-user.dto';

export type returnForCreateUser = {
  newUser: CreateUserDTO;
};

export abstract class UserModel {
  abstract create(body: CreateUserDTO): Promise<returnForCreateUser>;
  abstract findAll(): Promise<AllUserDTO[]>;
}
