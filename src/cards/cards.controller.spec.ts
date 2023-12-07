import { Test, TestingModule } from '@nestjs/testing';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { Card } from './schema/card.schema';
import { CardDto } from './dto/card.dto';
import { plainToInstance } from 'class-transformer';

jest.mock('./cards.service');

describe('CardsController', () => {
  let controller: CardsController;
  let cardsService: CardsService;

  const mockCards: Card[] = [
    {
      id: '123',
      number: '1111222233334444',
      firstName: 'Alice',
      lastName: 'Smith',
      expirationDate: '06/25',
      cvv: '123',
      cardType: 'MasterCard',
      issueDate: '01/22',
      billingAddress: '123 Oak St, Townsville',
    },
    {
      id: '456',
      number: '5555666677778888',
      firstName: 'Bob',
      lastName: 'Johnson',
      expirationDate: '09/24',
      cvv: '456',
      cardType: 'Visa',
      issueDate: '03/21',
      billingAddress: '456 Maple Ave, Citytown',
    },
  ] as Card[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardsController],
      providers: [CardsService],
    }).compile();

    controller = module.get<CardsController>(CardsController);
    cardsService = module.get<CardsService>(CardsService);
  });

  describe('findAll', () => {
    it('should return an array of CardDto', async () => {
      jest
        .spyOn(cardsService, 'findAll')
        .mockResolvedValue(mockCards as Card[]);

      const result = await controller.findAll();
      expect(result).toEqual(
        plainToInstance(CardDto, mockCards, { excludeExtraneousValues: true }),
      );
    });
  });

  describe('remove', () => {
    it('should return the deleted card', async () => {
      const mockDeletedCard: any = mockCards[0];
      jest.spyOn(cardsService, 'remove').mockResolvedValue(mockDeletedCard);
      const result = await controller.remove(mockCards[0].id);
      expect(result).toEqual(mockDeletedCard);
    });
  });
});
