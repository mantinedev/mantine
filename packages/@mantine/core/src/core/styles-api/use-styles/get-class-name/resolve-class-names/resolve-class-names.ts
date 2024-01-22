import cx from 'clsx';
import { MantineTheme } from '../../../../MantineProvider';
import type { _ClassNames } from '../get-class-name';

export interface ResolveClassNamesInput {
  theme: MantineTheme;
  classNames: _ClassNames;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
}

const EMPTY_CLASS_NAMES: Partial<Record<string, string>> = {};

function mergeClassNames(objects: Partial<Record<string, string>>[]) {
  const merged: Partial<Record<string, string>> = {};

  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (merged[key]) {
        merged[key] = cx(merged[key], value);
      } else {
        merged[key] = value;
      }
    });
  });

  return merged;
}

export function resolveClassNames({ theme, classNames, props, stylesCtx }: ResolveClassNamesInput) {
  const arrayClassNames = Array.isArray(classNames) ? classNames : [classNames];
  const resolvedClassNames = arrayClassNames.map((item) =>
    typeof item === 'function' ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES
  );

  return mergeClassNames(resolvedClassNames);
}
