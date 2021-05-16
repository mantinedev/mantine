import { useMemo } from 'react';
import { createUseStyles, Styles } from 'react-jss';
import { MantineTheme } from './types';

export function createMemoStyles<C extends string = string, Props = unknown>(
  styles: Styles<C, Props, MantineTheme>
) {
  const useStyles = createUseStyles<C, Props, MantineTheme>(styles);

  return function useMemoStyles(args: Props) {
    const dependencies =
      typeof args === 'object' && args !== null
        ? Object.keys(args)
            .filter((key) => key !== 'theme')
            .map((key) => args[key])
        : [];

    if (typeof args === 'object' && 'theme' in args) {
      dependencies.push((args as any).theme.colorScheme);
    }

    const stylesProps = useMemo(() => args, dependencies);
    return useStyles(stylesProps);
  };
}
