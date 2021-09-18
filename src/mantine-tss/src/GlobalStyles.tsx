import React from 'react';
import { Global, css, CSSObject } from '@emotion/react';

interface GlobalStylesProps {
  styles: CSSObject;
}

export function GlobalStyles({ styles }: GlobalStylesProps) {
  return <Global styles={css(styles)} />;
}
