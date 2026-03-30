export const REPLACE_TYPES: Record<string, string> = {
  '{ (value: any, replacer?: ((this: any, key: string, value: any) => any), space?: string | number | undefined): string; (value: any, replacer?: (string | number)[] | null | undefined, space?: string | ... 1 more ... | undefined): string; } | undefined':
    'typeof JSON.stringify',
  '((text: string, reviver?: ((this: any, key: string, value: any) => any)) => any) | undefined':
    'typeof JSON.parse',
};

export function prepareType(type: string): string {
  if (type in REPLACE_TYPES) {
    return REPLACE_TYPES[type];
  }

  return type
    .replaceAll('DefaultMantineColor', 'MantineColor')
    .replaceAll('| undefined', '')
    .trim();
}
