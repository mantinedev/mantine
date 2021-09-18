import React from 'react';
import { Global, css } from '@emotion/react';
import type { CSSInterpolation } from './types';

interface GlobalStylesProps {
  styles: CSSInterpolation;
}

export function GlobalStyles({ styles }: GlobalStylesProps) {
  return <Global styles={css(styles)} />;
}
