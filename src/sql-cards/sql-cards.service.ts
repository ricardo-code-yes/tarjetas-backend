import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SqlCard } from './entities/sql-card.entity';

@Injectable()
export class SqlCardsService {
  constructor(
    @InjectRepository(SqlCard)
    private readonly sqlCardRepository: Repository<SqlCard>,
  ) {}

  async findAll() {
    return this.sqlCardRepository.find();
  }

  async remove(id: number) {
    await this.sqlCardRepository.delete(id);
  }
}
