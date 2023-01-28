import React, { forwardRef } from 'react';
import { DefaultProps, Box, useComponentDefaultProps, Selectors } from '@mantine/core';
import { useRichTextEditorContext } from '../../RichTextEditor.context';
import useStyles from './ControlsGroup.styles';

export type ControlsGroupStylesNames = Selectors<typeof useStyles>;

export interface RichTextEditorControlsGroupProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {}

const defaultProps: Partial<RichTextEditorControlsGroupProps> = {};

export const ControlsGroup = forwardRef<HTMLDivElement, RichTextEditorControlsGroupProps>(
  (props, ref) => {
    const { className, children, ...others } = useComponentDefaultProps(
      'RichTextEditorControlsGroup',
      defaultProps,
      props
    );

    const { classNames, styles, unstyled } = useRichTextEditorContext();
    const { classes, cx } = useStyles(null, {
      name: 'RichTextEditor',
      classNames,
      styles,
      unstyled,
    });

    return (
      <Box className={cx(classes.controlsGroup, className)} ref={ref} {...others}>
        {children}
      </Box>
    );
  }
);

ControlsGroup.displayName = '@mantine/tiptap/ControlsGroup';
