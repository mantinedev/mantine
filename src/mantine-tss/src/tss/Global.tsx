import React from 'react';
import { Global as EmotionGlobal, css, CSSObject } from '@emotion/react';

interface GlobalStylesProps {
  styles: CSSObject;
}

export function Global({ styles }: GlobalStylesProps) {
  return <EmotionGlobal styles={css(styles)} />;
}
