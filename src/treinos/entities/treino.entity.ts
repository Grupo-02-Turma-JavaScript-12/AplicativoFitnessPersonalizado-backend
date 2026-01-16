import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_treino' })
export class Treino {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  name: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  level: string;

  @IsNotEmpty()
  @Column({ type: 'int', nullable: false })
  duration: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  type: string;

  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  description: string;
}
