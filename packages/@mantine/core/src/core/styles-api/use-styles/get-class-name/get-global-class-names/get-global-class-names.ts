import cx from 'clsx';
import { MantineTheme } from '../../../../MantineProvider';
import { GetStylesApiOptions } from '../../../styles-api.types';

interface GetGlobalClassNamesOptions {
  theme: MantineTheme;
  unstyled: boolean | undefined;
  options: GetStylesApiOptions | undefined;
}

export const FOCUS_CLASS_NAMES = {
  always: 'mantine-focus-always',
  auto: 'mantine-focus-auto',
  never: 'mantine-focus-never',
} as const;

/** Returns classes that are defined globally (focus and active styles) based on options */
export function getGlobalClassNames({ theme, options, unstyled }: GetGlobalClassNamesOptions) {
  return cx(
    options?.focusable && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
    options?.active && !unstyled && theme.activeClassName
  );
}
