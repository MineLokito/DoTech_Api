import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventoDto, EditEventoDto } from './dtos';
import { Evento } from './entities';

export interface UserFindOne {
  id?: number;
  nombre?: string;
}

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento)
    private readonly userRepository: Repository<Evento>,
  ) {}

  async getMany() {
    return await this.userRepository.find();
  }

  async getOne(id: number) {
    const evento = await this.userRepository.findOne(id);
    if (!evento) throw new NotFoundException('Evento no existe');

    return evento;
  }

  async createOne(dto: CreateEventoDto) {
    const userExist = await this.userRepository.findOne({ nombre: dto.nombre });
    if (userExist)
      throw new BadRequestException('ya hay un evento con ese nombre');

    const nuevoEvento = this.userRepository.create(dto);
    const evento = await this.userRepository.save(nuevoEvento);
    return evento;
  }

  async editOne(id: number, dto: EditEventoDto) {
    const evento = await this.getOne(id);
    const editedEvento = Object.assign(evento, dto);
    return await this.userRepository.save(editedEvento);
  }

  async deleteOne(id: number) {
    const evento = await this.getOne(id);
    return await this.userRepository.remove(evento);
  }

  async findOne(data: UserFindOne) {
    return await this.userRepository
      .createQueryBuilder('evento')
      .where(data)
      .getOne();
  }
}
