import { forwardRef } from 'react';
import { BoxProps, ColorSwatch, ElementProps, useProps } from '@mantine/core';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorControl } from './RichTextEditorControl';

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
  const { editor, labels, variant } = useRichTextEditorContext();
  const currentColor = editor?.getAttributes('textStyle').color || null;
  const label = labels.colorControlLabel(color);

  return (
    <RichTextEditorControl
      {...others}
      variant={variant}
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

RichTextEditorColorControl.displayName = '@mantine/tiptap/RichTextEditorColorControl';
