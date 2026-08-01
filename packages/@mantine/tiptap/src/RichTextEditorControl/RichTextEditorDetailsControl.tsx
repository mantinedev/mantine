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
      // Read the editor from context rather than the `useEditorState` snapshot so the control
      // reflects the live editor on init (see the note in `createControl`).
      const safeEditor = editor && !editor.isDestroyed ? editor : null;
      if (!safeEditor) {
        return { active: false, disabled: true };
      }
      // `setDetails`/`unsetDetails` are only defined when the Details extension is registered, so
      // optional chaining yields `undefined` (→ `false`) otherwise.
      const commands = safeEditor.can() as any;
      const canSet = !!commands.setDetails?.();
      const canUnset = !!commands.unsetDetails?.();
      return {
        // Pressed only when the toggle would actually remove the node. `unsetDetails` searches
        // parent nodes, so a NodeSelection on the details node itself reports `isActive('details')`
        // but cannot be unset – keying off `canUnset` avoids an active control whose click no-ops.
        active: canUnset,
        disabled: !canSet && !canUnset,
      };
    },
  });

  const active = editorState?.active ?? false;
  // Honor a caller-provided `disabled`, but never enable a control whose command cannot run.
  const disabled = props.disabled || (editorState?.disabled ?? true);

  return (
    <RichTextEditorControlBase
      aria-label={_label}
      title={_label}
      icon={props.icon || IconDetails}
      {...props}
      active={active}
      disabled={disabled}
      onClick={() => {
        // Mirror the selector's guard so a click landing during teardown does not invoke
        // commands on a `null`/destroyed editor.
        if (!editor || editor.isDestroyed) {
          return;
        }
        // Branch on `unsetDetails` availability (not `isActive`) so a NodeSelection on the details
        // node – where `unsetDetails` cannot run – wraps a new details instead of no-opping.
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
