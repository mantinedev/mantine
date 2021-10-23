import React, { useContext, forwardRef } from 'react';
import {
  DefaultProps,
  useExtractedMargins,
  useCss,
  getSizeValue,
  useMantineTheme,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import { NavbarContext } from '../Navbar.context';

interface _NavbarSectionProps extends DefaultProps {
  /** Section children */
  children: React.ReactNode;

  /** Force section to take all available height */
  grow?: boolean;
}

export type NavbarSectionProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _NavbarSectionProps
>;

type NavbarSectionComponent = <C extends React.ElementType = 'div'>(
  props: NavbarSectionProps<C>
) => React.ReactElement;

export const NavbarSection: NavbarSectionComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    { component, children, grow = false, style, className, ...others }: NavbarSectionProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Element = component || 'div';
    const ctx = useContext(NavbarContext);
    const theme = useMantineTheme();
    const spacing = getSizeValue({ size: ctx?.padding || 0, sizes: theme.spacing });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const { css, cx } = useCss();

    return (
      <Element
        ref={ref}
        className={cx(
          css({
            flex: grow ? 1 : 0,
            boxSizing: 'border-box',
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
      </Element>
    );
  }
);

NavbarSection.displayName = '@mantine/core/NavbarSection';
