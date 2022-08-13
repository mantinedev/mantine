export function clearListState<T extends Record<PropertyKey, any>>(
  field: PropertyKey,
  state: T
): T {
  if (state === null || typeof state !== 'object') {
    return {} as T;
  }

  const clone = { ...state };
  Object.keys(state).forEach((errorKey) => {
    if (errorKey.includes(`${String(field)}.`)) {
      delete clone[errorKey];
    }
  });

  return clone;
}
