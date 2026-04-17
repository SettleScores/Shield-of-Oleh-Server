import { isNonEmptyString, isString, isUnsignedInteger } from 'jet-validators';
import { parseObject, Schema, testObject } from 'jet-validators/utils';

import { transformIsDate } from '@src/common/utils/validators';

import { Entity } from './common/types';

/******************************************************************************
                                 Constants
******************************************************************************/

const GetDefaults = (): IPost => ({
  id: 0,
  slug: '',
  title: '',
  excerpt: '',
  content: '',
  date: new Date(),
  imageUrl: '',
  created: new Date(),
});

const schema: Schema<IPost> = {
  id: isUnsignedInteger,
  slug: isString,
  title: isString,
  excerpt: isString,
  content: isString,
  date: transformIsDate,
  imageUrl: isString,
  created: transformIsDate,
};

/******************************************************************************
                                  Types
******************************************************************************/

/**
 * @entity posts
 */
export interface IPost extends Entity {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: Date;
  imageUrl: string;
}

/******************************************************************************
                                  Setup
******************************************************************************/

const isCompletePost = testObject<IPost>({
  ...schema,
  slug: isNonEmptyString,
  title: isNonEmptyString,
  excerpt: isNonEmptyString,
  content: isNonEmptyString,
  imageUrl: isNonEmptyString,
});

/******************************************************************************
                                 Functions
******************************************************************************/

function new_(post?: Partial<IPost>): IPost {
  return parseObject<IPost>(schema)(
    { ...GetDefaults(), ...post },
    (errors) => {
      throw new Error('Setup new post failed ' + JSON.stringify(errors, null, 2));
    }
  );
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  new: new_,
  isComplete: isCompletePost,
} as const;