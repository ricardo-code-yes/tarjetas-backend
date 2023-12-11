import { PartialType } from '@nestjs/swagger';
import { CreateSqlCardDto } from './create-sql-card.dto';

export class UpdateSqlCardDto extends PartialType(CreateSqlCardDto) {}
