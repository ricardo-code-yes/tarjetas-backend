import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class CardDto {
  @Expose()
  @IsString()
  @ApiProperty()
  id: string;

  @Expose()
  @IsString()
  @ApiProperty()
  number: string;

  @Expose()
  @IsString()
  @ApiProperty()
  firstName: string;

  @Expose()
  @IsString()
  @ApiProperty()
  lastName: string;

  @Expose()
  @IsString()
  @ApiProperty()
  expirationDate: string;

  @Exclude()
  @IsString()
  @Transform(({ value }) => value.toString())
  cvv: string;

  @Exclude()
  @IsString()
  cardType: string;

  @Exclude()
  @IsString()
  issueDate: string;

  @Exclude()
  @IsString()
  billingAddress: string;
}
