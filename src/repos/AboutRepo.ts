import { IAbout } from "@src/models/About.model";

import { AboutMongoModel } from "@src/database/models/About.mongo";

import { mapAbout } from "@src/database/mappers/About.mapper";

export async function getAll(): Promise<IAbout> { /// TODO: Maybe abstraction for typical Repos with 'getAll' 
    const aboutDatabaseDocument = await AboutMongoModel.findOne().lean(); /// findOne because of a priori single document

    if (!aboutDatabaseDocument) {
        throw new Error("About document not found");
    }

    return mapAbout(aboutDatabaseDocument);
}

export default {
  getAll,
} as const;