import { Model, Types } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './schema/card.schema';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}

  async findAll(): Promise<Card[]> {
    return this.cardModel.find().exec();
  }

  async remove(id: string) {
    const card = await this.cardModel.findById(id).exec();
    if (!card) {
      throw new NotFoundException(`Card with ID ${id} not found`);
    }
    const deletedCard = await this.cardModel
      .deleteOne({ _id: new Types.ObjectId(id) })
      .exec();
    console.log('deletedCard: ', deletedCard);
    return deletedCard;
  }
}
