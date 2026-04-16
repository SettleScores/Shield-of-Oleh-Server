type AnyDocumentFromDatabase = {
  _id: any;
  [key: string]: any;
};

export function createMongoMapper<T>(
  mapDocumentToDto: (databaseDocument: AnyDocumentFromDatabase) => T
) {
  return (databaseDocument: AnyDocumentFromDatabase): T => {
    return mapDocumentToDto(databaseDocument);
  };
}