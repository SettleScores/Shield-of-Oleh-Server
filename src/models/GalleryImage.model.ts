import { isNonEmptyString, isString, isUnsignedInteger } from 'jet-validators';
import { parseObject, Schema, testObject } from 'jet-validators/utils';

import { transformIsDate } from '@src/common/utils/validators';

import { Entity } from './common/types';

/******************************************************************************
                                 Constants
******************************************************************************/

const GetDefaults = (): IGalleryImage => ({
  id: 0,
  url: '',
  thumbnailUrl: '',
  caption: '',
  created: new Date(),
});

/******************************************************************************
                                  Types
******************************************************************************/

/**
 * @entity galleryImage
 */
export interface IGalleryImage extends Entity {
  url: string;
  thumbnailUrl: string;
  caption: string;
}

/******************************************************************************
                                  Setup
******************************************************************************/

const schema: Schema<IGalleryImage> = {
  id: isUnsignedInteger,
  url: isNonEmptyString,
  thumbnailUrl: isNonEmptyString,
  caption: isString,  
  created: transformIsDate,
};

const isCompleteGalleryImage = testObject<IGalleryImage>({
  ...schema,
  url: isNonEmptyString,
  thumbnailUrl: isNonEmptyString,
});

/******************************************************************************
                                 Functions
******************************************************************************/

function new_(image?: Partial<IGalleryImage>): IGalleryImage {
  return parseObject<IGalleryImage>(schema)(
    { ...GetDefaults(), ...image },
    (errors) => {
      throw new Error(
        'Setup new gallery image failed ' + JSON.stringify(errors, null, 2)
      );
    }
  );
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  new: new_,
  isComplete: isCompleteGalleryImage,
} as const;