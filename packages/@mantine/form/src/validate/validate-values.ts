import { filterErrors } from '../hooks/use-form-errors/filter-errors/filter-errors';
import { getPath } from '../paths';
import {
  FormErrors,
  FormRule,
  FormRulesRecord,
  FormValidateInput,
  FormValidationResult,
} from '../types';

export const formRootRule = Symbol('root-rule');

function getValidationResults(errors: FormErrors): FormValidationResult {
  const filteredErrors = filterErrors(errors);
  return { hasErrors: Object.keys(filteredErrors).length > 0, errors: filteredErrors };
}

function validateRulesRecord<T>(
  rules: FormRulesRecord<T> | undefined,
  values: T,
  resolveValidationError: (error: unknown) => React.ReactNode,
  signal: AbortSignal,
  path = '',
  errors: FormErrors = {}
): FormErrors | Promise<FormErrors> {
  if (typeof rules !== 'object' || rules === null) {
    return errors;
  }

  const asyncTasks: Array<{ rulePath: string; promise: Promise<React.ReactNode> }> = [];
  const pendingRecursions: Array<Promise<FormErrors>> = [];

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
        const recursionResult = validateRulesRecord(
          rule,
          values,
          resolveValidationError,
          signal,
          `${rulePath}.${index}`,
          errors
        );
        if (recursionResult instanceof Promise) {
          pendingRecursions.push(recursionResult);
        }
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
        const recursionResult = validateRulesRecord(
          rule,
          values,
          resolveValidationError,
          signal,
          rulePath,
          errors
        );
        if (recursionResult instanceof Promise) {
          pendingRecursions.push(recursionResult);
        }
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

  if (asyncTasks.length === 0 && pendingRecursions.length === 0) {
    return errors;
  }

  return (async () => {
    await Promise.all(pendingRecursions);

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
  })();
}

const defaultResolveError = (err: unknown): React.ReactNode =>
  err instanceof Error ? err.message : String(err);

export function validateValues<T>(
  validate: FormValidateInput<T> | undefined,
  values: T,
  resolveValidationError: (error: unknown) => React.ReactNode = defaultResolveError,
  signal: AbortSignal = new AbortController().signal
): FormValidationResult | Promise<FormValidationResult> {
  if (typeof validate === 'function') {
    const result = validate(values);
    if (result instanceof Promise) {
      return result.then(getValidationResults);
    }
    return getValidationResults(result);
  }

  const errorsResult = validateRulesRecord(validate, values, resolveValidationError, signal);
  if (errorsResult instanceof Promise) {
    return errorsResult.then(getValidationResults);
  }
  return getValidationResults(errorsResult);
}
