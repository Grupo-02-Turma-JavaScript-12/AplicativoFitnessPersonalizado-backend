import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Body,
  Put,
  Delete,
  Post,
} from '@nestjs/common';
import { TreinoService } from '../services/treino.service';
import { Treino } from '../entities/treino.entity';

@Controller('/treinos')
export class TreinoController {
  constructor(private readonly postagemService: TreinoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Treino[]> {
    return this.postagemService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Treino> {
    return this.postagemService.findById(id);
  }

  @Get('/treino/:name')
  @HttpCode(HttpStatus.OK)
  findAllbyName(@Param('name') name: string): Promise<Treino[]> {
    return this.postagemService.findAllbyName(name);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() treino: Treino): Promise<Treino> {
    return this.postagemService.create(treino);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() treino: Treino): Promise<Treino> {
    return this.postagemService.update(treino);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.delete(id);
  }
}
