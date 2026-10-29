export function getDataAttributes(mod: Record<string, boolean | undefined>) {
  const attributes: Record<`data-${string}`, true> = {};
  for (const key in mod) {
    if (mod[key]) {
      attributes[`data-${key}`] = true;
    }
  }
  return attributes;
}
