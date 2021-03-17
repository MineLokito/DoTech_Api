import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventoModule } from './evento/evento.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, EventoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
