import React from 'react';
import { Global as EmotionGlobal, css, CSSObject } from '@emotion/react';
import { useMantineTheme } from '../theme/MantineProvider';
import type { MantineTheme } from '../theme/types';

type EmotionStyles = CSSObject | CSSObject[];

interface GlobalStylesProps {
  styles: EmotionStyles | ((theme: MantineTheme) => EmotionStyles);
}

export function Global({ styles }: GlobalStylesProps) {
  const theme = useMantineTheme();
  return <EmotionGlobal styles={css(typeof styles === 'function' ? styles(theme) : styles)} />;
}
