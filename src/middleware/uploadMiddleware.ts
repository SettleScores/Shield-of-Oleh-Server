import multer from 'multer';

export const uploadMiddleware = multer({
  storage: multer.memoryStorage(),

  limits: {
    // Must cover the largest allowed file type (audio, 100MB).
    // Per-type limits are enforced in UploadService.
    fileSize: 100 * 1024 * 1024,
  },
});