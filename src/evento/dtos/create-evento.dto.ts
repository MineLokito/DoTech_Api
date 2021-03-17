import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateEventoDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  nombre: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  descripcion: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  lugar: string;

  @IsString()
  @MinLength(8)
  @MaxLength(128)
  hora: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  fecha: string;
}
