import type { CSSProperties } from 'react';
import type { MantineMargins } from './MantineMargins';
import type { MantineTheme } from './MantineTheme';
import type { CSSObject } from '../../tss';

export interface DefaultProps<T extends string = never> extends MantineMargins {
  className?: string;
  style?: CSSProperties;
  sx?: CSSObject | ((theme: MantineTheme) => CSSObject);
  classNames?: Partial<Record<T, string>>;
  styles?: Partial<Record<T, CSSObject>> | ((theme: MantineTheme) => Partial<Record<T, CSSObject>>);
}
