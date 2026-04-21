import { isNonEmptyString, isString, isUnsignedInteger } from 'jet-validators';
import { parseObject, Schema, testObject } from 'jet-validators/utils';

import { transformIsDate } from '@src/common/utils/validators';

import { Entity } from './common/types';

/******************************************************************************
                                 Constants
******************************************************************************/

const GetDefaults = (): IAlbum => ({
  id: 0,
  title: '',
  year: 0,
  coverUrl: '',
  tracks: [],
  created: new Date(),
});

const isTrack = (value: any): value is ITrack => {
  return (
    value &&
    typeof value.id === 'string' &&
    typeof value.title === 'string' &&
    typeof value.duration === 'string' &&
    typeof value.audioUrl === 'string' &&
    typeof value.albumTitle === 'string' &&
    typeof value.albumCoverUrl === 'string'
  );
};

const schema: Schema<IAlbum> = {
  id: isUnsignedInteger,
  title: isString,
  year: (value: any): value is number => typeof value === 'number',
  coverUrl: isString,
  tracks: (value: any): value is ITrack[] =>
    Array.isArray(value) && value.every(isTrack),
  created: transformIsDate,
};

/******************************************************************************
                                  Types
******************************************************************************/

/**
 * @entity album
 */
export interface ITrack {
  id: string;
  title: string;
  duration: string;
  audioUrl: string;
  albumTitle: string;
  albumCoverUrl: string;
}

export interface IAlbum extends Entity {
  title: string;
  year: number;
  coverUrl: string;
  tracks: ITrack[];
}

/******************************************************************************
                                  Setup
******************************************************************************/

const isCompleteAlbum = testObject<IAlbum>({
  ...schema,
  title: isNonEmptyString,
  coverUrl: isNonEmptyString,
});

/******************************************************************************
                                 Functions
******************************************************************************/

function new_(album?: Partial<IAlbum>): IAlbum {
  return parseObject<IAlbum>(schema)(
    { ...GetDefaults(), ...album },
    (errors) => {
      throw new Error(
        'Setup new album failed ' + JSON.stringify(errors, null, 2)
      );
    }
  );
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  new: new_,
  isComplete: isCompleteAlbum,
} as const;