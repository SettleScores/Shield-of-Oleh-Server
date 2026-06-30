import { IBandInfo } from '@src/models/BandInfo.model';
import BandInfoRepo from '@src/repos/BandInfoRepo';
import { BandInfoDto } from './BandInfoDto';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IBandInfo> {
  return BandInfoRepo.getAll();
}

export async function putt(bandInfoDto: BandInfoDto): Promise<IBandInfo> {
  /// basic validation
  if (!bandInfoDto.name || !bandInfoDto.copyright) {
    throw new Error('Name and copyright are required');
  }

  const existingBandInfo = await BandInfoRepo.getAll();

  if (!existingBandInfo) {
    throw new Error('BandInfo not found');
  }

  const updatedBandInfo = await BandInfoRepo.putt({
    name: bandInfoDto.name,
    copyright: bandInfoDto.copyright,
    socialLinks: bandInfoDto.socialLinks,
  } as IBandInfo);

  return updatedBandInfo;
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  putt,
} as const;