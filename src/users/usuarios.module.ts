import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { Usuarios } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
