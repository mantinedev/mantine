import React, { useContext } from 'react';
import {
  DefaultProps,
  useExtractedMargins,
  useCss,
  getSizeValue,
  useMantineTheme,
} from '@mantine/styles';
import { NavbarContext } from '../Navbar.context';

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
  const ctx = useContext(NavbarContext);
  const theme = useMantineTheme();
  const spacing = getSizeValue({ size: ctx?.padding || 0, sizes: theme.spacing });
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  const { css, cx } = useCss();

  return (
    <div
      className={cx(
        css({
          flex: grow ? 1 : 0,
          marginLeft: -spacing,
          marginRight: -spacing,
          paddingLeft: spacing,
          paddingRight: spacing,
        }),
        className
      )}
      style={mergedStyles}
      {...rest}
    >
      {children}
    </div>
  );
}
