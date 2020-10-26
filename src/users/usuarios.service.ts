import { Injectable } from '@nestjs/common';
import { Usuarios } from './usuarios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuariosDto } from './dto/usuarios.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usersRepository: Repository<Usuarios>,
  ) {}

  create(createUsuarioDto: UsuariosDto): Promise<Usuarios> {
    const user = new Usuarios();
    user.nombre = createUsuarioDto.nombre;
    user.correo = createUsuarioDto.correo;
    user.contrasena = createUsuarioDto.contrasena;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<Usuarios[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Usuarios> {
    return this.usersRepository.findOne(id);
  }
}
