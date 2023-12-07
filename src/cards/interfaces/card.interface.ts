import { Document } from 'mongoose';

enum CardType {
  Visa = 'Visa',
  MasterCard = 'MasterCard',
  Amex = 'Amex',
  Other = 'Other',
}

export interface Card extends Document {
  number: string;
  firstName: string;
  lastName: string;
  expirationDate: string;
  cvv: string;
  cardType: CardType;
  issueDate?: string;
  billingAddress?: string;
}
