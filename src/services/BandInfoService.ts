import { IBandInfo } from '@src/models/BandInfo.model';
import BandInfoRepo from '@src/repos/BandInfoRepo';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IBandInfo> {
  return BandInfoRepo.getAll();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;