import { createMongoMapper } from './createMongoMapper';
import { IAbout, IMember } from '../../models/About.model';

type DbMember = {
  name: string;
  role: string;
  imageUrl: string;
};

type DbAbout = {
  _id: number;
  biography: string;
  members: DbMember[];
  formedYear: number;
  origin: string;
  genre: string;
  created: Date;
};

export const mapAbout = createMongoMapper(
  (databaseDocument: DbAbout): IAbout => ({
    id: databaseDocument._id,
    biography: databaseDocument.biography,
    members: databaseDocument.members.map((member) => ({
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