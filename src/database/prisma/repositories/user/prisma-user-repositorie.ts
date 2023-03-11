import { User as UserPrisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/app/user/dto/create-user.dto';
import { AllUserDTO } from 'src/app/user/dto/all-user.dto';

@Injectable()
export class PrismaUserRepositorie {
  constructor(private prisma: PrismaService) {}

  async create({
    id,
    name,
    email,
    password,
  }: UserPrisma): Promise<CreateUserDTO> {
    return await this.prisma.user.create({
      data: {
        id,
        name,
        email,
        password,
      },
    });
  }

  async findAll(): Promise<AllUserDTO[]> {
    return await this.prisma.user.findMany();
  }
}
