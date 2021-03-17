import { hash } from 'bcryptjs';

import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Usuarios')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, default: '', nullable: true })
  name: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 255,
    default: '',
    nullable: true,
  })
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 128, nullable: false, select: false })
  password: string;

  @Column({ type: 'bit', default: true, nullable: true })
  isAdmin: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'datetime2', nullable: true })
  createdAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }
}
