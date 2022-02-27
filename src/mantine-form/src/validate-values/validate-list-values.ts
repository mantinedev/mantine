import type { FormList } from '../form-list/form-list';
import type { FormRulesRecord } from '../types';

export function validateListValues<T, K extends keyof T>(
  values: T,
  key: string,
  rules: FormRulesRecord<T, K>
) {
  const list: FormList<any> = values[key] as any;
  const results = Array(list.length).fill(undefined);

  list.forEach((item, itemIndex) => {
    if (typeof item === 'object' && item !== null) {
      Object.keys(item).forEach((listItemKey) => {
        if (typeof rules[key][listItemKey] === 'function') {
          const error = rules[key][listItemKey](item[listItemKey]);
          if (error) {
            results[itemIndex] = { ...results[itemIndex], [listItemKey]: error };
          }
        }
      });
    }
  });

  return results.every((result) => result === undefined) ? null : results;
}
