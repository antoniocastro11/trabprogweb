import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';
import { ArtigoInterface } from '../interfaces/artigo.interface';

@Table
export class Artigo
  extends Model<ArtigoInterface>
  implements ArtigoInterface
{
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  nome: string;

  @Column
  sigla: string;

  @Column
  pais: string;

  @Column
  cnpj: string;

  @Column
  cep: string;

  @Column
  logradouro: string;

  @Column
  bairro: string;

  @Column
  numero: number;

  @Column
  localidade: string;

  @Column({ allowNull: true })
  complemento: string;

  @Column
  status: boolean;

  @Column
  uf: string;
}
