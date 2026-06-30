import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';

import UploadService from '@src/services/UploadService';

import { Req, Res } from './common/express-types';

async function upload(req: Req, res: Res) {

  if (!req.file) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({
        message: 'File is required',
      });
  }

  const result =
    await UploadService.upload(
      req.file.buffer,
      req.file.originalname,
    );

  return res
    .status(HttpStatusCodes.CREATED)
    .json(result);
}

export default {
  upload,
} as const;