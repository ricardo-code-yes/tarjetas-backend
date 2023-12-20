// src/cards/cards.controller.ts
import {
  Controller,
  Get,
  Param,
  Delete,
  UseInterceptors,
  // UseGuards,
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardDto } from './dto/card.dto';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { cardExample } from '../examples/cards.examples';
import { ApiResponse } from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lista de tarjetas',
    type: [CardDto],
    content: {
      'application/json': {
        example: cardExample,
      },
    },
  })
  async findAll(): Promise<CardDto[]> {
    const cards = await this.cardsService.findAll();
    return plainToInstance(CardDto, cards, { excludeExtraneousValues: true });
  }
  // @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    const deletedCard = await this.cardsService.remove(id);
    return deletedCard;
  }
}
