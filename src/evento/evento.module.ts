import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './entities';
import { EventoController } from './evento.controller';
import { EventoService } from './evento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Evento])],
  controllers: [EventoController],
  providers: [EventoService],
})
export class EventoModule {}
