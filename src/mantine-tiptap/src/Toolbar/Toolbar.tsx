import React, { forwardRef } from 'react';
import {
  Group,
  DefaultProps,
  useComponentDefaultProps,
  Selectors,
  useContextStylesApi,
} from '@mantine/core';
import useStyles from './Toolbar.styles';

export type ToolbarStylesNames = Selectors<typeof useStyles>;

export interface RichTextEditorToolbarProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Determines whether position: sticky styles should be added to the toolbar, false by default */
  sticky?: boolean;

  /** Sets top style to offset elements with fixed position, 0 by default */
  stickyOffset?: React.CSSProperties['top'];
}

const defaultProps: Partial<RichTextEditorToolbarProps> = {
  stickyOffset: 0,
};

export const Toolbar = forwardRef<HTMLDivElement, RichTextEditorToolbarProps>((props, ref) => {
  const { className, children, sticky, stickyOffset, ...others } = useComponentDefaultProps(
    'RichTextEditorToolbar',
    defaultProps,
    props
  );

  const { classNames, styles, unstyled } = useContextStylesApi();
  const { classes, cx } = useStyles(
    { sticky, stickyOffset },
    { name: 'RichTextEditor', classNames, styles, unstyled }
  );

  return (
    <Group className={cx(classes.toolbar, className)} ref={ref} {...others}>
      {children}
    </Group>
  );
});

Toolbar.displayName = '@mantine/tiptap/Toolbar';
