import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/user.respositories';
import { CategoriesRepository } from './repositories/categories.respositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, CategoriesRepository],
  exports: [UsersRepository, CategoriesRepository],
})
export class DatabaseModule {}
