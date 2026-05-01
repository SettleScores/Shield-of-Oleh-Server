import { createMongoMapper } from './createMongoMapper';
import { IBandInfo, ISocialLink } from '../../models/BandInfo.model';

type DbSocialLink = {
  platform: string;
  url: string;
};

type DbBandInfo = {
  _id: number;
  name: string;
  copyright: string;
  socialLinks: DbSocialLink[];
  created: Date;
};

export const mapBandInfo = createMongoMapper(
  (databaseDocument: DbBandInfo): IBandInfo => ({
    id: databaseDocument._id,
    name: databaseDocument.name,
    copyright: databaseDocument.copyright,
    socialLinks: databaseDocument.socialLinks.map((link) => ({
      platform: link.platform,
      url: link.url,
    })),
    created: databaseDocument.created,
  })
);