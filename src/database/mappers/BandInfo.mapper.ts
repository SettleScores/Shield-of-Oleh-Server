import { createMongoMapper } from './createMongoMapper';
import { IBandInfo, ISocialLink } from '../../models/BandInfo.model';

export const mapBandInfo = createMongoMapper(
  (databaseDocument): IBandInfo => ({
    id: databaseDocument._id.toString(),
    name: databaseDocument.name,
    copyright: databaseDocument.copyright,
    socialLinks: databaseDocument.socialLinks.map(
      (link: any): ISocialLink => ({
        platform: link.platform,
        url: link.url,
      })
    ),
    created: databaseDocument.created,
  })
);