import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineStyleSystemSize,
  getDefaultZIndex,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import { Portal } from '../Portal/Portal';

export interface AffixProps
  extends Omit<DefaultProps, MantineStyleSystemSize>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLDivElement;

  /** Root element z-index property */
  zIndex?: number;

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
};

export const Affix = forwardRef<HTMLDivElement, AffixProps>((props: AffixProps, ref) => {
  const { target, position, zIndex, sx, ...others } = useMantineDefaultProps(
    'Affix',
    defaultProps,
    props
  );
  return (
    <Portal zIndex={zIndex} target={target}>
      <Box
        sx={[{ position: 'fixed', ...position }, ...(Array.isArray(sx) ? sx : [sx])]}
        ref={ref}
        {...others}
      />
    </Portal>
  );
});

Affix.displayName = '@mantine/core/Affix';
