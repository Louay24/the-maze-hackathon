export const getPathByString = (
  path: string,
  object: Record<string, Record<string, unknown>>
) => {
  const paths = path.split('.');
  let currentObject = object as Record<string, unknown>;

  paths.forEach((pathSegment: string) => {
    currentObject = currentObject[pathSegment] as Record<string, unknown>;
  });

  return currentObject;
};
