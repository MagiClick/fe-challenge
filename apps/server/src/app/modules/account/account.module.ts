import { Module } from '@nestjs/common';
import { PrismaService } from '../../globals/prisma.service';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  controllers: [AccountController],
  providers: [PrismaService, AccountService],
})
export class AccountModule {}
