import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { UserService } from './user.service';
import { PrismaUserRepositorie } from 'src/database/prisma/repositories/user/prisma-user-repositorie';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [PrismaUserRepositorie, UserService],
})
export class UserModule {}
