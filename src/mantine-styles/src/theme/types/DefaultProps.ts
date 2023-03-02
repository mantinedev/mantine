import type { CSSProperties } from 'react';
import type { MantineStyleSystemProps } from './MantineStyleSystem';
import type { MantineTheme, ContextStylesParams } from './MantineTheme';
import type { CSSObject } from '../../tss';

export type Sx = CSSObject | ((theme: MantineTheme) => CSSObject);

export type ClassNames<StylesNames extends string> = Partial<Record<StylesNames, string>>;
export type Styles<StylesNames extends string, StylesParams extends Record<string, any> = never> =
  | Partial<Record<StylesNames, CSSObject>>
  | ((
      theme: MantineTheme,
      params: StylesParams,
      context: ContextStylesParams
    ) => Partial<Record<StylesNames, CSSObject>>);

export interface DefaultProps<
  StylesNames extends string = never,
  StylesParams extends Record<string, any> = Record<string, any>
> extends MantineStyleSystemProps {
  className?: string;
  style?: CSSProperties;
  sx?: Sx | (Sx | undefined)[];
  classNames?: ClassNames<StylesNames>;
  styles?: Styles<StylesNames, StylesParams>;
  unstyled?: boolean;
}
