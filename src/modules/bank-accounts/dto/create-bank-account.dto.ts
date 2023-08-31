import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsHexColor,
} from 'class-validator';
import { BankAccounType } from '../entities/BankAccount';

export class CreateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @IsNotEmpty()
  @IsEnum(BankAccounType)
  type: BankAccounType;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;
}
