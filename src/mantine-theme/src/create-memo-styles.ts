import { useMemo } from 'react';
import { createUseStyles, Styles } from 'react-jss';
import { MantineTheme } from './types';

export function createMemoStyles<C extends string = string, Props = unknown, Theme = MantineTheme>(
  styles: Styles<string, Props, Theme>
) {
  const useStyles = createUseStyles<C, Props, Theme>(styles);

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
