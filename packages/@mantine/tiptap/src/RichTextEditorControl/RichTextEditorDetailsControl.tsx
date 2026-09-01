import { useEditorState } from '@tiptap/react';
import { IconDetails } from '../icons/Icons';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorControlBase, RichTextEditorControlBaseProps } from './RichTextEditorControl';

export interface RichTextEditorDetailsControlProps extends RichTextEditorControlBaseProps {}

export function RichTextEditorDetailsControl(props: RichTextEditorDetailsControlProps) {
  const { editor, labels } = useRichTextEditorContext();
  const _label = labels.detailsControlLabel;

  const editorState = useEditorState({
    editor: editor ?? null,
    selector: () => {
      const safeEditor = editor && !editor.isDestroyed ? editor : null;
      if (!safeEditor) {
        return { active: false, disabled: true };
      }
      const commands = safeEditor.can() as any;
      const canSet = !!commands.setDetails?.();
      const canUnset = !!commands.unsetDetails?.();
      return {
        active: canUnset,
        disabled: !canSet && !canUnset,
      };
    },
  });

  const active = editorState?.active ?? false;
  const disabled = props.disabled || (editorState?.disabled ?? true);

  return (
    <RichTextEditorControlBase
      aria-label={_label}
      title={_label}
      icon={props.icon || IconDetails}
      {...props}
      active={active}
      disabled={disabled}
      onClick={(event) => {
        props.onClick?.(event);

        if (event.defaultPrevented || !editor || editor.isDestroyed) {
          return;
        }

        const chain = (editor as any).chain().focus();
        if ((editor.can() as any).unsetDetails?.()) {
          chain.unsetDetails().run();
        } else {
          chain.setDetails().run();
        }
      }}
    />
  );
}

RichTextEditorDetailsControl.displayName = '@mantine/tiptap/RichTextEditorDetailsControl';
