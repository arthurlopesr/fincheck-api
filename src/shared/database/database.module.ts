import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/user.respositories';
import { CategoriesRepository } from './repositories/categories.respositories';
import { BankAccountsRepository } from './repositories/bank-accounts.respositories';
import { TransactionsRepository } from './repositories/tranasactions.respositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
  exports: [
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
