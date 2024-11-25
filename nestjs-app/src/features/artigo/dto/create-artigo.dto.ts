import { ApiProperty } from '@nestjs/swagger';
import {
  ArtigoInterface,
  StatusArtigo,
} from '../../../modules/artigo/interfaces/artigo.interface';

export class CreateArtigoDto implements Omit<ArtigoInterface, 'id'> {
  @ApiProperty({
    description: 'Título do artigo.',
    example: 'A execução de testes unitarios na comunidade de desenvolvimento',
  })
  titulo_artigo: string;

  @ApiProperty({
    description: 'Data de publicacao do artigo.',
    example: '11/11/2011',
  })
  data_publicacao: Date;

  @ApiProperty({
    description: 'Nome do autor do artigo.',
    example: 'Lucas Moreira',
  })
  nome_autor: string;

  @ApiProperty({
    description: 'Curso do autor do artigo.',
    example: 'Engenharia de Software',
  })
  curso_autor: string;

  @ApiProperty({
    description: 'Orientador do artigo.',
    example: 'João da silva',
  })
  orientador: string;

  @ApiProperty({
    description: 'Resumo do artigo.',
    example: 'Artigo sobre a importancia do uso de testes unitarios',
  })
  resumo_artigo: string;

  @ApiProperty({
    description: 'Número de páginas do artigo.',
    example: '20',
  })
  numero_pg: number;

  @ApiProperty({
    description: 'Idioma do artigo.',
    example: 'Português',
  })
  idioma: string;

  @ApiProperty({
    description: 'Status do artigo.',
    example: StatusArtigo.EM_ANALISE,
  })
  status: StatusArtigo;

  @ApiProperty({
    description: 'Comentário do avaliador.',
    example: 'Argumentos bem construidos, sintaxe correta, tema relevante.',
  })
  comentario_avaliacao: string;
}
