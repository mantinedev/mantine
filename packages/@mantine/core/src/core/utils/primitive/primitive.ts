export type Primitive = string | number | boolean | bigint;

export function isPrimitive(value: unknown): value is Primitive {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'bigint'
  );
}
