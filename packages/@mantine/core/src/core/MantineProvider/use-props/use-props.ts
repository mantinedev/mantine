import { filterProps } from '../../utils';
import { useMantineTheme } from '../MantineThemeProvider';

export function useProps<T extends Record<string, any>, U extends Partial<T> | null = {}>(
  component: string | (string | undefined)[],
  defaultProps: U,
  props: T
): T &
  (U extends null | undefined
    ? {}
    : {
        [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>;
      }) {
  const theme = useMantineTheme();
  const names = (Array.isArray(component) ? component : [component]).filter(Boolean) as string[];

  let contextProps: Record<string, any> = {};
  for (const name of names) {
    const payload = theme.components[name]?.defaultProps;
    const resolved = typeof payload === 'function' ? payload(theme) : payload;
    if (resolved) {
      contextProps = { ...contextProps, ...resolved };
    }
  }

  return { ...defaultProps, ...contextProps, ...filterProps(props) } as any;
}
