import { Controller, Get, Param, Delete } from '@nestjs/common';
import { SqlCardsService } from './sql-cards.service';
import { InjectRepository } from '@nestjs/typeorm';
import { SqlCard } from './entities/sql-card.entity';
import { Repository } from 'typeorm';

@Controller('sql-cards')
export class SqlCardsController {
  @InjectRepository(SqlCard)
  private sqlCardRepository: Repository<SqlCard>;
  constructor(private readonly sqlCardsService: SqlCardsService) {}

  @Get()
  async findAll() {
    return this.sqlCardRepository.find();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sqlCardsService.remove(+id);
  }
}
