import { Instituicao } from './entities/artigo.entity';

export const instituicaoProviders = [
  {
    provide: 'INSTITUICAO_REPOSITORY',
    useValue: Instituicao,
  },
];
