export function omitStyles(omitKeys: string[], styles: Record<string, any>) {
  if (styles == null) {
    return null;
  }

  const clone = { ...styles };
  omitKeys.forEach((key) => {
    delete clone[key];
  });

  return clone;
}
