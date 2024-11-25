import { Module } from '@nestjs/common';

import { ArtigoModule } from './features/artigo/artigo.module';

@Module({
  imports: [ArtigoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
