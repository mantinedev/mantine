import React from 'react';
import { MantineTheme } from '@mantine/styles';
import { SelectRightSection, SelectRightSectionProps } from './SelectRightSection';

interface GetRightSectionProps extends SelectRightSectionProps {
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

export function getSelectRightSectionProps({
  styles,
  rightSection,
  rightSectionWidth,
  theme,
  ...props
}: GetRightSectionProps) {
  if (rightSection) {
    return { rightSection, rightSectionWidth, styles };
  }

  return {
    rightSectionWidth: theme.fn.size({ size: props.size, sizes: RIGHT_SECTION_WIDTH }) as number,
    rightSection: <SelectRightSection {...props} />,
    styles: {
      ...styles,
      rightSection: {
        ...styles?.rightSection,
        pointerEvents: props.shouldClear ? undefined : 'none',
      },
    },
  };
}
