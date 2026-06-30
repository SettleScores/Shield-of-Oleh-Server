import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import crypto from 'crypto';
import path from 'path';

import { IUploadResult } from '@src/models/UploadResult.model';

const s3Client = new S3Client({
  region: process.env.R2_REGION,
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

async function uploadFile(
  fileBuffer: Buffer,
  fileName: string,
  folder: string,
): Promise<IUploadResult> {

  const extension =
    path.extname(fileName);

  const objectKey =
    `${folder}/${crypto.randomUUID()}${extension}`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: objectKey,
      Body: fileBuffer,
    }),
  );

  return {
    url: `${process.env.R2_PUBLIC_BASE_URL}/${objectKey}`,
    objectKey,
  };
}

async function deleteeImage( /// TODO When will extend, rename to deleteeFile
  objectKey: string,
): Promise<void> {

  await s3Client.send(
    new DeleteObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: objectKey,
    }),
  );
}

export default {
  uploadFile,
  deleteeImage,
} as const;