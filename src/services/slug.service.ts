export async function generateUniqueSlug(
  baseSlug: string,
  exists: (slug: string) => Promise<boolean>
): Promise<string> {
  let slug = baseSlug;
  let counter = 1;

  while (await exists(slug)) {
    slug = `${baseSlug}-${counter++}`;
  }

  return slug;
}