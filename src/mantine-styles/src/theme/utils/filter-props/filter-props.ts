export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<T>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as T);
}
