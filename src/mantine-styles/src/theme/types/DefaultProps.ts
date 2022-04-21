import type { CSSProperties } from 'react';
import type { MantineStyleSystemProps } from './MantineStyleSystem';
import type { MantineTheme } from './MantineTheme';
import type { CSSObject } from '../../tss';

export type Sx = CSSObject | ((theme: MantineTheme) => CSSObject);

export interface DefaultProps<
  StylesNames extends string = never,
  StylesParams extends Record<string, any> = never
> extends MantineStyleSystemProps {
  className?: string;
  style?: CSSProperties;
  sx?: Sx | Sx[];
  classNames?: Partial<Record<StylesNames, string>>;
  styles?:
    | Partial<Record<StylesNames, CSSObject>>
    | ((theme: MantineTheme, params: StylesParams) => Partial<Record<StylesNames, CSSObject>>);
  unstyled?: boolean;
}
