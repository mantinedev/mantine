import React, { forwardRef } from 'react';
import { DefaultProps, PolymorphicComponentProps, PolymorphicRef } from '@mantine/styles';
import { Box } from '../../../Box';

interface _NavbarSectionProps extends DefaultProps {
  /** Section children */
  children: React.ReactNode;

  /** Force section to take all available height */
  grow?: boolean;
}

export type NavbarSectionProps<C> = PolymorphicComponentProps<C, _NavbarSectionProps>;

type NavbarSectionComponent = <C = 'div'>(props: NavbarSectionProps<C>) => React.ReactElement;

export const NavbarSection: NavbarSectionComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    { component, children, grow = false, sx, ...others }: NavbarSectionProps<C>,
    ref: PolymorphicRef<C>
  ) => (
    <Box<any>
      component={component || 'div'}
      ref={ref}
      sx={[{ flex: grow ? 1 : 0, boxSizing: 'border-box' }, sx]}
      {...others}
    >
      {children}
    </Box>
  )
);

NavbarSection.displayName = '@mantine/core/NavbarSection';
