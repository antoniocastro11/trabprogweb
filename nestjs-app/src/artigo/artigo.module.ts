import { Module } from '@nestjs/common';
import { InstituicaoService } from './artigo.service';
import { InstituicaoController } from './artigo.controller';
import { instituicaoProviders } from './artigo.provider';
import { DatabaseModule } from 'src/databse/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InstituicaoController],
  providers: [InstituicaoService, ...instituicaoProviders],
})
export class InstituicaoModule {}
