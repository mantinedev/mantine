import React, { forwardRef } from 'react';
import { ColorSwatch, DefaultProps, useComponentDefaultProps } from '@mantine/core';
import { Control } from '../Control/Control';
import { useRichTextEditorContext } from '../../RichTextEditor.context';

export interface RichTextEditorColorControlProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** Color that will be set as text color, for example #ef457e */
  color: string;
}

const defaultProps: Partial<RichTextEditorColorControlProps> = {};

export const ColorControl = forwardRef<HTMLButtonElement, RichTextEditorColorControlProps>(
  (props, ref) => {
    const { color, ...others } = useComponentDefaultProps(
      'RichTextEditorColorControl',
      defaultProps,
      props
    );
    const { editor, labels, unstyled } = useRichTextEditorContext();
    const currentColor = editor?.getAttributes('textStyle').color || null;
    const label = labels.colorControlLabel(color);

    return (
      <Control
        active={currentColor === color}
        aria-label={label}
        title={label}
        onClick={() => (editor.chain() as any).focus().setColor(color).run()}
        {...others}
        ref={ref}
      >
        <ColorSwatch color={color} size={14} unstyled={unstyled} />
      </Control>
    );
  }
);
