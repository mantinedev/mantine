import React, { forwardRef } from 'react';
import { DefaultProps, getDefaultZIndex, useComponentDefaultProps } from '@mantine/styles';
import { packSx } from '@mantine/utils';
import { Box } from '../Box';
import { OptionalPortal } from '../Portal';

export interface AffixProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLDivElement;

  /** Root element z-index property */
  zIndex?: React.CSSProperties['zIndex'];

  /** Determines whether component should be rendered within portal, defaults to true */
  withinPortal?: boolean;

  /** Fixed position in px, defaults to { bottom: 0, right: 0 } */
  position?: {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
  };
}

const defaultProps: Partial<AffixProps> = {
  position: { bottom: 0, right: 0 },
  zIndex: getDefaultZIndex('modal'),
  withinPortal: true,
};

export const Affix = forwardRef<HTMLDivElement, AffixProps>((props: AffixProps, ref) => {
  const { target, position, zIndex, sx, withinPortal, ...others } = useComponentDefaultProps(
    'Affix',
    defaultProps,
    props
  );

  return (
    <OptionalPortal withinPortal={withinPortal} target={target}>
      <Box sx={[{ position: 'fixed', zIndex, ...position }, ...packSx(sx)]} ref={ref} {...others} />
    </OptionalPortal>
  );
});

Affix.displayName = '@mantine/core/Affix';
