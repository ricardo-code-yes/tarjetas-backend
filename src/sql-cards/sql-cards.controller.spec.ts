import { Test, TestingModule } from '@nestjs/testing';
import { SqlCardsController } from './sql-cards.controller';
import { SqlCardsService } from './sql-cards.service';

describe('SqlCardsController', () => {
  let controller: SqlCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SqlCardsController],
      providers: [SqlCardsService],
    }).compile();

    controller = module.get<SqlCardsController>(SqlCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
