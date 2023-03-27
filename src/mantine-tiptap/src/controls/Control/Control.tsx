import React, { forwardRef } from 'react';
import { UnstyledButton, DefaultProps, Selectors, useComponentDefaultProps } from '@mantine/core';
import { useRichTextEditorContext } from '../../RichTextEditor.context';
import useStyles from './Control.styles';

export type ControlStylesNames = Selectors<typeof useStyles>;

export interface PremadeControlProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** Icon component, should support size prop */
  icon?: React.FC<{ size: number | string }>;
}

export interface RichTextEditorControlProps extends PremadeControlProps {
  /** Determines whether the control should have active state, false by default */
  active?: boolean;

  /** Determines whether the control can be interacted with, set false to make the control to act as a label */
  interactive?: boolean;
}

const defaultProps: Partial<RichTextEditorControlProps> = {
  interactive: true,
};

export const Control = forwardRef<HTMLButtonElement, RichTextEditorControlProps>((props, ref) => {
  const { className, active, children, interactive, ...others } = useComponentDefaultProps(
    'RichTextEditorControl',
    defaultProps,
    props
  );

  const { classNames, styles, unstyled, variant } = useRichTextEditorContext();
  const { classes, cx } = useStyles(null, {
    name: 'RichTextEditor',
    classNames,
    styles,
    unstyled,
    variant,
  });

  return (
    <UnstyledButton
      className={cx(classes.control, className)}
      data-rich-text-editor-control
      tabIndex={interactive ? 0 : -1}
      data-interactive={interactive || undefined}
      data-active={active || undefined}
      aria-pressed={(active && interactive) || undefined}
      aria-hidden={!interactive || undefined}
      ref={ref}
      unstyled={unstyled}
      {...others}
    >
      {children}
    </UnstyledButton>
  );
});

Control.displayName = '@mantine/tiptap/Control';
