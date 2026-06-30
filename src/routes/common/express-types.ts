import { Request, Response } from 'express';

/******************************************************************************
                                Types
******************************************************************************/

export type Req<
  TBody = any,
  TParams = Record<string, string>,
> = Request<
  TParams,
  any,
  TBody
> & {
  file?: Express.Multer.File;
  files?: Express.Multer.File[];
};

export type Res = Response;