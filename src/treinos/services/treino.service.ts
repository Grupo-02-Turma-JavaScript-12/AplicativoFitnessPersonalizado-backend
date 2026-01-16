import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, ILike } from 'typeorm';
import { Treino } from '../entities/treino.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TreinoService {
  constructor(
    @InjectRepository(Treino) private treinoRepository: Repository<Treino>,
  ) {}

  async findAll(): Promise<Treino[]> {
    return await this.treinoRepository.find();
  }

  async findById(id: number): Promise<Treino> {
    const treino = await this.treinoRepository.findOne({
      where: { id },
    });

    if (!treino) {
      throw new HttpException('treino nao encontado', HttpStatus.NOT_FOUND);
    }

    return treino;
  }

  async findAllbyName(name: string): Promise<Treino[]> {
    return await this.treinoRepository.find({
      where: {
        name: ILike(`%${name}%`),
      },
    });
  }

  async create(treino: Treino): Promise<Treino> {
    return await this.treinoRepository.save(treino);
  }

  async update(treino: Treino): Promise<Treino> {
    const onTreino = await this.findById(treino.id);
    return await this.treinoRepository.save(onTreino);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.treinoRepository.delete(id);
  }
}
