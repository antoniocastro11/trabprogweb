import { Artigo } from '../../modules/artigo/entities/artigo.entity';

export const artigoProviders = [
  {
    provide: 'ARTIGO_REPOSITORY',
    useValue: Artigo,
  },
];
