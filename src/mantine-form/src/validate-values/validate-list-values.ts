import type { FormList } from '../form-list/form-list';
import type { FormRulesRecord, FormErrors } from '../types';

export function validateListValues<T, K extends keyof T>(
  values: T,
  key: string,
  rules: FormRulesRecord<T, K>
) {
  const list: FormList<any> = values[key] as any;
  const results: FormErrors = {};

  list.forEach((item, itemIndex) => {
    if (typeof item === 'object' && item !== null) {
      Object.keys(item).forEach((listItemKey) => {
        if (typeof rules[key][listItemKey] === 'function') {
          const error = rules[key][listItemKey](item[listItemKey]);
          if (error) {
            results[`${key}.${itemIndex}.${listItemKey}`] = error;
          }
        }
      });
    }
  });

  return results;
}
