import { useMantineProviderStyles } from '../../../theme/MantineProvider';

interface Input<T extends Record<string, string>> {
  cx(...classNames: any): string;
  classes: T;
  context: ReturnType<typeof useMantineProviderStyles>;
  classNames: Partial<T>;
  name: string | string[];
}

export function mergeClassNames<T extends Record<string, string>>({
  cx,
  classes,
  context,
  classNames,
  name,
}: Input<T>) {
  const contextClassNames = context.reduce<Record<string, string>>((acc, item) => {
    Object.keys(item.classNames).forEach((key) => {
      if (typeof acc[key] !== 'string') {
        acc[key] = `${item.classNames[key]}`;
      } else {
        acc[key] = `${acc[key]} ${item.classNames[key]}`;
      }
    });

    return acc;
  }, {});

  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = cx(
      classes[className],
      contextClassNames[className],
      classNames != null && classNames[className],
      Array.isArray(name)
        ? name
            .filter(Boolean)
            .map((part) => `mantine-${part}-${className}`)
            .join(' ')
        : name
        ? `mantine-${name}-${className}`
        : null
    );
    return acc;
  }, {}) as T;
}
