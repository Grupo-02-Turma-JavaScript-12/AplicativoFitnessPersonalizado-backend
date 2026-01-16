import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class TreinoService {
  constructor(private treinoRepository: Repository<Treino>) {}

  async findAll(): Promise<Treino[]> {
    return await this.temaRepository.find();
  }

  async findById(id: number): Promise<Treino> {
    const treino = await this.temaRepository.findOne({
      where: { id },
    });

    if (!treino) {
      throw new HttpException('Tema not found', HttpStatus.NOT_FOUND);
    }

    return treino;
  }

  async create(treino: treino): Promise<Treino> {
    return await this.treinoRepository.save(treino);
  }

  async update(treino: treino): Promise<Treino> {
    const treino = await this.findById(treino.id);
    return await this.treinoRepository.save(treino);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.treinoRepository.delete(id);
  }
}
