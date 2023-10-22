import { BaseSchema, parse, ValiError } from 'valibot';
import { FormErrors } from '../../types';

export function valibotResolver<T extends Record<string, unknown>>(schema: BaseSchema<T>) {
  return (values: T): FormErrors => {
    try {
      parse(schema, values);

      return {};
    } catch (errors) {
      const results = (errors as ValiError).issues
        .filter(error => error.path)
        .reduce((acc, error) => {
          const key = error.path.map(p => p.key).join('.');
          acc[key] = error.message;
          return acc;
        }, {});
      
      return results;
    }
  };
}
