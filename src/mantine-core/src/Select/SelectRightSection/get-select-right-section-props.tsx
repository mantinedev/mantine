import React from 'react';
import { MantineTheme } from '@mantine/styles';
import { SelectRightSection, SelectRightSectionProps } from './SelectRightSection';

interface GetRightSectionProps extends SelectRightSectionProps {
  rightSection?: React.ReactNode;
  rightSectionWidth?: string | number;
  styles: Record<string, any>;
  theme: MantineTheme;
  readOnly: boolean;
}

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

  const _styles = typeof styles === 'function' ? styles(theme) : styles;

  return {
    rightSection: !props.readOnly && !(props.disabled && props.shouldClear) && (
      <SelectRightSection {...props} />
    ),
    styles: {
      ..._styles,
      rightSection: {
        ..._styles?.rightSection,
        pointerEvents: props.shouldClear ? undefined : 'none',
      },
    },
  };
}
