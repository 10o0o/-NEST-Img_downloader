import { Module } from '@nestjs/common';
import { ImageController } from './s3image.controller';
import { s3ImageService } from './s3image.service';

@Module({
  controllers: [ImageController],
  providers: [s3ImageService],
})
export class S3imageModule {}
