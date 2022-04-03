export function mergeClassNames<T extends Record<string, string>>(
  cx: (..._classNames: any) => string,
  classes: T,
  themeClassNames: Partial<T>,
  classNames: Partial<T>,
  name: string
) {
  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = cx(
      classes[className],
      themeClassNames !== null && themeClassNames[className],
      classNames != null && classNames[className],
      name ? `mantine-${name}-${className}` : null
    );
    return acc;
  }, {}) as T;
}
