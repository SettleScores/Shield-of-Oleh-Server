export function createMongoMapper<TDb, TDto>(
  mapDocumentToDto: (databaseDocument: TDb) => TDto
) {
  return (databaseDocument: TDb): TDto => {
    return mapDocumentToDto(databaseDocument);
  };
}