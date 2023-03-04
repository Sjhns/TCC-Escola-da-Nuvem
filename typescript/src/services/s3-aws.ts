import { S3Client } from "@aws-sdk/client-s3"
import multer from "multer"
import multerS3 from "multer-s3"
import { v4 as uuidv4 } from "uuid"

import * as dotenv from 'dotenv'
dotenv.config()

const S3 = new S3Client({
  region: process.env.AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const S3Upload = multer({
  storage: multerS3({
    s3: S3,
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    // acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const filename = `${uuidv4()}_${file.originalname}`;
      cb(null, filename);
    },
  }),
});

