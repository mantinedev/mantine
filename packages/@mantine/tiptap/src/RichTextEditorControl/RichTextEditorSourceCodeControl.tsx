import { useEffect, useRef, useState } from 'react';
import type { Content, Editor, EditorEvents } from '@tiptap/react';
import { BoxProps, ElementProps, rem, useProps } from '@mantine/core';
import { IconBraces } from '../icons/Icons';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorControl } from './RichTextEditorControl';

export interface RichTextEditorSourceCodeControlProps extends BoxProps, ElementProps<'button'> {}

const defaultProps: Partial<RichTextEditorSourceCodeControlProps> = {};

function getSourceCodeContent(html: string) {
  return {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: html === '' ? [] : [{ type: 'text', text: html }],
      },
    ],
  };
}

export function RichTextEditorSourceCodeControl(props: RichTextEditorSourceCodeControlProps) {
  const { ...others } = useProps('RichTextEditorSourceCodeControl', defaultProps, props);
  const { editor, labels, variant, onSourceCodeTextSwitch } = useRichTextEditorContext();
  const [isSourceCodeModeActive, setIsSourceCodeModeActive] = useState(false);
  const internalUpdate = useRef(false);

  useEffect(() => {
    if (!editor || editor.isDestroyed || !isSourceCodeModeActive) {
      return undefined;
    }

    const handleTransaction = ({ transaction }: EditorEvents['transaction']) => {
      if (!internalUpdate.current && transaction.getMeta('preventUpdate') !== undefined) {
        setIsSourceCodeModeActive(false);
        onSourceCodeTextSwitch?.(false);
      }
    };

    editor.on('transaction', handleTransaction);
    return () => {
      editor.off('transaction', handleTransaction);
    };
  }, [editor, isSourceCodeModeActive, onSourceCodeTextSwitch]);

  const setContent = (target: Editor, content: Content, emitUpdate: boolean) => {
    internalUpdate.current = true;
    try {
      target.commands.setContent(content, { emitUpdate });
    } finally {
      internalUpdate.current = false;
    }
  };

  const handleStateChange = () => {
    if (!editor || editor.isDestroyed) {
      return;
    }

    if (isSourceCodeModeActive) {
      setContent(editor, editor.getText(), true);
    } else {
      setContent(editor, getSourceCodeContent(editor.getHTML()), false);
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
    >
      <IconBraces style={{ width: rem(16), height: rem(16) }} />
    </RichTextEditorControl>
  );
}

RichTextEditorSourceCodeControl.displayName = '@mantine/tiptap/RichTextEditorSourceCodeControl';
