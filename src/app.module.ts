import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImgDownloadModule } from './img-download/img-download.module';
import { S3imageModule } from './s3image/s3image.module';
import { ImageController } from './s3image/s3image.controller';
import { s3ImageService } from './s3image/s3image.service';

@Module({
  imports: [ImgDownloadModule, S3imageModule],
  controllers: [AppController, ImageController],
  providers: [AppService, s3ImageService],
})
export class AppModule {}
