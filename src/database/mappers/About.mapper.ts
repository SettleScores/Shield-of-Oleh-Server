import { createMongoMapper } from './createMongoMapper';
import { IAbout, IMember } from '../../models/About.model';

export const mapAbout = createMongoMapper(
  (databaseDocument): IAbout => ({
    id: databaseDocument._id.toString(),
    biography: databaseDocument.biography,
    members: databaseDocument.members.map((member: any): IMember => ({
      name: member.name,
      role: member.role,
      imageUrl: member.imageUrl,
    })),
    formedYear: databaseDocument.formedYear,
    origin: databaseDocument.origin,
    genre: databaseDocument.genre,
    created: databaseDocument.created,
  })
);