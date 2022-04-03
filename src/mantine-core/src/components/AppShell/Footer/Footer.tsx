import React, { forwardRef } from 'react';
import { getDefaultZIndex, useMantineDefaultProps } from '@mantine/styles';
import { VerticalSection, VerticalSectionSharedProps } from '../VerticalSection/VerticalSection';

export interface FooterProps
  extends VerticalSectionSharedProps,
    React.ComponentPropsWithoutRef<'nav'> {
  /** Footer content */
  children: React.ReactNode;
}

const defaultProps: Partial<FooterProps> = {
  fixed: false,
  position: { bottom: 0, left: 0, right: 0 },
  zIndex: getDefaultZIndex('app'),
};

export const Footer = forwardRef<HTMLElement, FooterProps>((props: FooterProps, ref) => {
  const { ...others } = useMantineDefaultProps('Footer', defaultProps, props);
  return <VerticalSection section="footer" __staticSelector="Footer" {...others} ref={ref} />;
});

Footer.displayName = '@mantine/core/Footer';
