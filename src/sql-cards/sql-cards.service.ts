import { Injectable } from '@nestjs/common';

@Injectable()
export class SqlCardsService {
  findAll() {
    return `This action returns all sqlCards`;
  }

  remove(id: number) {
    return `This action removes a #${id} sqlCard`;
  }
}
