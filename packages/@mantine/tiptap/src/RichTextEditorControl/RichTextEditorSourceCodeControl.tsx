import { forwardRef, useState } from 'react';
import { BoxProps, ElementProps, rem, useProps } from '@mantine/core';
import { IconBraces } from '../icons/Icons';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorControl } from './RichTextEditorControl';

export interface RichTextEditorSourceCodeControlProps extends BoxProps, ElementProps<'button'> {}

const defaultProps: Partial<RichTextEditorSourceCodeControlProps> = {};

export const RichTextEditorSourceCodeControl = forwardRef<
  HTMLButtonElement,
  RichTextEditorSourceCodeControlProps
>((props, ref) => {
  const { ...others } = useProps('RichTextEditorSourceCodeControl', defaultProps, props);
  const { editor, labels, variant, onSourceCodeTextSwitch } = useRichTextEditorContext();
  const [isSourceCodeModeActive, setIsSourceCodeModeActive] = useState(false);

  const handleStateChange = () => {
    if (isSourceCodeModeActive) {
      editor?.commands.setContent(editor.getText(), { emitUpdate: true });
    } else {
      editor?.commands.setContent(`<textarea>${editor.getHTML()}</textarea>`);
    }

    const isSourceCodeModeActiveNew = !isSourceCodeModeActive;

    setIsSourceCodeModeActive(isSourceCodeModeActiveNew);
    onSourceCodeTextSwitch?.(isSourceCodeModeActiveNew);
  };

  return (
    <RichTextEditorControl
      {...others}
      variant={variant}
      active={isSourceCodeModeActive}
      aria-label={labels.sourceCodeControlLabel}
      title={labels.sourceCodeControlLabel}
      onClick={() => handleStateChange()}
      ref={ref}
    >
      <IconBraces style={{ width: rem(16), height: rem(16) }} />
    </RichTextEditorControl>
  );
});

RichTextEditorSourceCodeControl.displayName = '@mantine/tiptap/RichTextEditorSourceCodeControl';
