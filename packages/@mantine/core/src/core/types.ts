import type { MantineSize } from './MantineProvider';
import type { StyleProp } from './Box';

export interface DataAttributes {
  [key: `data-${string}`]: string | number | boolean | undefined;
}

/** Responsive size prop that supports breakpoint-based values */
export type ResponsiveStyleProp<T> = StyleProp<T>;

/** Responsive MantineSize that supports breakpoint-based values */
export type MantineResponsiveSize = ResponsiveStyleProp<MantineSize | (string & {})>;
