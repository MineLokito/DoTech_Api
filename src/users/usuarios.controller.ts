import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Usuarios } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usersService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuarios[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Usuarios> {
    return this.usersService.findOne(id);
  }
}
