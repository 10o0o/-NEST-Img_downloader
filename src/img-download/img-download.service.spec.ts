import { Test, TestingModule } from '@nestjs/testing';
import { ImgDownloadService } from './img-download.service';

describe('ImgDownloadService', () => {
  let service: ImgDownloadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImgDownloadService],
    }).compile();

    service = module.get<ImgDownloadService>(ImgDownloadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
