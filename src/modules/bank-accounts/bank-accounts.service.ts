import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.respositories';

@Injectable()
export class BankAccountsService {
  constructor(private readonly bankAccountRepo: BankAccountsRepository) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { color, initialBalance, name, type } = createBankAccountDto;

    return this.bankAccountRepo.create({
      data: {
        userId,
        color,
        initialBalance,
        name,
        type,
      },
    });
  }

  findAllByUserId(userId: string) {
    return this.bankAccountRepo.findMany({
      where: {
        userId,
      },
    });
  }

  async update(
    userId: string,
    bankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    const isOwner = await this.bankAccountRepo.findFirst({
      where: { id: bankAccountId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Bank account not found');
    }

    const { color, initialBalance, name, type } = updateBankAccountDto;

    return this.bankAccountRepo.update({
      where: { id: bankAccountId },
      data: { color, initialBalance, name, type },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} bankAccount`;
  }
}
