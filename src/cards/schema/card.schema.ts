import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

enum CardType {
  Visa = 'Visa',
  MasterCard = 'MasterCard',
  Amex = 'Amex',
  Other = 'Other',
}

@Schema()
export class Card extends Document {
  @Prop({
    required: true,
    minlength: 16,
    maxlength: 16,
    match: /^[0-9]{16}$/,
  })
  number: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({
    required: true,
    match: /^(0[1-9]|1[0-2])\/\d{2}$/,
    message: 'La fecha de vencimiento debe tener el formato MM/YY.',
  })
  expirationDate: string;

  @Prop({
    required: true,
    minlength: 3,
    maxlength: 4,
    match: /^[0-9]{3,4}$/,
  })
  cvv: string;

  @Prop({
    required: true,
    enum: Object.values(CardType),
  })
  cardType: string;

  @Prop({
    match: /^(0[1-9]|1[0-2])\/\d{2}$/,
    message: 'La fecha de emisión debe tener el formato MM/YY.',
  })
  issueDate: string;

  @Prop()
  billingAddress: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
