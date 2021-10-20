import React from 'react';
import { DefaultProps, useExtractedMargins, useCss } from '@mantine/styles';

interface NavbarSectionProps extends DefaultProps {
  /** Section children */
  children: React.ReactNode;

  /** Force section to take all available height */
  grow?: boolean;
}

export function NavbarSection({
  children,
  grow = false,
  style,
  className,
  ...others
}: NavbarSectionProps) {
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  const { css, cx } = useCss();

  return (
    <div className={cx(css({ flex: grow ? 1 : 0 }), className)} style={mergedStyles} {...rest}>
      {children}
    </div>
  );
}
