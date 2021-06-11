import { Injectable, Req, Res } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';
import * as multer from 'multer';

const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

@Injectable()
export class s3ImageService {
  async uploadImage(@Req() req, @Res() res) {
    try {
      this.upload(req, res, function (err) {
        if (err) {
          console.log(err);
          return res.status(404).json(`Faild to upload image file: ${err}`);
        }
        console.log(req.files);
        return res.status(201).json(req.files[0].location);
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(`Failed to upload image file: ${err}`);
    }
  }

  upload = multer({
    // storage: multerS3({
    //   s3: s3,
    //   bucket: AWS_S3_BUCKET_NAME,
    //   acl: 'public-read',
    //   key: function (request, file, cb) {
    //     cb(null, `${file.originalname}`);
    //   },
    // }),
    storage: multer.memoryStorage(),
  }).array('upload');

  async downloadImage(@Req() req, @Res() res) {
    try {
      this.download(req, res, function (err) {
        console.log(req.files);
        if (err) {
          console.log(err);
          return res.status(404).json(`Faild to upload image file: ${err}`);
        }
        // console.log(req);
        return res.status(201).json(req.files[0].location);
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(`Failed to upload image file: ${err}`);
    }
  }

  download = multer({
    storage: multerS3({
      s3: s3,
      bucket: AWS_S3_BUCKET_NAME,
      acl: 'public-read',
      key: function (request, file, cb) {
        cb(null, `${file.originalname}`);
      },
    }),
  }).array('eps');
}
