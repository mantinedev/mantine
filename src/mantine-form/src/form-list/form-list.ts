const LIST_IDENTIFIER = Symbol('@mantine/form/list');

interface FormList<T> extends Array<T> {
  [LIST_IDENTIFIER]: true;
}

export function formList<T>(list: T[]): FormList<T> {
  Object.defineProperty(list, LIST_IDENTIFIER, {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  return list as FormList<T>;
}

export function isFormList(list: unknown) {
  return Array.isArray(list) && !!list[LIST_IDENTIFIER];
}
