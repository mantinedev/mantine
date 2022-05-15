import type { CSSProperties } from 'react';
import type { MantineStyleSystemProps } from './MantineStyleSystem';
import type { MantineTheme } from './MantineTheme';
import type { CSSObject } from '../../tss';

export type Sx = CSSObject | ((theme: MantineTheme) => CSSObject);

export interface DefaultProps<T extends string = never> extends MantineStyleSystemProps {
  className?: string;
  style?: CSSProperties;
  sx?: Sx | (Sx | undefined)[];
  classNames?: Partial<Record<T, string>>;
  styles?: Partial<Record<T, CSSObject>> | ((theme: MantineTheme) => Partial<Record<T, CSSObject>>);
}
