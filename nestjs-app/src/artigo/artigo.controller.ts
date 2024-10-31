import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ArtigoService } from './artigo.service';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { UpdateArtigoDto } from './dto/update-artigo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Artigo')
@Controller('artigo')
export class ArtigoController {
  constructor(private readonly artigoservice: ArtigoService) {}

  @Post()
  create(@Body() CreateArtigoDto: CreateArtigoDto) {
    return this.artigoservice.create(CreateArtigoDto);
  }

  @Get()
  findAll() {
    return this.artigoservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artigoservice.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateArtigoDto: UpdateArtigoDto,
  ) {
    return this.artigoservice.update(+id, UpdateArtigoDto);
  }

  @Patch('activate/:id')
  activate(@Param('id') id: string) {
    return this.artigoservice.activate(+id);
  }

  @Patch('deactivate/:id')
  deactivate(@Param('id') id: string) {
    return this.artigoservice.deactivate(+id);
  }
}
