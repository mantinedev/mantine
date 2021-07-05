import React from 'react';

type MantineStyles<T> = Record<keyof T, React.CSSProperties>;

export function mergeStyles<T extends Record<string, string>>(
  classes: T,
  styles: Partial<MantineStyles<T>>
) {
  if (!classes || !(typeof styles === 'object' && styles !== null)) {
    return {} as MantineStyles<T>;
  }

  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = styles[className];
    return acc;
  }, {}) as MantineStyles<T>;
}
