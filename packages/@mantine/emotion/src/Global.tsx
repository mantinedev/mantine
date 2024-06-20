import { css, Global as EmotionGlobal } from '@emotion/react';
import { MantineTheme, useMantineTheme } from '@mantine/core';
import type { CSSObject } from './types';

type EmotionStyles = CSSObject | CSSObject[];

interface GlobalStylesProps {
  styles: EmotionStyles | ((theme: MantineTheme) => EmotionStyles);
}

export function Global({ styles }: GlobalStylesProps) {
  const theme = useMantineTheme();
  return (
    <EmotionGlobal styles={css((typeof styles === 'function' ? styles(theme) : styles) as any)} />
  );
}
