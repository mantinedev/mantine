import type { CSSProperties } from 'react';

export interface DefaultProps<T extends string = never> {
  className?: string;
  style?: CSSProperties;
  classNames?: Partial<Record<T, string>>;
  styles?: Partial<Record<T, CSSProperties>>;
}
