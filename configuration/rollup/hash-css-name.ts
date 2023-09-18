import path from 'path';

/* eslint-disable no-bitwise */
export function hashCode(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    const chr = input.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return (hash + 2147483648).toString(16);
}

export function generateScopedName(selector: string, fileName: string) {
  const componentName = path.basename(fileName).replace('.module', '').replace('.css', '');
  return `m-${hashCode(`${componentName}-${selector}`)}`;
}
