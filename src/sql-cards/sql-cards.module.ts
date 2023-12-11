import { Module } from '@nestjs/common';
import { SqlCardsService } from './sql-cards.service';
import { SqlCardsController } from './sql-cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqlCard } from './entities/sql-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SqlCard])],
  controllers: [SqlCardsController],
  providers: [SqlCardsService],
})
export class SqlCardsModule {}
