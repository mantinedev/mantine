import React from 'react';
import { MantineTheme } from '@mantine/styles';
import { TagInputRightSection, TagInputRightSectionProps } from './TagInputRightSection';

interface GetRightSectionProps extends TagInputRightSectionProps {
  rightSection?: React.ReactNode;
  rightSectionWidth?: string | number;
  styles: Record<string, any>;
  theme: MantineTheme;
  readOnly: boolean;
}

export function getTagInputRightSectionProps({
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
      <TagInputRightSection {...props} />
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
