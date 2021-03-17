import { Timestamp } from 'rxjs';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Eventos')
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, default: '', nullable: true })
  nombre: string;

  @Column({ type: 'varchar', length: 255, default: '', nullable: true })
  descripcion: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  lugar: string;

  @Column({ type: 'varchar', default: true, nullable: true })
  hora: string;

  @CreateDateColumn({ name: 'fecha', type: 'datetime2', nullable: true })
  fecha: Date;
}
