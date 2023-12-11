import { Test, TestingModule } from '@nestjs/testing';
import { SqlCardsService } from './sql-cards.service';

describe('SqlCardsService', () => {
  let service: SqlCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SqlCardsService],
    }).compile();

    service = module.get<SqlCardsService>(SqlCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
