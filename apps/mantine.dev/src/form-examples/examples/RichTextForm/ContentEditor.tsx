import { ReactNode, useEffect, useRef } from 'react';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Input } from '@mantine/core';
import { useFormField, useId } from '@mantine/hooks';
import { RichTextEditor } from '@mantine/tiptap';

interface ContentEditorProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  error?: ReactNode;
  label?: ReactNode;
  placeholder?: string;
  withAsterisk?: boolean;
  'data-path'?: string;
}

export function ContentEditor({
  value,
  defaultValue,
  onChange,
  error,
  label,
  placeholder,
  withAsterisk,
  'data-path': dataPath,
}: ContentEditorProps) {
  const id = useId();
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, Placeholder.configure({ placeholder })],
    content: value ?? defaultValue ?? '',
    editorProps: {
      attributes: {
        'aria-labelledby': `${id}-label`,
        ...(dataPath ? { 'data-path': dataPath } : {}),
      },
    },
    onUpdate: ({ editor }) => onChangeRef.current?.(editor.getHTML()),
  });

  // Subscribes the editor to the form field: the form does not rerender on every keystroke,
  // form.reset and form.setFieldValue write the new content into the editor
  useFormField<string>(onChange, {
    onExternalWrite: (content) => editor?.commands.setContent(content, { emitUpdate: false }),
  });

  return (
    <Input.Wrapper
      id={id}
      size="md"
      label={label}
      labelElement="div"
      withAsterisk={withAsterisk}
      error={error}
    >
      <RichTextEditor editor={editor} mb={error ? 5 : 0}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H2 />
            <RichTextEditor.BulletList />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content mih={160} />
      </RichTextEditor>
    </Input.Wrapper>
  );
}
