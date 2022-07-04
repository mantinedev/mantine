export function keys<T, K extends keyof T>(object: T): K[] {
  return Object.keys(object) as K[];
}
