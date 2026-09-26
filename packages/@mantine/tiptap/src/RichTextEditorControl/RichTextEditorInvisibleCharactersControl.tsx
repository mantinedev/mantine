import { useEditorState } from '@tiptap/react';
import { IconPilcrow } from '../icons/Icons';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorControlBase, RichTextEditorControlBaseProps } from './RichTextEditorControl';

export interface RichTextEditorInvisibleCharactersControlProps extends RichTextEditorControlBaseProps {}

export function RichTextEditorInvisibleCharactersControl(
  props: RichTextEditorInvisibleCharactersControlProps
) {
  const { editor, labels } = useRichTextEditorContext();
  const _label = labels.invisibleCharactersControlLabel;

  const editorState = useEditorState({
    editor: editor ?? null,
    selector: () => {
      const safeEditor = editor && !editor.isDestroyed ? editor : null;
      if (!safeEditor) {
        return { active: false, disabled: true };
      }
      const canToggle = !!(safeEditor.can() as any).toggleInvisibleCharacters?.();
      const visible = !!(safeEditor.storage as any).invisibleCharacters?.visibility?.();
      return { active: visible, disabled: !canToggle };
    },
  });

  const active = editorState?.active ?? false;
  const disabled = props.disabled || (editorState?.disabled ?? true);

  return (
    <RichTextEditorControlBase
      aria-label={_label}
      title={_label}
      icon={props.icon || IconPilcrow}
      {...props}
      active={active}
      disabled={disabled}
      onClick={(event) => {
        props.onClick?.(event);

        if (event.defaultPrevented || !editor || editor.isDestroyed) {
          return;
        }

        (editor as any).chain().focus().toggleInvisibleCharacters().run();
      }}
    />
  );
}

RichTextEditorInvisibleCharactersControl.displayName =
  '@mantine/tiptap/RichTextEditorInvisibleCharactersControl';
