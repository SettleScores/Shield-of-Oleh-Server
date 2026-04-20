import { IAbout } from '@src/models/About.model';
import AboutRepo from '@src/repos/AboutRepo';

/******************************************************************************
                                Functions
******************************************************************************/

function getAll(): Promise<IAbout> {
  return AboutRepo.getAll();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
} as const;