import { IGalleryImage } from '@src/models/GalleryImage.model';
import GalleryImageRepo from '@src/repos/GalleryImageRepo';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IGalleryImage[]> {
  return GalleryImageRepo.getAll();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;