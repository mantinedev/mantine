export function mergeEventHandlers<T extends Record<string, any>>(
  ...handlersList: (T | undefined | null | false)[]
): Partial<T> {
  const merged: Record<string, any> = {};

  for (const handlers of handlersList) {
    if (!handlers) {
      continue;
    }

    for (const key of Object.keys(handlers)) {
      const handler = handlers[key];

      if (typeof handler !== 'function') {
        continue;
      }

      const existing = merged[key];
      merged[key] = existing
        ? (...args: any[]) => {
            existing(...args);
            handler(...args);
          }
        : handler;
    }
  }

  return merged as Partial<T>;
}
