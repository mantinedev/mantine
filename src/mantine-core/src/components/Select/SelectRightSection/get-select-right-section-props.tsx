import React from 'react';
import { getSizeValue } from '../../../theme';
import { SelectRightSection, SelectRightSectionProps } from './SelectRightSection';

interface GetRightSectionProps extends SelectRightSectionProps {
  styles: Record<string, any>;
}

const rightSectionWidth = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 44,
  xl: 54,
};

export function getSelectRightSectionProps({ styles, ...props }: GetRightSectionProps) {
  return {
    rightSectionWidth: getSizeValue({ size: props.size, sizes: rightSectionWidth }) as number,
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
