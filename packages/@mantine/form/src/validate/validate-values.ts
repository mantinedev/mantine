import { filterErrors } from '../hooks/use-form-errors/filter-errors/filter-errors';
import { getPath } from '../paths';
import { FormErrors, FormRule, FormRulesRecord, FormValidateInput } from '../types';

export const formRootRule = Symbol('root-rule');

function getValidationResults(errors: FormErrors) {
  const filteredErrors = filterErrors(errors);
  return { hasErrors: Object.keys(filteredErrors).length > 0, errors: filteredErrors };
}

async function validateRulesRecordAsync<T>(
  rules: FormRulesRecord<T> | undefined,
  values: T,
  resolveValidationError: (error: unknown) => React.ReactNode,
  signal: AbortSignal,
  path = '',
  errors: FormErrors = {}
): Promise<FormErrors> {
  if (typeof rules !== 'object' || rules === null) {
    return errors;
  }

  const asyncTasks: Array<{ rulePath: string; promise: Promise<React.ReactNode> }> = [];

  for (const ruleKey of Object.keys(rules)) {
    const rule: FormRule<any, any> = (rules as any)[ruleKey];
    const rulePath = `${path === '' ? '' : `${path}.`}${ruleKey}`;
    const value = getPath(rulePath, values);
    let arrayValidation = false;

    if (typeof rule === 'function') {
      const result = rule(value, values, rulePath, signal);
      if (result instanceof Promise) {
        asyncTasks.push({ rulePath, promise: result });
      } else {
        errors[rulePath] = result;
      }
    }

    if (typeof rule === 'object' && Array.isArray(value)) {
      arrayValidation = true;
      for (let index = 0; index < value.length; index++) {
        await validateRulesRecordAsync(
          rule,
          values,
          resolveValidationError,
          signal,
          `${rulePath}.${index}`,
          errors
        );
      }

      if (formRootRule in rule) {
        const rootResult = (rule as any)[formRootRule](value, values, rulePath, signal);
        if (rootResult instanceof Promise) {
          asyncTasks.push({ rulePath, promise: rootResult });
        } else {
          errors[rulePath] = rootResult;
        }
      }
    }

    if (typeof rule === 'object' && typeof value === 'object' && value !== null) {
      if (!arrayValidation) {
        await validateRulesRecordAsync(
          rule,
          values,
          resolveValidationError,
          signal,
          rulePath,
          errors
        );
      }

      if (formRootRule in rule) {
        const rootResult = (rule as any)[formRootRule](value, values, rulePath, signal);
        if (rootResult instanceof Promise) {
          asyncTasks.push({ rulePath, promise: rootResult });
        } else {
          errors[rulePath] = rootResult;
        }
      }
    }
  }

  if (asyncTasks.length > 0) {
    const settled = await Promise.allSettled(asyncTasks.map((t) => t.promise));
    settled.forEach((result, index) => {
      const { rulePath } = asyncTasks[index];
      if (result.status === 'fulfilled') {
        errors[rulePath] = result.value;
      } else {
        errors[rulePath] = resolveValidationError(result.reason);
      }
    });
  }

  return errors;
}

const defaultResolveError = (err: unknown): React.ReactNode =>
  err instanceof Error ? err.message : String(err);

export async function validateValues<T>(
  validate: FormValidateInput<T> | undefined,
  values: T,
  resolveValidationError: (error: unknown) => React.ReactNode = defaultResolveError,
  signal: AbortSignal = new AbortController().signal
) {
  if (typeof validate === 'function') {
    const result = validate(values);
    const errors = result instanceof Promise ? await result : result;
    return getValidationResults(errors);
  }

  const errors = await validateRulesRecordAsync(validate, values, resolveValidationError, signal);
  return getValidationResults(errors);
}
