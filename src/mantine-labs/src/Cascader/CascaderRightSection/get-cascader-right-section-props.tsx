import React from 'react';
import { MantineTheme } from '@mantine/styles';
import { CascaderRightSection, CascaderRightSectionProps } from './CascaderRightSection';

interface GetRightSectionProps extends CascaderRightSectionProps {
  rightSection?: React.ReactNode;
  rightSectionWidth?: number;
  styles: Record<string, any>;
  theme: MantineTheme;
}

const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 44,
  xl: 54,
};

export function getCascaderRightSectionProps({
  styles,
  rightSection,
  rightSectionWidth,
  theme,
  ...props
}: GetRightSectionProps) {
  if (rightSection) {
    return { rightSection, rightSectionWidth, styles };
  }

  const _styles = typeof styles === 'function' ? styles(theme) : styles;

  return {
    rightSectionWidth: theme.fn.size({ size: props.size, sizes: RIGHT_SECTION_WIDTH }) as number,
    rightSection: !(props.disabled && props.shouldClear) && <CascaderRightSection {...props} />,
    styles: {
      ..._styles,
      rightSection: {
        ..._styles?.rightSection,
        pointerEvents: props.shouldClear ? undefined : 'none',
      },
    },
  };
}
