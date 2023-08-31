import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.respositories';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoririesRepo: CategoriesRepository) {}

  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAllByUserId(userId: string) {
    return this.categoririesRepo.findMany({
      where: { userId },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
