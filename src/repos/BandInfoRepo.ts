import { IBandInfo } from '@src/models/BandInfo.model';

import { BandInfoMongoModel } from '@src/database/models/BandInfo.mongo';

import { mapBandInfo } from '@src/database/mappers/BandInfo.mapper';

export async function getAll(): Promise<IBandInfo> {
  const bandInfoDocument = await BandInfoMongoModel.findOne().lean(); /// findOne because of a priori single document

  if (!bandInfoDocument) {
    throw new Error('BandInfo document not found');
  }

  return mapBandInfo(bandInfoDocument);
}

export default {
  getAll,
} as const;