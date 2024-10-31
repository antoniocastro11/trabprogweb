import { ApiProperty } from '@nestjs/swagger';
import { ArtigoInterface } from '../interfaces/artigo.interface';

export class CreateArtigoDto implements Omit<ArtigoInterface, 'id'> {
  @ApiProperty({
    description: 'nome da artigo.',
    example: 'Universidade Federal de Mato Grosso do sul',
  })
  nome: string;

  @ApiProperty({
    description: 'sigla da artigo.',
    example: 'UFMS',
  })
  sigla: string;

  @ApiProperty({
    description: 'pais da artigo.',
    example: 'Brazil',
  })
  pais: string;

  @ApiProperty({
    description: 'cnpj da artigo.',
    example: '37.188.484/0001-54',
  })
  cnpj: string;

  @ApiProperty({
    description: 'cep da artigo.',
    example: '79006840',
  })
  cep: string;

  @ApiProperty({
    description: 'logradouro da artigo.',
    example: 'Rua 1',
  })
  logradouro: string;

  @ApiProperty({
    description: 'bairro da artigo.',
    example: 'Bandeirantes',
  })
  bairro: string;

  @ApiProperty({
    description: 'numero da artigo.',
    example: '1',
  })
  numero: number;

  @ApiProperty({
    description: 'localidade da artigo.',
    example: 'Campo Grande',
  })
  localidade: string;

  @ApiProperty({
    description: 'complemento da artigo.',
    example: 'em frente ao atacadao',
  })
  complemento: string;

  @ApiProperty({
    description: 'status da artigo.',
    example: true,
  })
  status: boolean;

  @ApiProperty({
    description: 'Estado da artigo.',
    example: 'MS',
  })
  uf: string;
}
