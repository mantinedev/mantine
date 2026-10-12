import { StandardSchemaV1 } from '@standard-schema/spec';
import { FormErrors } from './types';
import { filterErrors } from './validate/filter-errors/filter-errors';

function getSegmentIndex(
  value: object,
  segment: string,
  keysCache: WeakMap<object, Map<string, number>>
) {
  if (Array.isArray(value)) {
    const index = /^\d+$/.test(segment) ? Number(segment) : -1;
    return index < value.length ? index : -1;
  }

  if (!keysCache.has(value)) {
    keysCache.set(value, new Map(Object.keys(value).map((key, index) => [key, index])));
  }

  return keysCache.get(value)!.get(segment) ?? -1;
}

function getPathRank(
  path: string,
  values: unknown,
  keysCache: WeakMap<object, Map<string, number>>
) {
  const rank: number[] = [];
  let current = values;

  for (const segment of path.split('.')) {
    const index =
      typeof current === 'object' && current !== null
        ? getSegmentIndex(current, segment, keysCache)
        : -1;

    if (index === -1) {
      rank.push(Infinity);
      break;
    }

    rank.push(index);
    current = (current as any)[segment];
  }

  return rank;
}

function compareRanks(a: number[], b: number[]) {
  for (let index = 0; index < Math.min(a.length, b.length); index += 1) {
    if (a[index] !== b[index]) {
      return a[index] < b[index] ? -1 : 1;
    }
  }

  return a.length - b.length;
}

function sortErrorsByValues(errors: FormErrors, values: unknown): FormErrors {
  const keysCache = new WeakMap<object, Map<string, number>>();
  const ranked = Object.keys(errors).map((key) => ({
    key,
    rank: getPathRank(key, values, keysCache),
  }));
  ranked.sort((a, b) => compareRanks(a.rank, b.rank));
  return Object.fromEntries(ranked.map(({ key }) => [key, errors[key]]));
}

function issuesToFormErrors(
  issues: ReadonlyArray<StandardSchemaV1.Issue>,
  values: unknown
): FormErrors {
  const errors: FormErrors = {};
  for (const issue of issues) {
    const path = issue.path
      ? issue.path.map((segment) => (typeof segment === 'object' ? segment.key : segment)).join('.')
      : '';
    if (!errors[path]) {
      errors[path] = issue.message;
    }
  }
  return sortErrorsByValues(filterErrors(errors), values);
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
        resolved.issues ? issuesToFormErrors(resolved.issues, values) : {}
      );
    }
    const errors = result.issues ? issuesToFormErrors(result.issues, values) : {};
    return sync ? errors : Promise.resolve(errors);
  }) as any;
}
