import { ApiProperty } from '@nestjs/swagger';
import { InstituicaoInterface } from '../interfaces/instituicao.interface';

export class CreateInstituicaoDto implements Omit<InstituicaoInterface, 'id'> {
  @ApiProperty({
    description: 'nome da instituição.',
    example: 'Universidade Federal de Mato Grosso do sul',
  })
  nome: string;

  @ApiProperty({
    description: 'sigla da instituição.',
    example: 'UFMS',
  })
  sigla: string;

  @ApiProperty({
    description: 'pais da instituição.',
    example: 'Brazil',
  })
  pais: string;

  @ApiProperty({
    description: 'cnpj da instituição.',
    example: '37.188.484/0001-54',
  })
  cnpj: string;

  @ApiProperty({
    description: 'cep da instituição.',
    example: '79006840',
  })
  cep: string;

  @ApiProperty({
    description: 'logradouro da instituição.',
    example: 'Rua 1',
  })
  logradouro: string;

  @ApiProperty({
    description: 'bairro da instituição.',
    example: 'Bandeirantes',
  })
  bairro: string;

  @ApiProperty({
    description: 'numero da instituição.',
    example: '1',
  })
  numero: number;

  @ApiProperty({
    description: 'localidade da instituição.',
    example: 'Campo Grande',
  })
  localidade: string;

  @ApiProperty({
    description: 'complemento da instituição.',
    example: 'em frente ao atacadao',
  })
  complemento: string;

  @ApiProperty({
    description: 'status da instituição.',
    example: true,
  })
  status: boolean;

  @ApiProperty({
    description: 'Estado da instituição.',
    example: 'MS',
  })
  uf: string;
}
