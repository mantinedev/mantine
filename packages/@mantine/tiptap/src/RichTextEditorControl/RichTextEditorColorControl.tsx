import { BoxProps, ColorSwatch, ElementProps, useProps } from '@mantine/core';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorControl } from './RichTextEditorControl';

export interface RichTextEditorColorControlProps extends BoxProps, ElementProps<'button'> {
  /** Color that will be set as text color, for example #ef457e */
  color: string;
}

export function RichTextEditorColorControl(props: RichTextEditorColorControlProps) {
  const { color, ...others } = useProps('RichTextEditorColorControl', null, props);
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
    >
      <ColorSwatch color={color} size={14} />
    </RichTextEditorControl>
  );
}

RichTextEditorColorControl.displayName = '@mantine/tiptap/RichTextEditorColorControl';
