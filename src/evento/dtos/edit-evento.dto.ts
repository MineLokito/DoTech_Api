import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './create-evento.dto';

export class EditEventoDto extends PartialType(CreateEventoDto) {}
