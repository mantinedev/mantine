import cx from 'clsx';

export function mergeClassNames<T extends Record<string, string>>(
  classes: T,
  classNames: Partial<T>
) {
  if (
    !classes ||
    !classNames ||
    (typeof classNames === 'object' && Object.keys(classNames).length === 0)
  ) {
    return classes;
  }

  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = cx(classes[className], classNames[className]);
    return acc;
  }, {}) as T;
}
