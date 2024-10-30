import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { InstituicaoService } from './artigo.service';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-artigo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Instituicao')
@Controller('instituicao')
export class InstituicaoController {
  constructor(private readonly instituicaoService: InstituicaoService) {}

  @Post()
  create(@Body() createInstituicaoDto: CreateInstituicaoDto) {
    return this.instituicaoService.create(createInstituicaoDto);
  }

  @Get()
  findAll() {
    return this.instituicaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instituicaoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstituicaoDto: UpdateInstituicaoDto,
  ) {
    return this.instituicaoService.update(+id, updateInstituicaoDto);
  }

  @Patch('activate/:id')
  activate(@Param('id') id: string) {
    return this.instituicaoService.activate(+id);
  }

  @Patch('deactivate/:id')
  deactivate(@Param('id') id: string) {
    return this.instituicaoService.deactivate(+id);
  }
}
