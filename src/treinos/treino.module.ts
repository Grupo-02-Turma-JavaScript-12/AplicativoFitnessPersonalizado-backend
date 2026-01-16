import { TypeOrmModule } from '@nestjs/typeorm';
import { Treino } from './entities/treino.entity';
import { Module } from '@nestjs/common';
import { TreinoService } from './services/treino.service';
import { TreinoController } from './controllers/treino.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Treino])],
  providers: [TreinoService],
  controllers: [TreinoController],
  exports: [TreinoService],
})
export class TreinoModule {}
