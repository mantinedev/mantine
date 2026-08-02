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
      // Read the editor from context rather than the `useEditorState` snapshot so the control
      // reflects the live editor on init (see the note in `createControl`).
      const safeEditor = editor && !editor.isDestroyed ? editor : null;
      if (!safeEditor) {
        return { active: false, disabled: true };
      }
      // `toggleInvisibleCharacters` is only defined when the InvisibleCharacters extension is
      // registered, so optional chaining yields `undefined` (→ disabled) otherwise. The pressed
      // state comes from the extension storage (live plugin state), not `can()`, which is always
      // true for the toggle regardless of the current visibility.
      const canToggle = !!(safeEditor.can() as any).toggleInvisibleCharacters?.();
      const visible = !!(safeEditor.storage as any).invisibleCharacters?.visibility?.();
      return { active: visible, disabled: !canToggle };
    },
  });

  const active = editorState?.active ?? false;
  // Honor a caller-provided `disabled`, but never enable a control whose command cannot run.
  const disabled = props.disabled || (editorState?.disabled ?? true);

  return (
    <RichTextEditorControlBase
      aria-label={_label}
      title={_label}
      icon={props.icon || IconPilcrow}
      {...props}
      active={active}
      disabled={disabled}
      onClick={() => {
        // Mirror the selector's guard so a click landing during teardown does not invoke
        // commands on a `null`/destroyed editor.
        if (!editor || editor.isDestroyed) {
          return;
        }
        (editor as any).chain().focus().toggleInvisibleCharacters().run();
      }}
    />
  );
}

RichTextEditorInvisibleCharactersControl.displayName =
  '@mantine/tiptap/RichTextEditorInvisibleCharactersControl';
