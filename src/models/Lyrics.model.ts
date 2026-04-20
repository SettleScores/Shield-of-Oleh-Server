import { isNonEmptyString, isString, isUnsignedInteger } from 'jet-validators';
import { parseObject, Schema, testObject } from 'jet-validators/utils';

import { transformIsDate } from '@src/common/utils/validators';

import { Entity } from './common/types';

/******************************************************************************
                                 Constants
******************************************************************************/

const GetDefaults = (): ILyrics => ({
  id: 0,
  slug: '',
  title: '',
  albumTitle: '',
  text: '',
  created: new Date(),
});

const schema: Schema<ILyrics> = {
  id: isUnsignedInteger,
  slug: isString,
  title: isString,
  albumTitle: isString,
  text: isString,
  created: transformIsDate,
};

/******************************************************************************
                                  Types
******************************************************************************/

/**
 * @entity lyrics
 */
export interface ILyrics extends Entity {
  slug: string;
  title: string;
  albumTitle: string;
  text: string;
}

/******************************************************************************
                                  Setup
******************************************************************************/

const isCompleteLyrics = testObject<ILyrics>({
  ...schema,
  slug: isNonEmptyString,
  title: isNonEmptyString,
  albumTitle: isNonEmptyString,
  text: isNonEmptyString,
});

/******************************************************************************
                                 Functions
******************************************************************************/

function new_(lyrics?: Partial<ILyrics>): ILyrics {
  return parseObject<ILyrics>(schema)(
    { ...GetDefaults(), ...lyrics },
    (errors) => {
      throw new Error(
        'Setup new lyrics failed ' + JSON.stringify(errors, null, 2)
      );
    }
  );
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  new: new_,
  isComplete: isCompleteLyrics,
} as const;