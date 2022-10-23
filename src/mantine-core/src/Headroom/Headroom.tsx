/* eslint-disable react/no-unused-prop-types */
import { useHeadroom } from '@mantine/hooks';
import { DefaultProps, Selectors, useComponentDefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import React, { forwardRef } from 'react';
import { Box } from '../Box';
import useStyles from './Headroom.styles';

export type HeadroomStylesNames = Selectors<typeof useStyles>;

export interface HeadroomProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Child links */
  children?: React.ReactNode;

  /** The value to fix the headroom at */
  fixAt?: number;

  /** Called when the headroom got fixed */
  onFix?(): void;

  /** Called when the headroom got pinned */
  onPin?(): void;

  /** Called when the headroom got released */
  onRelease?(): void;

  /** Height of the header */
  height?: number;
}

const defaultProps: Partial<HeadroomProps> = { fixAt: 0, height: 30 };

export const _Headroom = forwardRef<HTMLDivElement, HeadroomProps>((props: HeadroomProps, ref) => {
  const {
    fixAt,
    onFix,
    onPin,
    onRelease,
    height,
    className,
    classNames,
    styles,
    children,
    ...others
  } = useComponentDefaultProps('Headroom', defaultProps, props);

  const isPinned = useHeadroom({ fixAt, onPin, onFix, onRelease });
  const { classes, cx } = useStyles({ isPinned, height }, { classNames, name: 'Headroom', styles });

  return (
    <Box className={cx(classes.root, className)} {...others} ref={ref}>
      <div className={classes.header}>{children}</div>
    </Box>
  );
});

_Headroom.displayName = '@mantine/core/Headroom';

export const Headroom = createPolymorphicComponent<'button', HeadroomProps>(_Headroom);
