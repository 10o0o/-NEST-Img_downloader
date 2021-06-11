import { Controller, Get, Post, Request, Res, Response } from '@nestjs/common';
import { ImgDownloadService } from './img-download.service';
import * as moment from 'moment';

@Controller('img-download')
export class ImgDownloadController {
  constructor(private readonly imgDownloadService: ImgDownloadService) {}

  @Get('/getBarcode')
  getBarcode(@Request() req, @Res() res) {
    // const barcodeNum = req.body.barcodeNum;
    // const itemName = req.body.itemName;
    const barcodeNums = ['8809801020185', '8809801020178'];
    this.imgDownloadService.downloadFile(barcodeNums, res);
  }

  @Get('/test')
  test(@Res() res) {
    // const stream = `%!PS-Adobe-3.0 EPSF-3.0
    // %%Creator: Zint 2.9.1.9
    // %%Title: Zint Generated Symbol
    // %%Pages: 0
    // %%BoundingBox: 0 0 226 117
    // %%EndComments
    // /TL { setlinewidth moveto lineto stroke } bind def
    // /TD { newpath 0 360 arc fill } bind def
    // /TH { 0 setlinewidth moveto lineto lineto lineto lineto lineto closepath fill } bind def
    // /TB { 2 copy } bind def
    // /TR { newpath 4 1 roll exch moveto 1 index 0 rlineto 0 exch rlineto neg 0 rlineto closepath fill } bind def
    // /TE { pop pop } bind def
    // newpath
    // 1.00 1.00 1.00 setrgbcolor
    // 116.40 0.00 TB 0.00 226.00 TR
    // TE
    // 0.00 0.00 0.00 setrgbcolor
    // 110.00 6.40 TB 22.00 2.00 TR
    // TE
    // 110.00 6.40 TB 26.00 2.00 TR
    // TE
    // 100.00 16.40 TB 30.00 4.00 TR
    // TE
    // 100.00 16.40 TB 36.00 6.00 TR
    // TE
    // 100.00 16.40 TB 44.00 2.00 TR
    // TE
    // 100.00 16.40 TB 50.00 6.00 TR
    // TE
    // 100.00 16.40 TB 62.00 2.00 TR
    // TE
    // 100.00 16.40 TB 66.00 4.00 TR
    // TE
    // 100.00 16.40 TB 76.00 2.00 TR
    // TE
    // 100.00 16.40 TB 82.00 2.00 TR
    // TE
    // 100.00 16.40 TB 86.00 2.00 TR
    // TE
    // 100.00 16.40 TB 92.00 6.00 TR
    // TE
    // 100.00 16.40 TB 102.00 4.00 TR
    // TE
    // 100.00 16.40 TB 110.00 2.00 TR
    // TE
    // 110.00 6.40 TB 114.00 2.00 TR
    // TE
    // 110.00 6.40 TB 118.00 2.00 TR
    // TE
    // 100.00 16.40 TB 122.00 6.00 TR
    // TE
    // 100.00 16.40 TB 132.00 2.00 TR
    // TE
    // 100.00 16.40 TB 136.00 4.00 TR
    // TE
    // 100.00 16.40 TB 142.00 4.00 TR
    // TE
    // 100.00 16.40 TB 150.00 6.00 TR
    // TE
    // 100.00 16.40 TB 160.00 2.00 TR
    // TE
    // 100.00 16.40 TB 164.00 4.00 TR
    // TE
    // 100.00 16.40 TB 172.00 4.00 TR
    // TE
    // 100.00 16.40 TB 178.00 2.00 TR
    // TE
    // 100.00 16.40 TB 184.00 2.00 TR
    // TE
    // 100.00 16.40 TB 192.00 2.00 TR
    // TE
    // 100.00 16.40 TB 198.00 6.00 TR
    // TE
    // 110.00 6.40 TB 206.00 2.00 TR
    // TE
    // 110.00 6.40 TB 210.00 2.00 TR
    // TE
    // matrix currentmatrix
    // /Helvetica findfont
    // 20.00 scalefont setfont
    // 0 0 moveto 12.00 0.40 translate 0.00 rotate 0 0 moveto
    // (8) stringwidth
    // pop
    // neg 0 rmoveto
    // (8) show
    // setmatrix
    // matrix currentmatrix
    // /Helvetica findfont
    // 20.00 scalefont setfont
    // 0 0 moveto 70.00 0.40 translate 0.00 rotate 0 0 moveto
    // (809801) stringwidth
    // pop
    // -2 div 0 rmoveto
    // (809801) show
    // setmatrix
    // matrix currentmatrix
    // /Helvetica findfont
    // 20.00 scalefont setfont
    // 0 0 moveto 164.00 0.40 translate 0.00 rotate 0 0 moveto
    // (020185) stringwidth
    // pop
    // -2 div 0 rmoveto
    // (020185) show
    // setmatrix`;
    // this.imgDownloadService.test(stream, res);
  }
}
