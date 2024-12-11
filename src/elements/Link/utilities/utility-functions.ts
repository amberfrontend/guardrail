export const hashifyHref = (id: string) => {
  const firstCharacter = id.substring(0, 1);
  const sanitizedHref = firstCharacter === '#' ? id : `#${id}`;

  return sanitizedHref;
};
