import { Controller, Get, Param, Delete } from '@nestjs/common';
import { SqlCardsService } from './sql-cards.service';
import { plainToInstance } from 'class-transformer';
import { CardDto } from 'src/cards/dto/card.dto';

@Controller('sql-cards')
export class SqlCardsController {
  constructor(private readonly sqlCardsService: SqlCardsService) {}

  @Get()
  async findAll() {
    const sqlCards = await this.sqlCardsService.findAll();
    return plainToInstance(CardDto, sqlCards, {
      excludeExtraneousValues: true,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.sqlCardsService.remove(+id);
  }
}
