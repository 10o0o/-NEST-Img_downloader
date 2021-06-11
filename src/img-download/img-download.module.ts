import { Module } from '@nestjs/common';
import { ImgDownloadService } from './img-download.service';
import { ImgDownloadController } from './img-download.controller';

@Module({
  controllers: [ImgDownloadController],
  providers: [ImgDownloadService]
})
export class ImgDownloadModule {}
