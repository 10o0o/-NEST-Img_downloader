import { PartialType } from '@nestjs/mapped-types';
import { CreateImgDownloadDto } from './create-img-download.dto';

export class UpdateImgDownloadDto extends PartialType(CreateImgDownloadDto) {}
