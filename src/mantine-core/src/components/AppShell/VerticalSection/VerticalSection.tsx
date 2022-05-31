import React, { forwardRef } from 'react';
import { DefaultProps, getDefaultZIndex, Global } from '@mantine/styles';
import { Box } from '../../Box';
import { useAppShellContext } from '../AppShell.context';
import useStyles, { VerticalSectionPosition } from './VerticalSection.styles';

export interface VerticalSectionSharedProps extends DefaultProps {
  /** Section content */
  children: React.ReactNode;

  /** Section height */
  height: number | string;

  /** Changes position to fixed, controlled by AppShell component if rendered inside */
  fixed?: boolean;

  /** Control top, left, right or bottom position values, controlled by AppShell component if rendered inside */
  position?: VerticalSectionPosition;

  /** z-index */
  zIndex?: number;
}

interface VerticalSectionProps
  extends VerticalSectionSharedProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
  section: 'header' | 'footer';
  __staticSelector: string;
}

export const VerticalSection = forwardRef<HTMLElement, VerticalSectionProps>(
  (
    {
      children,
      className,
      classNames,
      styles,
      height,
      fixed = false,
      position,
      zIndex = getDefaultZIndex('app'),
      section,
      unstyled,
      __staticSelector,
      ...others
    }: VerticalSectionProps,
    ref
  ) => {
    const ctx = useAppShellContext();

    const { classes, cx } = useStyles(
      {
        height,
        fixed: ctx.fixed || fixed,
        position,
        zIndex: ctx.zIndex || zIndex,
        borderPosition: section === 'header' ? 'bottom' : 'top',
      },
      { name: __staticSelector, classNames, styles, unstyled }
    );

    return (
      <Box
        component={section === 'header' ? 'header' : 'footer'}
        className={cx(classes.root, className)}
        ref={ref}
        {...others}
      >
        {children}
        <Global
          styles={() => ({
            ':root': {
              [`--mantine-${section}-height`]: `${height}px`,
            },
          })}
        />
      </Box>
    );
  }
);

VerticalSection.displayName = '@mantine/core/VerticalSection';
