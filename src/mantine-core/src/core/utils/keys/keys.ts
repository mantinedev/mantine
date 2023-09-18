export function keys<T extends object, K extends keyof T>(object: T): K[] {
  return Object.keys(object) as K[];
}
