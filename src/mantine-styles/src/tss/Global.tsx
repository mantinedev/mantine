import React from 'react';
import { Global as EmotionGlobal, css, CSSObject } from '@emotion/react';
import { useMantineTheme } from '../theme/MantineProvider';
import type { MantineTheme } from '../theme/types';

interface GlobalStylesProps {
  styles(theme: MantineTheme): CSSObject;
}

export function Global({ styles }: GlobalStylesProps) {
  const theme = useMantineTheme();
  return <EmotionGlobal styles={css(styles(theme))} />;
}
