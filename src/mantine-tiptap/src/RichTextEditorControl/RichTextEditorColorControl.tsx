import React, { forwardRef } from 'react';
import { ColorSwatch, BoxProps, useProps, ElementProps } from '@mantine/core';
import { RichTextEditorControl } from './RichTextEditorControl';
import { useRichTextEditorContext } from '../RichTextEditor.context';

export interface RichTextEditorColorControlProps extends BoxProps, ElementProps<'button'> {
  /** Color that will be set as text color, for example #ef457e */
  color: string;
}

const defaultProps: Partial<RichTextEditorColorControlProps> = {};

export const RichTextEditorColorControl = forwardRef<
  HTMLButtonElement,
  RichTextEditorColorControlProps
>((props, ref) => {
  const { color, ...others } = useProps('RichTextEditorColorControl', defaultProps, props);
  const { editor, labels } = useRichTextEditorContext();
  const currentColor = editor?.getAttributes('textStyle').color || null;
  const label = labels.colorControlLabel(color);

  return (
    <RichTextEditorControl
      {...others}
      active={currentColor === color}
      aria-label={label}
      title={label}
      onClick={() => (editor?.chain() as any).focus().setColor(color).run()}
      ref={ref}
    >
      <ColorSwatch color={color} size={14} />
    </RichTextEditorControl>
  );
});
