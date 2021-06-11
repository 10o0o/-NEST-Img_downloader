import { Test, TestingModule } from '@nestjs/testing';
import { ImgDownloadController } from './img-download.controller';
import { ImgDownloadService } from './img-download.service';

describe('ImgDownloadController', () => {
  let controller: ImgDownloadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImgDownloadController],
      providers: [ImgDownloadService],
    }).compile();

    controller = module.get<ImgDownloadController>(ImgDownloadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
