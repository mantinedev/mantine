import type { CSSProperties } from 'react';
import type { MantineMargins } from './MantineMargins';

export interface DefaultProps<T extends string = never> extends MantineMargins {
  className?: string;
  style?: CSSProperties;
  classNames?: Partial<Record<T, string>>;
  styles?: Partial<Record<T, CSSProperties>>;
}
