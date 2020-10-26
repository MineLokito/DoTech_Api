import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Usuarios } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';
import { UsuariosDto } from './dto/usuarios.dto';

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

  @Post()
  create(@Body() createUsuarioDto: UsuariosDto): Promise<Usuarios> {
    return this.usersService.create(createUsuarioDto);
  }
}
