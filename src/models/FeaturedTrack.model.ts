import { isNonEmptyString, isString, isUnsignedInteger } from 'jet-validators';
import { parseObject, Schema, testObject } from 'jet-validators/utils';

import { transformIsDate } from '@src/common/utils/validators';

import { Entity } from './common/types';

/******************************************************************************
                                 Constants
******************************************************************************/

const GetDefaults = (): IFeaturedTrack => ({
  id: 0,
  title: '',
  duration: '',
  audioUrl: '',
  albumTitle: '',
  albumCoverUrl: '',
  created: new Date(),
});

const schema: Schema<IFeaturedTrack> = {
  id: isUnsignedInteger,
  title: isString,
  duration: isString,
  audioUrl: isString,
  albumTitle: isString,
  albumCoverUrl: isString,
  created: transformIsDate,
};

/******************************************************************************
                                  Types
******************************************************************************/

/**
 * @entity featured tracks
 */
export interface IFeaturedTrack extends Entity {
  title: string;
  duration: string;
  audioUrl: string;
  albumTitle: string;
  albumCoverUrl: string;
}

/******************************************************************************
                                  Setup
******************************************************************************/

const isCompleteFeaturedTrack = testObject<IFeaturedTrack>({
  ...schema,
  title: isNonEmptyString,
  duration: isNonEmptyString,
  audioUrl: isNonEmptyString,
  albumTitle: isNonEmptyString,
  albumCoverUrl: isNonEmptyString,
});

/******************************************************************************
                                 Functions
******************************************************************************/

function new_(featuredTrack?: Partial<IFeaturedTrack>): IFeaturedTrack {
  return parseObject<IFeaturedTrack>(schema)(
    { ...GetDefaults(), ...featuredTrack },
    (errors) => {
      throw new Error('Setup new featured track failed ' + JSON.stringify(errors, null, 2));
    }
  );
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  new: new_,
  isComplete: isCompleteFeaturedTrack,
} as const;