import '@emotion/react';
import { MantineTheme } from '@mantine/core';

declare module '@emotion/react' {
  export interface Theme extends MantineTheme {}
}
