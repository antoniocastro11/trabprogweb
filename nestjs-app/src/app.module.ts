import { Module } from '@nestjs/common';

import { InstituicaoModule } from './instituicao/artigo.module';

@Module({
  imports: [InstituicaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

