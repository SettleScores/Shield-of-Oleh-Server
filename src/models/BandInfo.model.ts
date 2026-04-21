import { isNonEmptyString, isString, isUnsignedInteger } from 'jet-validators';
import { parseObject, Schema, testObject } from 'jet-validators/utils';
import { transformIsDate } from '@src/common/utils/validators';

import { Entity } from './common/types';

/******************************************************************************
                                 Constants
******************************************************************************/

const GetDefaults = (): IBandInfo => ({
  id: 0,
  name: '',
  copyright: '',
  socialLinks: [],
  created: new Date(),
});

const socialLinkSchema: Schema<ISocialLink> = {
  platform: isNonEmptyString,
  url: isNonEmptyString,
};

const schema: Schema<IBandInfo> = {
  id: isUnsignedInteger,
  name: isString,
  copyright: isString,
  socialLinks: [],
  created: transformIsDate,
};

/******************************************************************************
                                  Types
******************************************************************************/

/**
 * @entity shield_olega
 */
export interface ISocialLink {
  platform: string;
  url: string;
}

/**
 * @entity shield_olega
 */
export interface IBandInfo extends Entity {
  name: string;
  copyright: string;
  socialLinks: ISocialLink[];
}

/******************************************************************************
                                  Setup
******************************************************************************/

const parseSocialLink = parseObject<ISocialLink>(socialLinkSchema);

const parseShieldOlega = parseObject<IBandInfo>(schema);

const isCompleteBandInfo = testObject<IBandInfo>({
  ...schema,
  name: isNonEmptyString,
  copyright: isNonEmptyString,
});

/******************************************************************************
                                 Functions
******************************************************************************/

/**
 * New Shield Olega object.
 */
function new_(data?: Partial<IBandInfo>): IBandInfo {
  const raw = { ...GetDefaults(), ...data };

  return parseShieldOlega(raw, (errors) => {
    throw new Error('Setup new Shield Olega failed ' + JSON.stringify(errors, null, 2));
  });
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  new: new_,
  isComplete: isCompleteShieldOlega,
} as const;