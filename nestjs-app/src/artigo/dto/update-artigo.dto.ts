import { PartialType } from '@nestjs/mapped-types';
import { CreateInstituicaoDto } from './create-artigo.dto';

export class UpdateInstituicaoDto extends PartialType(CreateInstituicaoDto) {}
