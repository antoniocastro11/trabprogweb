import { Artigo } from './entities/artigo.entity';

export const artigoProviders = [
  {
    provide: 'ARTIGO_REPOSITORY',
    useValue: Artigo,
  },
];
