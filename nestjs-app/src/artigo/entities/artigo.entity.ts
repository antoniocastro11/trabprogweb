import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';
import { ArtigoInterface } from '../interfaces/artigo.interface';
import { DataTypes } from 'sequelize';
import { StatusArtigo } from '../interfaces/artigo.interface';

@Table
export class Artigo extends Model<Artigo> implements ArtigoInterface {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  titulo_artigo: string;

  @Column
  data_publicacao: Date;

  @Column
  nome_autor: string;

  @Column
  curso_autor: string;

  @Column
  orientador: string;

  @Column({ type: DataTypes.TEXT('long') })
  resumo_artigo: string;

  @Column
  numero_pg: number;

  @Column
  idioma: string;

  @Column({
    type: DataTypes.ENUM,
    values: [
      StatusArtigo.EM_ANALISE,
      StatusArtigo.APROVADO,
      StatusArtigo.REPROVADO,
    ],
  })
  status: StatusArtigo;

  @Column({ type: DataTypes.TEXT('long') })
  comentario_avaliacao: string;
}
