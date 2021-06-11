import { Controller, Post, Req, Res } from '@nestjs/common';
import 'dotenv/config';
import { response } from 'express';
import { s3ImageService } from './s3image.service';
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: s3ImageService) {}

  @Post('/upload')
  async uploadImage(@Req() req, @Res() res) {
    try {
      await this.imageService.uploadImage(req, res);
    } catch (err) {
      return response
        .status(500)
        .json(`Failed to upload image file: ${err.message}`);
    }
  }

  @Post('/download')
  async downloadImage(@Req() req, @Res() res) {
    try {
      await this.imageService.downloadImage(req, res);
    } catch (err) {
      return response
        .status(500)
        .json(`Failed to upload image file: #{err.message}`);
    }
  }
}
