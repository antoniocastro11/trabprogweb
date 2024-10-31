import { Inject, Injectable } from '@nestjs/common';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { UpdateArtigoDto } from './dto/update-artigo.dto';
import { Artigo } from './entities/artigo.entity';

@Injectable()
export class ArtigoService {
  constructor(
    @Inject('ARTIGO_REPOSITORY')
    private artigoRepository: typeof Artigo,
  ) {}

  create(CreateArtigoDto: CreateArtigoDto) {
    return this.artigoRepository.create(CreateArtigoDto);
  }

  findAll() {
    return this.artigoRepository.findAll<Artigo>();
  }

  findOne(id: number) {
    return this.artigoRepository.findByPk(id);
  }

  update(id: number, UpdateArtigoDto: UpdateArtigoDto) {
    return this.artigoRepository.update(
      {
        ...UpdateArtigoDto,
      },
      { where: { id } },
    );
  }

  activate(id: number) {
    return this.artigoRepository.update(
      {
        status: true,
      },
      {
        where: { id },
      },
    );
  }
  deactivate(id: number) {
    return this.artigoRepository.update(
      {
        status: false,
      },
      {
        where: { id },
      },
    );
  }
}
