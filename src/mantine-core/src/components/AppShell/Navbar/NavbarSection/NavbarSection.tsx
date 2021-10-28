import React, { forwardRef } from 'react';
import {
  DefaultProps,
  useExtractedMargins,
  PolymorphicComponentProps,
  PolymorphicRef,
  useSx,
} from '@mantine/styles';

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
    { component, children, grow = false, style, className, sx, ...others }: NavbarSectionProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Element = component || 'div';
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const { css, cx, sxClassName } = useSx({ sx, className });

    return (
      <Element
        ref={ref}
        className={cx(css({ flex: grow ? 1 : 0, boxSizing: 'border-box' }), sxClassName)}
        style={mergedStyles}
        {...rest}
      >
        {children}
      </Element>
    );
  }
);

NavbarSection.displayName = '@mantine/core/NavbarSection';
