import { Module } from '@nestjs/common';
import { ArtigoService } from './artigo.service';
import { ArtigoController } from './artigo.controller';
import { artigoProviders } from './artigo.provider';
import { DatabaseModule } from 'src/common/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ArtigoController],
  providers: [ArtigoService, ...artigoProviders],
})
export class ArtigoModule {}
