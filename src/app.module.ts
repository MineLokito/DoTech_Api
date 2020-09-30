import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsuariosModule } from './users/usuarios.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}