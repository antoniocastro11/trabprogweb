import { Inject, Injectable } from '@nestjs/common';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-artigo.dto';
import { Instituicao } from './entities/artigo.entity';

@Injectable()
export class InstituicaoService {
  constructor(
    @Inject('INSTITUICAO_REPOSITORY')
    private instituicaoRepository: typeof Instituicao,
  ) {}

  create(createInstituicaoDto: CreateInstituicaoDto) {
    return this.instituicaoRepository.create(createInstituicaoDto);
  }

  findAll() {
    return this.instituicaoRepository.findAll<Instituicao>();
  }

  findOne(id: number) {
    return this.instituicaoRepository.findByPk(id);
  }

  update(id: number, updateInstituicaoDto: UpdateInstituicaoDto) {
    return this.instituicaoRepository.update(
      {
        ...updateInstituicaoDto,
      },
      { where: { id } },
    );
  }

  activate(id: number) {
    return this.instituicaoRepository.update(
      {
        status: true,
      },
      {
        where: { id },
      },
    );
  }
  deactivate(id: number) {
    return this.instituicaoRepository.update(
      {
        status: false,
      },
      {
        where: { id },
      },
    );
  }
}
