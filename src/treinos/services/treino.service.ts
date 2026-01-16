import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class TreinoService {
  constructor(private temaRepository: Repository<Tema>) {}

  async findAll(): Promise<Tema[]> {
    return await this.temaRepository.find();
  }

  async findById(id: number): Promise<Tema> {
    const tema = await this.temaRepository.findOne({
      where: { id },
    });

    if (!tema) {
      throw new HttpException('Tema not found', HttpStatus.NOT_FOUND);
    }

    return tema;
  }

  async create(tema: Tema): Promise<Tema> {
    return await this.temaRepository.save(tema);
  }

  async update(tema: Tema): Promise<Tema> {
    const tema = await this.findById(tema.id);
    return await this.temaRepository.save(tema);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.temaRepository.delete(id);
  }
}
