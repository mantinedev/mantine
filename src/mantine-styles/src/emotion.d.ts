import type { MantineTheme } from './index';
import '@emotion/react';

declare module '@emotion/react' {
  export type Theme = MantineTheme;
}
