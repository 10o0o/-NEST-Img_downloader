import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import * as fs from 'fs';
import { SymbologyType, createFile, createStream, OutputType } from 'symbology';
import * as path from 'path';
import * as archiver from 'archiver';
import * as moment from 'moment';

@Injectable()
export class ImgDownloadService {
  async downloadFile(barcodeNums: string[], res) {
    for (const barcodeNum of barcodeNums) {
      await (async () => {
        const result = await createStream(
          {
            symbology: SymbologyType.EANX_CHK,
            fileName: `./src/img-download/temporarySavedImg/${barcodeNum}.eps`,
          },
          barcodeNum,
          OutputType.EPS,
        );
      })();
    }

    // const newBarcodeNums = barcodeNums.map((barcodeNum) => {
    //   return `./src/img-download/temporarySavedImg/${barcodeNum}.eps`;
    // });

    // console.log(newBarcodeNums);

    this.serveZipToUser(barcodeNums, res);
  }

  private compressBarcodeImg(itemNames: string[]) {
    const zipFilePath = `./src/img-download/zips/${moment().format(
      'MMMM Do YYYY h:mm:ss',
    )}.zip`;

    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver('zip', {
      gzip: true,
      zlib: { level: 2 }, // Sets the compression level.
    });

    archive.on('error', function (err) {
      throw err;
    });

    archive.pipe(output);

    for (const itemName of itemNames) {
      archive.file(`./src/img-download/temporarySavedImg/${itemName}.eps`, {
        name: `${itemName}.eps`,
      });
    }

    archive.finalize();

    // zipFolder(`./src/img-download/temporarySavedImg`, path, function (err) {
    //   if (err) console.log('zipFolder Error');
    // });

    return zipFilePath;
  }

  serveZipToUser(itemNames: string[], res) {
    // console.log('check');
    const zipFilePath = this.compressBarcodeImg(itemNames);

    // console.log(itemNames);
    // const file = `./src/img-download/temporarySavedImg/${itemName}.eps`;

    try {
      if (fs.existsSync(zipFilePath)) {
        const fileName = path.basename(zipFilePath);
        // console.log(fileName);
        const mimeType = fileName.split('.')[1];
        // console.log(mimeType);
        console.log(`fileName: ${fileName}, mimetype: ${mimeType}`);

        res.set('Content-disposition', 'attachment; filename=' + fileName);
        res.set('Content-type', 'application/zip');

        const fileStream = fs.createReadStream(zipFilePath);
        fileStream.pipe(res);
      }
    } catch (e) {
      console.log(e);
      throw new ServiceUnavailableException(
        '파일을 다운로드 하는 중 에러가 발생',
      );
    } finally {
      // this.deleteFile(file);
    }

    // this.deleteFile(zipFilePath);
  }

  private deleteFile(file) {
    fs.unlink(file, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  async test(stream, res) {
    // try {
    //   if (fs.existsSync(stream)) {
    //     const mimeType = 'eps'

    //     res.set('Content-disposition', 'attachment; filename=' + 'test');
    //     res.set('Content-type', mimeType)
    //     const fileStream = fs.ReadStream(stream);
    //     fileStream.pipe(res);
    //   }
    // } catch (e) {
    //   console.log(e);
    //   throw new ServiceUnavailableException(
    //     '파일을 다운로드 하는 중 에러가 발생',
    //   );
    // } finally {
    //   // this.deleteFile(file);
    // }
  }
}
