import { Injectable } from '@nestjs/common';
import { Usuarios } from './usuarios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usersRepository: Repository<Usuarios>,
  ) {}

  async findAll(): Promise<Usuarios[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Usuarios> {
    return this.usersRepository.findOne(id);
  }
}
