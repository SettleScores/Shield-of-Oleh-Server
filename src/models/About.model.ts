import { isNonEmptyString, isString, isUnsignedInteger } from 'jet-validators';
import { parseObject, Schema, testObject } from 'jet-validators/utils';
import { transformIsDate } from '@src/common/utils/validators';

import { Entity } from './common/types';

/******************************************************************************
                                 Constants
******************************************************************************/
const GetDefaults = (): IAbout => ({
  id: 0,
  biography: '',
  members: [],
  formedYear: 0,
  origin: '',
  genre: '',
  created: new Date(),
});

const isMember: (value: any) => value is IMember = (value: any): value is IMember => {
  return value && typeof value.name === 'string' && typeof value.role === 'string' && typeof value.imageUrl === 'string';
};

const schema: Schema<IAbout> = {
  id: isUnsignedInteger,
  biography: isString,
  members: (value: any): value is IMember[] => Array.isArray(value) && value.every(isMember),
  formedYear: isUnsignedInteger,
  origin: isString,
  genre: isString,
  created: transformIsDate,
};

/******************************************************************************
                                  Types
******************************************************************************/

/**
 * @entity band
 */
export interface IMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface IAbout extends Entity {
  biography: string;
  members: IMember[];
  formedYear: number;
  origin: string;
  genre: string;
}

/******************************************************************************
                                  Setup
******************************************************************************/

const isCompleteBand = testObject<IAbout>({
  ...schema,
  biography: isNonEmptyString,
  origin: isNonEmptyString,
  genre: isNonEmptyString,
});

/******************************************************************************
                                 Functions
******************************************************************************/

function new_(band?: Partial<IAbout>): IAbout {
  return parseObject<IAbout>(schema)(
    { ...GetDefaults(), ...band },
    (errors) => {
      throw new Error('Setup new about failed ' + JSON.stringify(errors, null, 2));
    }
  );
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  new: new_,
  isComplete: isCompleteBand,
} as const;