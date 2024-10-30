import { Module } from '@nestjs/common';

import { InstituicaoModule } from './artigo/artigo.module';

@Module({
  imports: [InstituicaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

