import path from 'path';

import CloudflareRepo from '@src/repos/CloudflareRepo';

const IMAGE_MAX_SIZE =
  10 * 1024 * 1024;

const AUDIO_MAX_SIZE =
  100 * 1024 * 1024;

const IMAGE_EXTENSIONS = [
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif',
];

const AUDIO_EXTENSIONS = [
  '.mp3',
  '.wav',
  '.flac',
  '.ogg',
  '.m4a',
];

/******************************************************************************
                                Functions
******************************************************************************/

function uploadImage(
  fileBuffer: Buffer,
  fileName: string,
) {

  if (fileBuffer.length > IMAGE_MAX_SIZE) {
    throw new Error(
      'Image exceeds maximum size',
    );
  }

  console.log('UploadService uploadImage');

  return CloudflareRepo.uploadFile(
    fileBuffer,
    fileName,
    'gallery',
  );
}

function uploadAudio(
  fileBuffer: Buffer,
  fileName: string,
) {

  if (fileBuffer.length > AUDIO_MAX_SIZE) {
    throw new Error(
      'Audio exceeds maximum size',
    );
  }

  console.log('UploadService uploadAudio');

  return CloudflareRepo.uploadFile(
    fileBuffer,
    fileName,
    'audio',
  );
}

function upload(
  fileBuffer: Buffer,
  fileName: string,
) {

  const extension =
    path.extname(fileName).toLowerCase();

  if (
    IMAGE_EXTENSIONS.includes(
      extension,
    )
  ) {
    return uploadImage(
      fileBuffer,
      fileName,
    );
  }

  if (
    AUDIO_EXTENSIONS.includes(
      extension,
    )
  ) {
    return uploadAudio(
      fileBuffer,
      fileName,
    );
  }

  throw new Error(
    `Unsupported file type: ${extension}`,
  );
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  upload,
  uploadImage,
  uploadAudio,
} as const;