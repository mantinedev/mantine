import type { StandardSchemaV1 } from '@standard-schema/spec';
import { filterErrors } from './hooks/use-form-errors/filter-errors/filter-errors';
import type { FormErrors } from './types';

function issuesToFormErrors(issues: ReadonlyArray<StandardSchemaV1.Issue>): FormErrors {
  const errors: FormErrors = {};
  for (const issue of issues) {
    const path = issue.path
      ? issue.path.map((segment) => (typeof segment === 'object' ? segment.key : segment)).join('.')
      : '';
    if (!errors[path]) {
      errors[path] = issue.message;
    }
  }
  return filterErrors(errors);
}

export function schemaResolver<Sync extends boolean = false>(
  schema: StandardSchemaV1,
  _options?: { sync?: Sync }
): Sync extends true ? (values: any) => FormErrors : (values: any) => Promise<FormErrors> {
  const sync = _options?.sync ?? false;
  return ((values: any) => {
    const result = schema['~standard'].validate(values);
    if (result instanceof Promise) {
      return result.then((resolved) =>
        resolved.issues ? issuesToFormErrors(resolved.issues) : {}
      );
    }
    const errors = result.issues ? issuesToFormErrors(result.issues) : {};
    return sync ? errors : Promise.resolve(errors);
  }) as any;
}
