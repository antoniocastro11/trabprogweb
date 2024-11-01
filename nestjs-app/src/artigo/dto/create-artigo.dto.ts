import { ApiProperty } from '@nestjs/swagger';
import { ArtigoInterface } from '../interfaces/artigo.interface';

export class CreateArtigoDto implements Omit<ArtigoInterface, 'id'> {
  @ApiProperty({
    description: 'nome do artigo.',
    example: 'La ele da silva',
  })
  titulo_artigo: string;

  @ApiProperty({
    description: 'data de publicacao do artigo.',
    example: '11/11/2011',
  })
  data_publicacao: Date;

  @ApiProperty({
    description: 'nome do autor do artigo.',
    example: 'La ele da silva',
  })
  nome_autor: string;

  @ApiProperty({
    description: 'curso do autor do artigo.',
    example: 'Engenharia de Software',
  })
  curso_autor: string;

  @ApiProperty({
    description: 'resumo do artigo.',
    example: 'Artigo sobre a importancia do uso de testes unitarios',
  })
  resumo_artigo: string;

  @ApiProperty({
    description: 'número de páginas do artigo.',
    example: '20',
  })
  numero_pg: number;

  @ApiProperty({
    description: 'idimoa do artigo.',
    example: ' Portugues',
  })
  idioma: string;


  @ApiProperty({
    description: 'status do artigo.',
    example: true,
  })
  status: boolean;

}
