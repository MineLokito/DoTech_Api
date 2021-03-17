import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEventoDto, EditEventoDto } from './dtos';
import { EventoService } from './evento.service';

@Controller('evento')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  async getMany() {
    const data = await this.eventoService.getMany();
    return { data };
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const data = await this.eventoService.getOne(id);
    return { data };
  }

  @Post()
  async createOne(@Body() dto: CreateEventoDto) {
    const data = await this.eventoService.createOne(dto);
    return { message: 'Evento Creado', data };
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: EditEventoDto) {
    const data = await this.eventoService.editOne(id, dto);
    return { message: 'Evento editado', data };
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.eventoService.deleteOne(id);
    return { message: 'Evento deleted', data };
  }
}
