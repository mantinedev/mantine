import { FormRulesRecord } from '../types';
import { formRootRule } from './validate-values';

export function getRuleForPath<T>(
  path: string,
  rules: FormRulesRecord<T> | undefined
): ((value: any, values: any, path: string, signal: AbortSignal) => any) | null {
  if (!rules) {
    return null;
  }

  const segments = path.split('.');
  let current: any = rules;

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

    if (/^\d+$/.test(segment)) {
      continue;
    }

    if (current == null || typeof current !== 'object') {
      return null;
    }

    current = current[segment];
  }

  if (typeof current === 'function') {
    return current;
  }

  const isListItemPath = /^\d+$/.test(segments[segments.length - 1]);

  if (
    !isListItemPath &&
    current != null &&
    typeof current === 'object' &&
    formRootRule in current
  ) {
    return current[formRootRule];
  }

  return null;
}
