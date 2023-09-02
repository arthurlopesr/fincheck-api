import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from 'src/shared/database/repositories/tranasactions.respositories';

@Injectable()
export class ValidateTransactionOwnershipService {
  constructor(private readonly transactionRepo: TransactionsRepository) {}

  async validate(userId: string, transactionId: string) {
    const isOwner = await this.transactionRepo.findFirst({
      where: { id: transactionId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Transaction not found');
    }
  }
}
