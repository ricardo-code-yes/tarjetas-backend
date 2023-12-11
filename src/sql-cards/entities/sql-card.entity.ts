// sql-card.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SqlCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  number: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ length: 5 })
  expirationDate: string;

  @Column({ length: 4 })
  cvv: string;

  @Column({ length: 20 })
  cardType: string;

  @Column({ length: 5, nullable: true })
  issueDate: string;

  @Column({ nullable: true })
  billingAddress: string;

  constructor(sqlCard: Partial<SqlCard>) {
    Object.assign(this, sqlCard);
  }
}
