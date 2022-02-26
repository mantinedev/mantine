const LIST_IDENTIFIER = Symbol('@mantine/form/list');

export function createFormList<T extends any[]>(list: T) {
  Object.defineProperty(list, LIST_IDENTIFIER, {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  return list;
}

export function isFormList(list: any[]) {
  return Array.isArray(list) && !!list[LIST_IDENTIFIER];
}
