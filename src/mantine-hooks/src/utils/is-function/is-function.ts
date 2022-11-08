export function isFunction(x: unknown): x is Function {
  return typeof x === 'function';
}
